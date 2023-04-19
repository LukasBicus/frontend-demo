import { Pokemon } from '@/__generated__/graphql'
import { PokemonDescription } from '@/components/common/PokemonDescription'
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
      <PokemonDescription pokemon={pokemon} />
    </div>
  )
}
