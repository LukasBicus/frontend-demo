import { NarrowPokemonFieldsFragment } from '@/__generated__/graphql'
import { Popularity } from '@/components/common/Popularity'
import styles from '@/styles/pokemons.module.scss'
import React from 'react'

interface IListItemProps {
  pokemon: NarrowPokemonFieldsFragment
}

export const ListItem: React.FC<IListItemProps> = ({
  pokemon,
}: IListItemProps) => {
  return (
    <div className={styles.listItem}>
      <span>{pokemon.image}</span>
      <span>{pokemon.name}</span>
      <Popularity pokemon={pokemon} />
    </div>
  )
}
