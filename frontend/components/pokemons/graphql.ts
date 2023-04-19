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

const GET_POKEMONS = gql`
  ${NARROW_POKEMON_FIELDS}
  query GetPokemons($query: PokemonsQueryInput!) {
    pokemons(query: $query) {
      limit
      offset
      count
      edges {
        ...NarrowPokemonFields
      }
    }
  }
`
