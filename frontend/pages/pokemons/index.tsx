import {
  GetPokemonTypesQuery,
  GetPokemonTypesQueryVariables,
} from '@/__generated__/graphql'
import { GET_POKEMON_TYPES } from '@/components/common/graphql'
import { Content } from '@/components/pokemons/Content'
import { Header } from '@/components/pokemons/Header'
import { initialState, pageReducer } from '@/components/pokemons/pageReducer'
import { IPageState, PageAction } from '@/components/pokemons/types'
import { getClient } from '@/lib/apolloClient'
import styles from '@/styles/pokemons.module.scss'
import React, { Reducer, useReducer } from 'react'

interface IPokemonsPage {
  pokemonTypes: GetPokemonTypesQuery['pokemonTypes']
}

export const PokemonsPage: React.FC<IPokemonsPage> = ({ pokemonTypes }) => {
  const initialPageStateWithPokemonTypes = { ...initialState, pokemonTypes }
  const [pageState, dispatch] = useReducer<Reducer<IPageState, PageAction>>(
    pageReducer,
    initialPageStateWithPokemonTypes,
  )
  return (
    <main className={styles.main}>
      <Header
        initialPageState={initialPageStateWithPokemonTypes}
        dispatch={dispatch}
        pageState={pageState}
      />
      <div className={styles.content}>
        <Content pageState={pageState} />
      </div>
    </main>
  )
}

export default PokemonsPage

export async function getStaticProps() {
  const client = getClient()
  const { data } = await client.query<
    GetPokemonTypesQuery,
    GetPokemonTypesQueryVariables
  >({ query: GET_POKEMON_TYPES })
  return {
    props: {
      pokemonTypes: data.pokemonTypes,
    },
  }
}
