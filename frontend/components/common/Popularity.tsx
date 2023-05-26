'use client'
import {
  Pokemon,
  useFavoritePokemonMutation,
  useUnFavoritePokemonMutation,
} from '@/__generated__/graphql'
import { ToastKind, useToastContext } from '@/components/common/ToastProvider'
import { getClient } from '@/lib/apolloClient'
import { Reference } from '@apollo/client/utilities'
import { IconButton } from '@carbon/react'
import Favorite from '@material-design-icons/svg/outlined/favorite.svg'
import FavoriteBorder from '@material-design-icons/svg/outlined/favorite_border.svg'
import cn from 'classnames'
import React, { useCallback } from 'react'
import styles from './Popularity.module.scss'

export enum PopularitySize {
  Large = 'large',
  Normal = 'normal',
}

interface IPopularityProps {
  pokemon: Pick<Pokemon, 'id' | 'isFavorite' | 'name'>
  size?: PopularitySize
  tooltipAlign?:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'left'
    | 'right'
}

export const Popularity: React.FC<IPopularityProps> = ({
  pokemon: { isFavorite, id, name },
  size = PopularitySize.Normal,
  tooltipAlign,
}) => {
  const client = getClient()
  const [unFavoritePokemonMutation] = useUnFavoritePokemonMutation({
    client,
    onCompleted: (data) => {
      client.cache.modify({
        fields: {
          pokemons: (existingPokemonsRefs, modifierDetails) =>
            modifierDetails.storeFieldName.includes('"isFavorite":true')
              ? {
                  ...existingPokemonsRefs,
                  edges: existingPokemonsRefs.edges.filter(
                    (ref: Reference) =>
                      data.unFavoritePokemon?.id !==
                      modifierDetails.readField('id', ref),
                  ),
                }
              : existingPokemonsRefs,
        },
      })
    },
  })
  const [favoritePokemonMutation] = useFavoritePokemonMutation({
    client,
  })
  const { showToast } = useToastContext()
  const handleClick = useCallback(async () => {
    try {
      if (isFavorite) {
        await unFavoritePokemonMutation({
          variables: { id },
          optimisticResponse: {
            unFavoritePokemon: {
              id: id,
              isFavorite: false,
              __typename: 'Pokemon',
            },
          },
        })
        showToast({
          title: 'Popularity changed',
          subtitle: `${name} is no more favorite`,
        })
      } else {
        await favoritePokemonMutation({
          variables: { id },
          optimisticResponse: {
            favoritePokemon: {
              id: id,
              isFavorite: true,
              __typename: 'Pokemon',
            },
          },
        })
        showToast({
          title: 'Popularity changed',
          subtitle: `${name} is favorite now`,
        })
      }
    } catch (e) {
      showToast({
        kind: ToastKind.Error,
        title: 'Failed to change pokemon popularity',
      })
    }
  }, [
    isFavorite,
    id,
    favoritePokemonMutation,
    unFavoritePokemonMutation,
    name,
    showToast,
  ])
  return (
    <IconButton
      onClick={handleClick}
      align={tooltipAlign}
      kind="ghost"
      size="lg"
      label={
        isFavorite
          ? 'Remove pokemon from favorites'
          : 'Add pokemon to favorites'
      }
      className={cn(
        styles.popularityButton,
        size === PopularitySize.Large ? styles.large : styles.normal,
      )}
    >
      {isFavorite ? (
        <Favorite viewBox="0 0 24 24" />
      ) : (
        <FavoriteBorder viewBox="0 0 24 24" />
      )}
    </IconButton>
  )
}
