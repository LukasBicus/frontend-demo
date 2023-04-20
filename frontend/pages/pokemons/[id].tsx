import {
  GetPokemonDetailQuery,
  GetPokemonDetailQueryVariables,
  PokemonDetailFieldsFragment,
} from '@/__generated__/graphql'
import { useLoading } from '@/components/common/LoadingProvider'
import { Detail } from '@/components/pokemonDetail/Detail'
import { GET_POKEMON_DETAIL } from '@/components/pokemonDetail/graphql'
import { getClient } from '@/lib/apolloClient'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import React, { useEffect } from 'react'

export const getServerSideProps: GetServerSideProps<
  {
    pokemon: PokemonDetailFieldsFragment | null
  },
  { id: string }
> = async (context) => {
  console.log(context.params?.id)
  if (!context.params?.id) {
    throw new Error('Missing id')
  }
  const client = getClient()
  const { data } = await client.query<
    GetPokemonDetailQuery,
    GetPokemonDetailQueryVariables
  >({
    query: GET_POKEMON_DETAIL,
    variables: {
      id: context.params.id,
      withoutTypes: true,
    },
  })
  return {
    props: {
      pokemon: data.pokemonById,
    },
  }
}
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
      <Detail initialPokemon={pokemon} />
    </>
  )
}

export default DetailPage
