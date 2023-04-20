import { NarrowPokemonFieldsFragment } from '@/__generated__/graphql'
import { PokemonDescription } from '@/components/common/PokemonDescription'
import { getPokemonDetailRoute } from '@/lib/routes'
import styles from '@/styles/pokemons.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IListItemProps {
  pokemon: NarrowPokemonFieldsFragment
}

export const ListItem: React.FC<IListItemProps> = ({
  pokemon,
}: IListItemProps) => {
  return (
    <div className={styles.listItem}>
      <Link
        className={styles.imageWrapper}
        href={getPokemonDetailRoute(pokemon.id)}
      >
        <Image src={pokemon.image} alt={pokemon.name} width={58} height={58} />
      </Link>
      <PokemonDescription pokemon={pokemon} />
    </div>
  )
}
