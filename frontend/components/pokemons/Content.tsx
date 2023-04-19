'use client'

import { useGetPokemonsQuery } from '@/__generated__/graphql'
import { InlineError } from '@/components/common/InlineError'
import { useLoading } from '@/components/common/LoadingProvider'
import { Popularity, PopularitySize } from '@/components/common/Popularity'
import { ListItem } from '@/components/pokemons/ListItem'
import { getClient } from '@/lib/apolloClient'
import styles from '@/styles/pokemons.module.scss'
import React, { useEffect } from 'react'
import { ContentSwitcherMode, IPageState, ViewMode } from './types'

interface IContentProps {
  pageState: IPageState
}

export const Content: React.FC<IContentProps> = ({
  pageState,
}: IContentProps) => {
  const client = getClient()
  const { data, previousData, loading, error } = useGetPokemonsQuery({
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
  const { showLoading, hideLoading } = useLoading()
  useEffect(() => {
    if (loading) {
      showLoading()
    } else {
      hideLoading()
    }
  }, [loading])
  if (error) {
    return <InlineError errorMessage="Something went wrong" />
  }
  const pokemons = data?.pokemons.edges ?? previousData?.pokemons.edges ?? []
  return (
    <>
      {pageState.viewMode === ViewMode.ListView ? (
        <div className={styles.list}>
          {pokemons.map((pokemon) => (
            <ListItem pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
      ) : (
        <div>
          {pokemons.map((pokemon) => (
            <div className={styles.card} key={pokemon.id}>
              {pokemon.name}
              <Popularity pokemon={pokemon} />
              <Popularity pokemon={pokemon} size={PopularitySize.Large} />
            </div>
          ))}
        </div>
      )}

      {!loading && pokemons.length === 0 && (
        <div className={styles.noResults}>No results</div>
      )}
    </>
  )
}
