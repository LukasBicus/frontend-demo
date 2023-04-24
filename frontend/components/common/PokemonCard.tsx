import { NarrowPokemonFieldsFragment } from '@/__generated__/graphql'
import { PokemonDescription } from '@/components/common/PokemonDescription'
import { getPokemonDetailByNameRoute } from '@/lib/routes'
import styles from '@/styles/pokemonCard.module.scss'
import { AspectRatio, IconButton } from '@carbon/react'
import Info from '@material-design-icons/svg/outlined/info.svg'
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
        href={getPokemonDetailByNameRoute(pokemon.name)}
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
        <div className={styles.quickViewButtonBox}>
          <IconButton
            kind="ghost"
            label="Open quick view"
            align="top-left"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation()
              e.preventDefault()
            }}
          >
            <Info viewBox="0 0 24 24" />
          </IconButton>
        </div>
      </Link>
      <PokemonDescription pokemon={pokemon} />
    </div>
  )
}
