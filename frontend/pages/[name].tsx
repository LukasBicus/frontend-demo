import {
  GetPokemonDetailByNameQuery,
  GetPokemonDetailByNameQueryVariables,
  PokemonDetailFieldsFragment,
} from '@/__generated__/graphql'
import { useLoading } from '@/components/common/LoadingProvider'
import { PokemonDetail } from '@/components/pokemonDetail/PokemonDetail'
import { GET_POKEMON_DETAIL_BY_NAME } from '@/graphql'
import { getClient } from '@/lib/apolloClient'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import React, { useEffect } from 'react'

const DetailPage = ({
  pokemon,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { hideLoading } = useLoading()
  useEffect(() => {
    hideLoading()
  }, [hideLoading])
  if (!pokemon) {
    return <div>Pokemon not found</div>
  }
  return (
    <>
      <Head>
        <title>{pokemon.name}</title>
        <meta name="description" content={pokemon.classification} />
      </Head>
      <PokemonDetail initialPokemon={pokemon} />
    </>
  )
}

export default DetailPage

export const getServerSideProps: GetServerSideProps<
  {
    pokemon: PokemonDetailFieldsFragment | null
  },
  { name: string }
> = async (context) => {
  if (!context.params?.name) {
    throw new Error('Invalid name')
  }
  const client = getClient()
  const { data } = await client.query<
    GetPokemonDetailByNameQuery,
    GetPokemonDetailByNameQueryVariables
  >({
    query: GET_POKEMON_DETAIL_BY_NAME,
    variables: {
      name: context.params.name,
      withoutTypes: true,
    },
  })
  return {
    props: {
      pokemon: data.pokemonByName,
    },
  }
}
