import { gql } from '@apollo/client'

const EDGE_FIELDS = gql`
  fragment EdgeFields on Pokemon {
    id
    name
    classification
    types
    isFavorite
    image
  }
`

export const GET_POKEMONS = gql`
  ${EDGE_FIELDS}
  query GetPokemons($limit: Int!, $offset: Int!) {
    pokemons(query: { limit: $limit, offset: $offset }) {
      limit
      offset
      count
      edges {
        ...EdgeFields
      }
    }
  }
`
