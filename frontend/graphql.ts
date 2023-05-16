import { gql } from '@apollo/client'

export const GET_POKEMON_TYPES = gql`
  query GetPokemonTypes {
    pokemonTypes
  }
`

export const NARROW_POKEMON_FIELDS = gql`
  fragment NarrowPokemonFields on Pokemon {
    id
    name
    types @skip(if: $withoutTypes)
    isFavorite
    image
  }
`

const FAVORITE_POKEMON = gql`
  mutation favoritePokemon($id: ID!) {
    favoritePokemon(id: $id) {
      id
      isFavorite
    }
  }
`

const UN_FAVORITE_POKEMON = gql`
  mutation unFavoritePokemon($id: ID!) {
    unFavoritePokemon(id: $id) {
      id
      isFavorite
    }
  }
`
const ATTACK_FIELDS = gql`
  fragment AttackFields on Attack {
    name
    damage
    type
  }
`
const POKEMON_MODAL_FIELDS = gql`
  ${ATTACK_FIELDS}
  fragment PokemonModalFields on Pokemon {
    id
    name
    classification
    resistant
    attacks {
      fast {
        ...AttackFields
      }
      special {
        ...AttackFields
      }
    }
    weaknesses
    fleeRate
  }
`

const GET_POKEMON_MODAL = gql`
  ${POKEMON_MODAL_FIELDS}
  query GetPokemonModal($id: ID!) {
    pokemonById(id: $id) {
      ...PokemonModalFields
    }
  }
`

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

export const GET_POKEMON_DETAIL_BY_NAME = gql`
  ${POKEMON_DETAIL_FIELDS}
  query GetPokemonDetailByName($name: String!, $withoutTypes: Boolean!) {
    pokemonByName(name: $name) {
      ...PokemonDetailFields
    }
  }
`

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
