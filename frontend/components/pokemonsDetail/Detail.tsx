import { PokemonDetailFieldsFragment } from '@/__generated__/graphql'
import React from 'react'

interface IDetailProps {
  initialPokemon: PokemonDetailFieldsFragment
}

export const Detail: React.FC<IDetailProps> = ({
  initialPokemon,
}: IDetailProps) => {
  return <div>{JSON.stringify(initialPokemon)}</div>
}
