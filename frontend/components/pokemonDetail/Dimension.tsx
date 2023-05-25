import { PokemonDimension } from '@/__generated__/graphql'
import styles from '@/styles/pokemonDetail.module.scss'
import React from 'react'

interface IDimensionProps {
  label: string
  dimension: PokemonDimension
}

export const Dimension: React.FC<IDimensionProps> = ({ label, dimension }) => {
  return (
    <div className={styles.dimension}>
      <span className="bold-plex-18">{label}</span>
      <span>
        {dimension.minimum} - {dimension.maximum}
      </span>
    </div>
  )
}
