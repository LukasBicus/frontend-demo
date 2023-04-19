import { Pokemon } from '@/__generated__/graphql'
import { Popularity } from '@/components/common/Popularity'
import React from 'react'

interface IPokemonCardProps {
  pokemon: Pick<Pokemon, 'id' | 'isFavorite' | 'name' | 'types' | 'image'>
}

export const PokemonCard: React.FC<IPokemonCardProps> = ({
  pokemon,
}: IPokemonCardProps) => {
  return (
    <div>
      Card: {pokemon.name}
      <Popularity pokemon={pokemon} />
    </div>
  )
}
