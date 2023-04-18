import { gql } from '@apollo/client'

const NARROW_POKEMON_FIELDS = gql`
  fragment NarrowPokemonFields on Pokemon {
    id
    name
    classification
    types
    isFavorite
    image
  }
`

export const GET_POKEMONS = gql`
  ${NARROW_POKEMON_FIELDS}
  query GetPokemons($limit: Int!, $offset: Int!) {
    pokemons(query: { limit: $limit, offset: $offset }) {
      limit
      offset
      count
      edges {
        ...NarrowPokemonFields
      }
    }
  }
`
