'use client'

import {
  GetPokemonsQuery,
  GetPokemonsQueryVariables,
} from '@/__generated__/graphql'
import { InlineError } from '@/components/common/InlineError'
import { getClient } from '@/lib/apolloClient'
import styles from '@/styles/pokemons.module.scss'
import { useQuery } from '@apollo/client'
import { InlineLoading } from '@carbon/react'
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
  const { data, loading, error } = useQuery<
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
  if (loading) {
    return (
      <InlineLoading
        status="active"
        iconDescription="Loading"
        description="Loading data..."
        className={styles.loading}
        withOverlay
        active
      />
    )
  }
  if (error) {
    return <InlineError errorMessage="Something went wrong" />
  }
  if (!data) {
    return null
  }
  return (
    <div>
      Content
      <div>
        {data.pokemons.edges.length ? (
          <div>
            Names:{' '}
            {data.pokemons.edges.map((pokemon) => pokemon.name).join(', ')}
          </div>
        ) : (
          <span>No results</span>
        )}
      </div>
    </div>
  )
}
