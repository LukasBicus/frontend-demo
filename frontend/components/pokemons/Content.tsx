'use client'

import { useGetPokemonsQuery } from '@/__generated__/graphql'
import { InlineError } from '@/components/common/InlineError'
import { useLoading } from '@/components/common/LoadingProvider'
import { PokemonCard } from '@/components/common/PokemonCard'
import { ScrollContainer } from '@/components/common/ScrollContainer'
import { ListItem } from '@/components/pokemons/ListItem'
import { getClient } from '@/lib/apolloClient'
import styles from '@/styles/pokemons.module.scss'
import React, { useCallback, useEffect } from 'react'
import { ContentSwitcherMode, IPageState, ViewMode } from './types'

interface IContentProps {
  pageState: IPageState
}

export const Content: React.FC<IContentProps> = ({
  pageState,
}: IContentProps) => {
  const client = getClient()
  const { data, previousData, loading, error, fetchMore } = useGetPokemonsQuery(
    {
      client,
      fetchPolicy:
        pageState.contentSwitchMode === ContentSwitcherMode.Favorites
          ? 'network-only'
          : 'cache-first',
      variables: {
        query: {
          offset: 0,
          limit: 12,
          search: pageState.search ?? null,
          filter: {
            type: pageState.type ?? null,
            isFavorite:
              pageState.contentSwitchMode === ContentSwitcherMode.Favorites
                ? true
                : null,
          },
        },
        withoutTypes: false,
      },
    },
  )
  const { showLoading, hideLoading } = useLoading()
  useEffect(() => {
    if (loading) {
      showLoading()
    } else {
      hideLoading()
    }
  }, [loading, showLoading, hideLoading])
  useEffect(() => {
    console.log('data changed', data)
  }, [data])
  const handleScrollNearEndOfTheContainer = useCallback(async () => {
    console.log('Scrolled near the end', data)
    if (data) {
      console.log('Firing fetch')
      try {
        const variables = {
          query: {
            offset: data?.pokemons.offset + 12,
            limit: 12,
            search: pageState.search ?? null,
            filter: {
              type: pageState.type ?? null,
              isFavorite:
                pageState.contentSwitchMode === ContentSwitcherMode.Favorites
                  ? true
                  : null,
            },
          },
          withoutTypes: false,
        }
        console.log('variables: ', variables)
        const r = await fetchMore({
          variables,
        })
        console.log('result', r)
      } catch (e) {
        console.error(e)
      }
    }
  }, [data, fetchMore, pageState])
  if (error) {
    return <InlineError errorMessage="Something went wrong" />
  }
  const pokemons = data?.pokemons.edges ?? previousData?.pokemons.edges ?? []
  return (
    <>
      {pokemons.length ? (
        pageState.viewMode === ViewMode.ListView ? (
          <div className={styles.list}>
            {pokemons.map((pokemon) => (
              <ListItem pokemon={pokemon} key={pokemon.id} />
            ))}
          </div>
        ) : (
          <ScrollContainer
            className={styles.grid}
            onScrollNearEndOfTheContainer={handleScrollNearEndOfTheContainer}
          >
            {pokemons.map((pokemon) => (
              <div className={styles.gridGap} key={pokemon.id}>
                <PokemonCard pokemon={pokemon} />
              </div>
            ))}
          </ScrollContainer>
        )
      ) : null}

      {!loading && pokemons.length === 0 && (
        <div className={styles.noResults}>No results</div>
      )}
    </>
  )
}
