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
