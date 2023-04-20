import { NARROW_POKEMON_FIELDS } from '@/components/common/graphql'
import { gql } from '@apollo/client'

const GET_POKEMONS = gql`
  ${NARROW_POKEMON_FIELDS}
  query GetPokemons($query: PokemonsQueryInput!, $withoutTypes: Boolean!) {
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
