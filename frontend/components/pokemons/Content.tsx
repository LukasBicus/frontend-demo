'use client'

import {
  GetPokemonsQuery,
  GetPokemonsQueryVariables,
} from '@/__generated__/graphql'
import { getClient } from '@/lib/apolloClient'
import { useQuery } from '@apollo/client'
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
    return <div>Loading...</div>
  }
  if (error || !data) {
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
