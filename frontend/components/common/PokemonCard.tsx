import { Pokemon } from '@/__generated__/graphql'
import { Popularity } from '@/components/common/Popularity'
import styles from '@/styles/pokemonCard.module.scss'
import { AspectRatio } from '@carbon/react'
import Image from 'next/image'
import React from 'react'

interface IPokemonCardProps {
  pokemon: Pick<Pokemon, 'id' | 'isFavorite' | 'name' | 'types' | 'image'>
}

export const PokemonCard: React.FC<IPokemonCardProps> = ({
  pokemon,
}: IPokemonCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <AspectRatio>
          <Image src={pokemon.image} alt={pokemon.name} fill />
        </AspectRatio>
      </div>
      <div className={styles.footer}>
        <div className={styles.description}>
          <span className={styles.name}>{pokemon.name}</span>
          <span>{pokemon.types.join(', ')}</span>
        </div>
        <Popularity pokemon={pokemon} />
      </div>
    </div>
  )
}
