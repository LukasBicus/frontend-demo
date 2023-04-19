import { Pokemon } from '@/__generated__/graphql'
import { Popularity } from '@/components/common/Popularity'
import styles from '@/styles/pokemonCard.module.scss'
import Image from 'next/image'
import React from 'react'

interface IPokemonCardProps {
  pokemon: Pick<Pokemon, 'id' | 'isFavorite' | 'name' | 'types' | 'image'>
}

export const PokemonCard: React.FC<IPokemonCardProps> = ({
  pokemon,
}: IPokemonCardProps) => {
  return (
    <div>
      <Image src={pokemon.image} alt={pokemon.name} width={58} height={58} />
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
