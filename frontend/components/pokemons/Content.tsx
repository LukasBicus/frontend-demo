'use client'

import { useGetPokemonsQuery } from '@/__generated__/graphql'
import { InlineError } from '@/components/common/InlineError'
import { useLoading } from '@/components/common/LoadingProvider'
import { PokemonCard } from '@/components/common/PokemonCard'
import {
  QuickViewModal,
  useQuickViewModal,
} from '@/components/common/QuickViewModal'
import { ScrollContainer } from '@/components/common/ScrollContainer'
import { ListItem } from '@/components/pokemons/ListItem'
import { getClient } from '@/lib/apolloClient'
import styles from '@/styles/pokemons.module.scss'
import React, { useCallback, useEffect, useState } from 'react'
import { ContentSwitcherMode, IPageState, ViewMode } from './types'

interface IContentProps {
  pageState: IPageState
}

const getVariables = ({
  pageState,
  offset = 0,
}: {
  pageState: IPageState
  offset?: number
}) => ({
  query: {
    offset,
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
})

export const Content: React.FC<IContentProps> = ({ pageState }) => {
  const client = getClient()
  const [loadingMore, setLoadingMore] = useState(false)
  const { data, previousData, loading, error, fetchMore } = useGetPokemonsQuery(
    {
      client,
      fetchPolicy: 'cache-and-network',
      variables: getVariables({ pageState }),
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
  const handleScrollNearEndOfTheContainer = useCallback(async () => {
    if (
      data &&
      data.pokemons.count > data.pokemons.limit + data.pokemons.offset
    ) {
      try {
        setLoadingMore(true)
        const variables = getVariables({
          pageState,
          offset: data.pokemons.offset + data.pokemons.limit,
        })
        await fetchMore({
          variables,
        })
      } catch (e) {
        console.error(e)
      } finally {
        setLoadingMore(false)
      }
    }
  }, [data, fetchMore, pageState])
  const { modalData, closeModal, getOpenModalHandler } = useQuickViewModal()
  if (error) {
    return <InlineError errorMessage="Something went wrong" />
  }
  const pokemons = data?.pokemons.edges ?? previousData?.pokemons.edges ?? []
  return (
    <>
      {pokemons.length ? (
        <ScrollContainer
          onScrollNearEndOfTheContainer={handleScrollNearEndOfTheContainer}
          showLoading={loadingMore}
          endOfListReached={
            data
              ? data.pokemons.count <=
                data.pokemons.limit + data.pokemons.offset
              : true
          }
        >
          {pageState.viewMode === ViewMode.ListView ? (
            <div className={styles.list}>
              {pokemons.map((pokemon) => (
                <ListItem pokemon={pokemon} key={pokemon.id} />
              ))}
            </div>
          ) : (
            <div className={styles.grid}>
              {pokemons.map((pokemon) => (
                <div className={styles.gridGap} key={pokemon.id}>
                  <PokemonCard
                    pokemon={pokemon}
                    onQuickViewButtonClick={getOpenModalHandler(pokemon.id)}
                  />
                </div>
              ))}
            </div>
          )}
        </ScrollContainer>
      ) : null}

      <QuickViewModal modalData={modalData} onClose={closeModal} />

      {!loading && pokemons.length === 0 && (
        <div className={styles.noResults}>No results</div>
      )}
    </>
  )
}
