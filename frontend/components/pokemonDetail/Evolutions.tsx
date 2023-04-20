import { NarrowPokemonFieldsFragment } from '@/__generated__/graphql'
import { PokemonCard } from '@/components/common/PokemonCard'
import styles from '@/styles/pokemonDetail.module.scss'
import React from 'react'

interface IEvolutionsProps {
  initialEvolutions: NarrowPokemonFieldsFragment[]
}

export const Evolutions: React.FC<IEvolutionsProps> = ({
  initialEvolutions,
}: IEvolutionsProps) => {
  return (
    <>
      <div className={styles.evolutionsTitle}>Evolutions</div>
      <div className={styles.grid}>
        {initialEvolutions.map((evolution) => (
          <div className={styles.gridGap} key={evolution.id}>
            <PokemonCard pokemon={evolution} />
          </div>
        ))}
      </div>
    </>
  )
}
