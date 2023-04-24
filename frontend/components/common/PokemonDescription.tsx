import { NarrowPokemonFieldsFragment } from '@/__generated__/graphql'
import { Popularity } from '@/components/common/Popularity'
import { getPokemonDetailByNameRoute } from '@/lib/routes'
import styles from '@/styles/pokemonDescription.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import React from 'react'

export interface IPokemonDescriptionProps {
  pokemon: NarrowPokemonFieldsFragment
}

export const PokemonDescription: React.FC<IPokemonDescriptionProps> = ({
  pokemon,
}: IPokemonDescriptionProps) => {
  return (
    <div
      className={cn(styles.root, { [styles.rootWithNoTypes]: !pokemon.types })}
    >
      <div className={styles.description}>
        <Link
          className={cn('bold-plex-18', styles.name)}
          href={getPokemonDetailByNameRoute(pokemon.name)}
        >
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
