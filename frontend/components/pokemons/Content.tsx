'use client'

import {
  GetPokemonsQuery,
  GetPokemonsQueryVariables,
} from '@/__generated__/graphql'
import { getClient } from '@/lib/apolloClient'
import { GET_POKEMONS } from './graphql'
import { useQuery } from '@apollo/client'
import React from 'react'

interface IContentProps {}

export const Content: React.FC<IContentProps> = ({}: IContentProps) => {
  const client = getClient()
  const { data, loading, error } = useQuery<
    GetPokemonsQuery,
    GetPokemonsQueryVariables
  >(GET_POKEMONS, { client, variables: { offset: 0, limit: 10 } })
  console.log('data', data)
  console.error(error)
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    console.error(error)
    return null
  }
  return (
    <div>
      Content
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}
