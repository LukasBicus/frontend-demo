'use client'
import {
  Pokemon,
  useFavoritePokemonMutation,
  useUnFavoritePokemonMutation,
} from '@/__generated__/graphql'
import { useLoading } from '@/components/common/LoadingProvider'
import { getClient } from '@/lib/apolloClient'
import styles from '@/styles/popularity.module.scss'
import { Favorite, FavoriteFilled } from '@carbon/icons-react'
import { IconButton } from '@carbon/react'
import cn from 'classnames'
import React, { useCallback } from 'react'

export enum PopularitySize {
  Large = 'large',
  Normal = 'normal',
}

interface IPopularityProps {
  pokemon: Pick<Pokemon, 'id' | 'isFavorite'>
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
  pokemon: { isFavorite, id },
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
  const { showLoading, hideLoading } = useLoading()
  const handleClick = useCallback(async () => {
    try {
      showLoading()
      if (isFavorite) {
        await unFavoritePokemonMutation({ variables: { id } })
      } else {
        await favoritePokemonMutation({ variables: { id } })
      }
    } catch (e) {
      // todo: Add toast with an error message
      console.error(e)
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
      {isFavorite ? <FavoriteFilled /> : <Favorite />}
    </IconButton>
  )
}
