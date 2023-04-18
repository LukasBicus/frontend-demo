'use client'

import {
  GetPokemonsQuery,
  GetPokemonsQueryVariables,
} from '@/__generated__/graphql'
import { InlineError } from '@/components/common/InlineError'
import { Popularity } from '@/components/common/Popularity'
import { getClient } from '@/lib/apolloClient'
import styles from '@/styles/pokemons.module.scss'
import { useQuery } from '@apollo/client'
import { Loading } from '@carbon/react'
import React from 'react'
import { GET_POKEMONS } from './graphql'
import { ContentSwitcherMode, IPageState } from './types'

interface IContentProps {
  pageState: IPageState
}

export const Content: React.FC<IContentProps> = ({
  pageState,
}: IContentProps) => {
  const client = getClient()
  const { data, previousData, loading, error } = useQuery<
    GetPokemonsQuery,
    GetPokemonsQueryVariables
  >(GET_POKEMONS, {
    client,
    variables: {
      query: {
        offset: 0,
        limit: 10,
        search: pageState.search ?? null,
        filter: {
          type: pageState.type ?? null,
          isFavorite:
            pageState.contentSwitchMode === ContentSwitcherMode.Favorites ??
            undefined,
        },
      },
    },
  })
  if (error) {
    return <InlineError errorMessage="Something went wrong" />
  }
  const pokemons = data?.pokemons.edges ?? previousData?.pokemons.edges ?? []
  return (
    <>
      <Loading active={loading} description="Loading..." withOverlay />
      {pokemons.map((pokemon) => (
        <div className={styles.card} key={pokemon.id}>
          {pokemon.name}
          <Popularity pokemon={pokemon} />
        </div>
      ))}
      {!loading && pokemons.length === 0 && (
        <div className={styles.noResults}>No results</div>
      )}
    </>
  )
}
