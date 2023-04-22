import {
  GetPokemonDetailByNameQuery,
  GetPokemonDetailByNameQueryVariables,
  PokemonDetailFieldsFragment,
} from '@/__generated__/graphql'
import { GET_POKEMON_DETAIL_BY_NAME } from '@/components/pokemonDetail/graphql'
import { getClient } from '@/lib/apolloClient'
import { GetServerSideProps } from 'next'

export { default } from './pokemons/[id]'

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
