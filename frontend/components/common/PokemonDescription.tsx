import { Pokemon } from '@/__generated__/graphql'
import { Popularity } from '@/components/common/Popularity'
import styles from '@/styles/pokemonDescription.module.scss'
import React from 'react'

export interface IPokemonDescriptionProps {
  pokemon: Pick<Pokemon, 'id' | 'isFavorite' | 'name' | 'types'>
}

export const PokemonDescription: React.FC<IPokemonDescriptionProps> = ({
  pokemon,
}: IPokemonDescriptionProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.description}>
        <span className={styles.name}>{pokemon.name}</span>
        <span className={styles.types}>{pokemon.types.join(', ')}</span>
      </div>
      <Popularity pokemon={pokemon} tooltipAlign="top-right" />
    </div>
  )
}
