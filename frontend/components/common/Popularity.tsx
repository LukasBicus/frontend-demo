'use client'
import { Pokemon } from '@/__generated__/graphql'
import styles from '@/styles/popularity.module.scss'
import { Favorite, FavoriteFilled } from '@carbon/icons-react'
import { IconButton } from '@carbon/react'
import cn from 'classnames'
import React, { useCallback } from 'react'

interface IPopularityProps {
  pokemon: Pick<Pokemon, 'id' | 'isFavorite'>
}

export const Popularity: React.FC<IPopularityProps> = ({
  pokemon: { isFavorite, id },
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
        label="Add pokemon to favorites"
        className={cn(styles.popularityButton, styles.large)}
      >
        <Favorite />
      </IconButton>
      <IconButton
        onClick={handleClick}
        kind="ghost"
        size="lg"
        label="Remove pokemon from favorites"
        className={cn(styles.popularityButton, styles.normal)}
      >
        <FavoriteFilled />
      </IconButton>
    </div>
  )
}
