import { Content } from '@/components/pokemons/Content'
import { Header } from '@/components/pokemons/Header'
import { initialState, pageReducer } from '@/components/pokemons/pageReducer'
import Head from 'next/head'
import React, { useReducer } from 'react'
import styles from '@/styles/pokemons.module.scss'

export const PokemonsPage: React.FC = () => {
  const [pageState, dispatch] = useReducer(pageReducer, initialState)
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
        <Content />
      </main>
    </>
  )
}

export default PokemonsPage
