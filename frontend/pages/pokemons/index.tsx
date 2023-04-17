import { Header } from '@/components/pokemons/Header'
import Head from 'next/head'
import React from 'react'
import styles from '@/styles/pokemons.module.scss'

export const PokemonsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pokemons</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <div>Content - Hi there Dummy pokemons page</div>
      </main>
    </>
  )
}

export default PokemonsPage
