'use client'

import {
  GetPokemonsQuery,
  GetPokemonsQueryVariables,
} from '@/__generated__/graphql'
import { InlineError } from '@/components/common/InlineError'
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
  debugger
  if (loading && !data && !previousData) {
    return <Loading active description="Loading..." withOverlay />
  }
  if (error) {
    return <InlineError errorMessage="Something went wrong" />
  }
  if (!data && !previousData) {
    return null
  }
  const pokemons = data?.pokemons.edges ?? previousData?.pokemons.edges ?? []
  return (
    <div>
      <Loading active={loading} description="Loading..." withOverlay />
      <div>
        {pokemons.length ? (
          <div>
            Names:{' '}
            {pokemons.map((pokemon) => (
              <div className={styles.card}>{pokemon.name}</div>
            ))}
          </div>
        ) : (
          <span>No results</span>
        )}
      </div>
    </div>
  )
}
