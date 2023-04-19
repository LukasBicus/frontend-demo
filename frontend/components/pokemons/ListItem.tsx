import { NarrowPokemonFieldsFragment } from '@/__generated__/graphql'
import { PokemonDescription } from '@/components/common/PokemonDescription'
import styles from '@/styles/pokemons.module.scss'
import Image from 'next/image'
import React from 'react'

interface IListItemProps {
  pokemon: NarrowPokemonFieldsFragment
}

export const ListItem: React.FC<IListItemProps> = ({
  pokemon,
}: IListItemProps) => {
  return (
    <div className={styles.listItem}>
      <div className={styles.imageWrapper}>
        <Image src={pokemon.image} alt={pokemon.name} width={58} height={58} />
      </div>
      <PokemonDescription pokemon={pokemon} />
    </div>
  )
}
