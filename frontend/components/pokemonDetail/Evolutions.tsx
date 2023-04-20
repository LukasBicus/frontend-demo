import { NarrowPokemonFieldsFragment } from '@/__generated__/graphql'
import { PokemonCard } from '@/components/common/PokemonCard'
import styles from '@/styles/pokemonDetail.module.scss'
import React from 'react'

interface IEvolutionsProps {
  evolutions: NarrowPokemonFieldsFragment[]
}

export const Evolutions: React.FC<IEvolutionsProps> = ({
  evolutions,
}: IEvolutionsProps) => {
  return evolutions.length ? (
    <>
      <div className={styles.evolutionsTitle}>Evolutions</div>
      <div className={styles.grid}>
        {evolutions.map((evolution) => (
          <div className={styles.gridGap} key={evolution.id}>
            <PokemonCard pokemon={evolution} />
          </div>
        ))}
      </div>
    </>
  ) : (
    <div className={styles.evolutionsTitle}>Final evolution reached</div>
  )
}
