'use client'

import {
  PokemonDetailFieldsFragment,
  useGetPokemonDetailQuery,
} from '@/__generated__/graphql'
import { Popularity, PopularitySize } from '@/components/common/Popularity'
import { Dimension } from '@/components/pokemonDetail/Dimension'
import { ProgressBar } from '@/components/pokemonDetail/ProgressBar'
import { getClient } from '@/lib/apolloClient'
import styles from '@/styles/pokemonDetail.module.scss'
import { AspectRatio, IconButton } from '@carbon/react'
import VolumeUp from '@material-design-icons/svg/filled/volume_up.svg'
import Image from 'next/image'
import React, { useCallback, useRef } from 'react'
import { Evolutions } from './Evolutions'

interface IDetailProps {
  initialPokemon: PokemonDetailFieldsFragment
}

export const Detail: React.FC<IDetailProps> = ({
  initialPokemon,
}: IDetailProps) => {
  const client = getClient()
  const { data } = useGetPokemonDetailQuery({
    client,
    variables: {
      id: initialPokemon.id,
      withoutTypes: true,
    },
  })
  const pokemon = data?.pokemonById ?? initialPokemon
  const audioRef = useRef<null | HTMLAudioElement>(null)
  const handlePlaySoundButtonClick = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }, [])

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
                priority
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
              onClick={handlePlaySoundButtonClick}
            >
              <VolumeUp viewBox="0 0 24 24" />
            </IconButton>
            <audio src={pokemon.sound} ref={audioRef}></audio>
          </div>
        </div>
        <div className={styles.grayBox}>
          <div className={styles.descriptionBox}>
            <div className={styles.description}>
              <span className="bold-plex-24">{pokemon.name}</span>
              <span>{pokemon.types.join(', ')}</span>
            </div>
            <Popularity
              pokemon={pokemon}
              tooltipAlign="top-right"
              size={PopularitySize.Large}
            />
          </div>
          <div className={styles.progressBarBox}>
            <ProgressBar secondary />
            <div className="bold-plex-18">CP: {pokemon.maxCP}</div>
            <ProgressBar />
            <div className="bold-plex-18">HP: {pokemon.maxHP}</div>
          </div>
          <div className={styles.dimensionsBox}>
            <Dimension label="Weight" dimension={pokemon.weight} />
            <div className={styles.dimensionDivider} />
            <Dimension label="Height" dimension={pokemon.height} />
          </div>
        </div>
      </div>
      <Evolutions evolutions={pokemon.evolutions} />
    </div>
  )
}
