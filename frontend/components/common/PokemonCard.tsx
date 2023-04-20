import { NarrowPokemonFieldsFragment } from '@/__generated__/graphql'
import { PokemonDescription } from '@/components/common/PokemonDescription'
import { getPokemonDetailRoute } from '@/lib/routes'
import styles from '@/styles/pokemonCard.module.scss'
import { AspectRatio } from '@carbon/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IPokemonCardProps {
  pokemon: NarrowPokemonFieldsFragment
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
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            fill
            sizes="(max-width: 480px) 33vw,
            (max-width: 768px) 50vw,
            25vw"
          />
        </AspectRatio>
      </Link>
      <PokemonDescription pokemon={pokemon} />
    </div>
  )
}
