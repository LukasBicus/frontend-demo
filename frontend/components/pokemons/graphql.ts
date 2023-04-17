import { gql } from '@/__generated__'

const GET_POKEMONS = gql(`
  query GetPokemons($limit: Int!, $offset: Int!) {
    pokemons(query:{limit: $limit, offset: $offset}) {
      limit
      offset
      count
      edges {
        id
        name
      }
    }
  }
`)
