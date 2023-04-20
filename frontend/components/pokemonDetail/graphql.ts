import { NARROW_POKEMON_FIELDS } from '@/components/common/graphql'
import { gql } from '@apollo/client'

const DIMENSION_FIELDS = gql`
  fragment DimensionFields on PokemonDimension {
    minimum
    maximum
  }
`

const POKEMON_DETAIL_FIELDS = gql`
  ${DIMENSION_FIELDS}
  ${NARROW_POKEMON_FIELDS}
  fragment PokemonDetailFields on Pokemon {
    id
    name
    types
    classification
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
      ...NarrowPokemonFields
    }
  }
`

export const GET_POKEMON_DETAIL = gql`
  ${POKEMON_DETAIL_FIELDS}
  query GetPokemonDetail($id: ID!, $withoutTypes: Boolean!) {
    pokemonById(id: $id) {
      ...PokemonDetailFields
    }
  }
`
