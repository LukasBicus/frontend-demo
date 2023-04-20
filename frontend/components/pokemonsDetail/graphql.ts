import { gql } from '@apollo/client'

const DIMENSION_FIELDS = gql`
  fragment DimensionFields on PokemonDimension {
    minimum
    maximum
  }
`

const POKEMON_DETAIL_FIELDS = gql`
  ${DIMENSION_FIELDS}
  fragment PokemonDetailFields on Pokemon {
    id
    name
    types
    isFavorite
    image
    weight {
      ...DimensionFields
    }
    height {
      ...DimensionFields
    }
    maxCP
    maxHP
    sound
    evolutions {
      id
      name
      isFavorite
      image
    }
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
