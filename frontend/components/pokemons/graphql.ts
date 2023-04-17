import { gql } from '@/__generated__'

gql(`
  fragment Edge on Pokemon {
    id
    name
    classification
    types
    isFavorite
    image
  }

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
