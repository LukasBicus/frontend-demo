import {
  GetPokemonTypesQuery,
  GetPokemonTypesQueryVariables,
} from '@/__generated__/graphql'
import { useLoading } from '@/components/common/LoadingProvider'
import { Content } from '@/components/pokemons/Content'
import { Header } from '@/components/pokemons/Header'
import { initialState, pageReducer } from '@/components/pokemons/pageReducer'
import { IPageState, PageAction } from '@/components/pokemons/types'
import { GET_POKEMON_TYPES } from '@/graphql'
import { getClient } from '@/lib/apolloClient'
import {
  getParsedItemFromSessionStorage,
  saveItemToStore,
  SessionStorageKeys,
} from '@/lib/sessionStorage'
import styles from '@/styles/pokemons.module.scss'
import React, { Reducer, useEffect, useReducer, useState } from 'react'

interface IPokemonsPage {
  pokemonTypes: GetPokemonTypesQuery['pokemonTypes']
  initialPageState: IPageState
}

const withInitialPageState = (Component: React.FC<IPokemonsPage>) => {
  return function ComponentWithInitialState(
    props: Omit<IPokemonsPage, 'initialPageState'>,
  ) {
    const [initialPageState, setInitialPageState] = useState<IPageState | null>(
      null,
    )
    const { showLoading } = useLoading()
    useEffect(() => {
      showLoading()
      setInitialPageState({
        ...(getParsedItemFromSessionStorage(
          SessionStorageKeys.PokemonsPageState,
        ) || initialState),
        pokemonTypes: props.pokemonTypes,
      })
    }, [props.pokemonTypes, showLoading])
    if (initialPageState) {
      return <Component {...props} initialPageState={initialPageState} />
    }
    return null
  }
}

const PokemonsPage: React.FC<IPokemonsPage> = ({ initialPageState }) => {
  const [pageState, dispatch] = useReducer<Reducer<IPageState, PageAction>>(
    pageReducer,
    initialPageState,
  )
  useEffect(() => {
    saveItemToStore(SessionStorageKeys.PokemonsPageState, pageState)
  }, [pageState])
  return (
    <main className={styles.main}>
      <Header
        initialPageState={initialPageState}
        dispatch={dispatch}
        pageState={pageState}
      />
      <div className={styles.content}>
        <Content pageState={pageState} />
      </div>
    </main>
  )
}

export default withInitialPageState(PokemonsPage)

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
