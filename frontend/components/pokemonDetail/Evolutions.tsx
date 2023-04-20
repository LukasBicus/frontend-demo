import { NarrowPokemonFieldsFragment } from '@/__generated__/graphql'
import React from 'react'

interface IEvolutionsProps {
  initialEvolutions: NarrowPokemonFieldsFragment[]
}

export const Evolutions: React.FC<IEvolutionsProps> = ({
  initialEvolutions,
}: IEvolutionsProps) => {
  return <div>{JSON.stringify(initialEvolutions)}</div>
}
