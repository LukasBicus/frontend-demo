import { gql } from '@apollo/client'

const POKEMON_DETAIL_FIELDS = gql`
  fragment PokemonDetailFields on Pokemon {
    id
    name
    classification
    types
    isFavorite
    image
  }
`

export const GET_POKEMON_DETAIL = gql`
  ${POKEMON_DETAIL_FIELDS}
  query GetPokemonDetail($id: ID!) {
    pokemonById(id: $id) {
      ...PokemonDetailFields
    }
  }
`
