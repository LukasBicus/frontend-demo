import { NarrowPokemonFieldsFragment } from '@/__generated__/graphql'
import { Popularity } from '@/components/common/Popularity'
import React from 'react'

interface IListItemProps {
  pokemon: NarrowPokemonFieldsFragment
}

export const ListItem: React.FC<IListItemProps> = ({
  pokemon,
}: IListItemProps) => {
  return (
    <div>
      {pokemon.image}
      {pokemon.name}
      <Popularity pokemon={pokemon} />
    </div>
  )
}
