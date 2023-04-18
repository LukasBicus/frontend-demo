'use client'
import { Pokemon } from '@/__generated__/graphql'
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
}

export const Popularity: React.FC<IPopularityProps> = ({
  pokemon: { isFavorite, id },
  size = PopularitySize.Normal,
}: IPopularityProps) => {
  const handleClick = useCallback(() => {
    console.log('click')
  }, [])
  return (
    <div>
      id: {id}: {String(isFavorite)}
      <IconButton
        onClick={handleClick}
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
    </div>
  )
}
