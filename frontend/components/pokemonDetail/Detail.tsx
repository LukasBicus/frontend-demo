import { PokemonDetailFieldsFragment } from '@/__generated__/graphql'
import { PokemonDescription } from '@/components/common/PokemonDescription'
import styles from '@/styles/pokemonDetail.module.scss'
import { VolumeUpFilled } from '@carbon/icons-react'
import { AspectRatio, IconButton } from '@carbon/react'
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
      <div className={styles.borderBox}>
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
          <div className={styles.soundIconWrapper}>
            <IconButton
              kind="ghost"
              label="Play sound"
              align="top-left"
              size="lg"
              className={styles.soundIcon}
            >
              <VolumeUpFilled size={32} />
            </IconButton>
          </div>
        </div>
        <div className={styles.grayBox}>
          <PokemonDescription pokemon={pokemon} />
          <div>HP</div>
        </div>
      </div>
      <Evolutions evolutions={pokemon.evolutions} />
    </div>
  )
}
