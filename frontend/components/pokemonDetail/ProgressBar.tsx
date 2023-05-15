import styles from '@/styles/pokemonDetail.module.scss'
import cn from 'classnames'
import React from 'react'

interface IProgressBarProps {
  secondary?: boolean
}

export const ProgressBar: React.FC<IProgressBarProps> = ({ secondary }) => (
  <div
    className={cn(styles.progressBar, {
      [styles.progressBarSecondary]: secondary,
    })}
  />
)
