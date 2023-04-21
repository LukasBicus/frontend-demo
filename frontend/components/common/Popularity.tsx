'use client'
import {
  Pokemon,
  useFavoritePokemonMutation,
  useUnFavoritePokemonMutation,
} from '@/__generated__/graphql'
import { useLoading } from '@/components/common/LoadingProvider'
import { ToastKind, useToastContext } from '@/components/common/ToastProvider'
import { getClient } from '@/lib/apolloClient'
import styles from '@/styles/popularity.module.scss'
import { IconButton } from '@carbon/react'
import Favorite from '@material-design-icons/svg/outlined/favorite.svg'
import FavoriteBorder from '@material-design-icons/svg/outlined/favorite_border.svg'
import cn from 'classnames'
import React, { useCallback } from 'react'

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
}: IPopularityProps) => {
  const client = getClient()
  const [unFavoritePokemonMutation] = useUnFavoritePokemonMutation({
    client,
    refetchQueries: ['GetPokemons'],
    awaitRefetchQueries: true,
  })
  const [favoritePokemonMutation] = useFavoritePokemonMutation({
    client,
    refetchQueries: ['GetPokemons'],
    awaitRefetchQueries: true,
  })
  const { showToast } = useToastContext()
  const { showLoading, hideLoading } = useLoading()
  const handleClick = useCallback(async () => {
    try {
      showLoading()
      if (isFavorite) {
        await unFavoritePokemonMutation({ variables: { id } })
        showToast({
          title: `${name} is no more favorite`,
        })
      } else {
        await favoritePokemonMutation({ variables: { id } })
        showToast({
          title: `${name} is favorite now`,
        })
      }
    } catch (e) {
      showToast({
        kind: ToastKind.Error,
        title: 'Failed to change pokemon popularity',
      })
    } finally {
      hideLoading()
    }
  }, [
    isFavorite,
    id,
    favoritePokemonMutation,
    hideLoading,
    showLoading,
    unFavoritePokemonMutation,
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
