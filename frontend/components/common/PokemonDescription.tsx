import { NarrowPokemonFieldsFragment } from '@/__generated__/graphql'
import { Popularity } from '@/components/common/Popularity'
import { getPokemonDetailRoute } from '@/lib/routes'
import styles from '@/styles/pokemonDescription.module.scss'
import Link from 'next/link'
import React from 'react'

export interface IPokemonDescriptionProps {
  pokemon: NarrowPokemonFieldsFragment
}

export const PokemonDescription: React.FC<IPokemonDescriptionProps> = ({
  pokemon,
}: IPokemonDescriptionProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.description}>
        <Link className={styles.name} href={getPokemonDetailRoute(pokemon.id)}>
          {pokemon.name}
        </Link>
        {pokemon.types && (
          <span className={styles.types}>{pokemon.types.join(', ')}</span>
        )}
      </div>
      <Popularity pokemon={pokemon} tooltipAlign="top-right" />
    </div>
  )
}
