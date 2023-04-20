import { PokemonDetailFieldsFragment } from '@/__generated__/graphql'
import styles from '@/styles/pokemonDetail.module.scss'
import { AspectRatio } from '@carbon/react'
import Image from 'next/image'
import React from 'react'
import { Evolutions } from './Evolutions'

interface IDetailProps {
  initialPokemon: PokemonDetailFieldsFragment
}

export const Detail: React.FC<IDetailProps> = ({
  initialPokemon,
}: IDetailProps) => {
  const pokemon = initialPokemon
  return (
    <div className={styles.root}>
      <div className={styles.imageBox}>
        <div className={styles.imageWrapper}>
          <AspectRatio>
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              fill
              sizes="(max-width: 480px) 90vw,
            (max-width: 768px) 66.66vw,
            50vw"
            />
          </AspectRatio>
        </div>
      </div>
      <Evolutions evolutions={pokemon.evolutions} />
    </div>
  )
}