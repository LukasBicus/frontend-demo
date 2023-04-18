'use client'
import { Pokemon } from '@/__generated__/graphql'
import { Favorite, FavoriteFilled } from '@carbon/icons-react'
import { IconButton } from '@carbon/react'
import React from 'react'

interface IPopularityProps {
  pokemon: Pick<Pokemon, 'id' | 'isFavorite'>
}

export const Popularity: React.FC<IPopularityProps> = ({
  pokemon: { isFavorite, id },
}: IPopularityProps) => {
  return (
    <div>
      {id}: {String(isFavorite)}
      <IconButton kind="ghost" size="lg" label="Add pokemon to favorites">
        <Favorite />
      </IconButton>
      <IconButton kind="ghost" size="lg" label="Remove pokemon from favorites">
        <FavoriteFilled />
      </IconButton>
    </div>
  )
}
