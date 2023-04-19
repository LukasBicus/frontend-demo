import { Pokemon } from '@/__generated__/graphql'
import { PokemonDescription } from '@/components/common/PokemonDescription'
import { getPokemonDetailRoute } from '@/components/common/routes'
import styles from '@/styles/pokemonCard.module.scss'
import { AspectRatio } from '@carbon/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IPokemonCardProps {
  pokemon: Pick<Pokemon, 'id' | 'isFavorite' | 'name' | 'types' | 'image'>
}

export const PokemonCard: React.FC<IPokemonCardProps> = ({
  pokemon,
}: IPokemonCardProps) => {
  return (
    <div className={styles.card}>
      <Link
        className={styles.imageWrapper}
        href={getPokemonDetailRoute(pokemon.id)}
      >
        <AspectRatio>
          <Image src={pokemon.image} alt={pokemon.name} fill />
        </AspectRatio>
      </Link>
      <PokemonDescription pokemon={pokemon} />
    </div>
  )
}
