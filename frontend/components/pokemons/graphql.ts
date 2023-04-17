import { gql } from '@apollo/client'

export const EDGE_FRAGMENT = gql(`
fragment Edge on Pokemon {
    id
    name
    classification
    types
    isFavorite
    image
  }
`)

export const GET_POKEMONS = gql(`
  query GetPokemons($limit: Int!, $offset: Int!) {
    pokemons(query:{limit: $limit, offset: $offset}) {
      limit
      offset
      count
      edges {
        ...Edge
      }
    }
  }
`)
