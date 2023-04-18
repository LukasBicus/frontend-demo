'use client'
import { Pokemon } from '@/__generated__/graphql'
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
    </div>
  )
}
