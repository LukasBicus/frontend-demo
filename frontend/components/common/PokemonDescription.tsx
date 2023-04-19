import { Pokemon } from '@/__generated__/graphql'
import { Popularity } from '@/components/common/Popularity'
import styles from '@/styles/pokemonDescription.module.scss'
import Link from 'next/link'
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
        <Link className={styles.name} href={`pokemons/${pokemon.id}`}>
          {pokemon.name}
        </Link>
        <span className={styles.types}>{pokemon.types.join(', ')}</span>
      </div>
      <Popularity pokemon={pokemon} tooltipAlign="top-right" />
    </div>
  )
}
