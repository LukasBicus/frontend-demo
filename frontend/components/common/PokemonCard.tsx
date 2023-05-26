import { NarrowPokemonFieldsFragment } from '@/__generated__/graphql'
import { PokemonDescription } from '@/components/common/PokemonDescription'
import { getPokemonDetailByNameRoute } from '@/lib/routes'
import { AspectRatio, IconButton } from '@carbon/react'
import Info from '@material-design-icons/svg/outlined/info.svg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './PokemonCard.module.scss'

interface IPokemonCardProps {
  pokemon: NarrowPokemonFieldsFragment
  onQuickViewButtonClick?: () => void
}

export const PokemonCard: React.FC<IPokemonCardProps> = ({
  pokemon,
  onQuickViewButtonClick,
}) => {
  return (
    <div className={styles.card}>
      <Link
        className={styles.imageWrapper}
        href={getPokemonDetailByNameRoute(pokemon.name)}
      >
        <AspectRatio>
          <Image
            priority
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
              onQuickViewButtonClick?.()
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
