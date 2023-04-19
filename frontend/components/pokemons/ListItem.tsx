import { NarrowPokemonFieldsFragment } from '@/__generated__/graphql'
import { Popularity } from '@/components/common/Popularity'
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
      <div className={styles.description}>
        <span className={styles.name}>{pokemon.name}</span>
        <span>{pokemon.types.join(', ')}</span>
      </div>
      <Popularity pokemon={pokemon} tooltipAlign="top-right" />
    </div>
  )
}
