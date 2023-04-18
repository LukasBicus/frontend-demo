import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type Attack = {
  __typename?: 'Attack';
  damage: Scalars['Int'];
  name: Scalars['String'];
  type: Scalars['String'];
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Mutation = {
  __typename?: 'Mutation';
  favoritePokemon: Maybe<Pokemon>;
  unFavoritePokemon: Maybe<Pokemon>;
};


export type MutationFavoritePokemonArgs = {
  id: Scalars['ID'];
};


export type MutationUnFavoritePokemonArgs = {
  id: Scalars['ID'];
};

export type Pokemon = {
  __typename?: 'Pokemon';
  attacks: PokemonAttack;
  classification: Scalars['String'];
  evolutionRequirements: Maybe<PokemonEvolutionRequirement>;
  evolutions: Array<Pokemon>;
  fleeRate: Scalars['Float'];
  height: PokemonDimension;
  id: Scalars['ID'];
  image: Scalars['String'];
  isFavorite: Scalars['Boolean'];
  maxCP: Scalars['Int'];
  maxHP: Scalars['Int'];
  name: Scalars['String'];
  number: Scalars['Int'];
  resistant: Array<Scalars['String']>;
  sound: Scalars['String'];
  types: Array<Scalars['String']>;
  weaknesses: Array<Scalars['String']>;
  weight: PokemonDimension;
};

export type PokemonAttack = {
  __typename?: 'PokemonAttack';
  fast: Array<Attack>;
  special: Array<Attack>;
};

export type PokemonConnection = {
  __typename?: 'PokemonConnection';
  count: Scalars['Int'];
  edges: Array<Pokemon>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type PokemonDimension = {
  __typename?: 'PokemonDimension';
  maximum: Scalars['String'];
  minimum: Scalars['String'];
};

export type PokemonEvolutionRequirement = {
  __typename?: 'PokemonEvolutionRequirement';
  amount: Scalars['Int'];
  name: Scalars['String'];
};

export type PokemonFilterInput = {
  isFavorite: InputMaybe<Scalars['Boolean']>;
  type: InputMaybe<Scalars['String']>;
};

export type PokemonsQueryInput = {
  filter: InputMaybe<PokemonFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  search: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  pokemonById: Maybe<Pokemon>;
  pokemonByName: Maybe<Pokemon>;
  pokemonTypes: Array<Scalars['String']>;
  pokemons: PokemonConnection;
};


export type QueryPokemonByIdArgs = {
  id: Scalars['ID'];
};


export type QueryPokemonByNameArgs = {
  name: Scalars['String'];
};


export type QueryPokemonsArgs = {
  query: PokemonsQueryInput;
};

export type Root = {
  __typename?: 'Root';
  query: Query;
};

export type GetPokemonTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPokemonTypesQuery = { __typename?: 'Query', pokemonTypes: Array<string> };

export type NarrowPokemonFieldsFragment = { __typename?: 'Pokemon', id: string, name: string, classification: string, types: Array<string>, isFavorite: boolean, image: string };

export type GetPokemonsQueryVariables = Exact<{
  query: PokemonsQueryInput;
}>;


export type GetPokemonsQuery = { __typename?: 'Query', pokemons: { __typename?: 'PokemonConnection', limit: number, offset: number, count: number, edges: Array<{ __typename?: 'Pokemon', id: string, name: string, classification: string, types: Array<string>, isFavorite: boolean, image: string }> } };

export const NarrowPokemonFieldsFragmentDoc = gql`
    fragment NarrowPokemonFields on Pokemon {
  id
  name
  classification
  types
  isFavorite
  image
}
    `;
export const GetPokemonTypesDocument = gql`
    query GetPokemonTypes {
  pokemonTypes
}
    `;

/**
 * __useGetPokemonTypesQuery__
 *
 * To run a query within a React component, call `useGetPokemonTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPokemonTypesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPokemonTypesQuery, GetPokemonTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetPokemonTypesQuery, GetPokemonTypesQueryVariables>(GetPokemonTypesDocument, options);
      }
export function useGetPokemonTypesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPokemonTypesQuery, GetPokemonTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetPokemonTypesQuery, GetPokemonTypesQueryVariables>(GetPokemonTypesDocument, options);
        }
export type GetPokemonTypesQueryHookResult = ReturnType<typeof useGetPokemonTypesQuery>;
export type GetPokemonTypesLazyQueryHookResult = ReturnType<typeof useGetPokemonTypesLazyQuery>;
export type GetPokemonTypesQueryResult = ApolloReactCommon.QueryResult<GetPokemonTypesQuery, GetPokemonTypesQueryVariables>;
export const GetPokemonsDocument = gql`
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
    ${NarrowPokemonFieldsFragmentDoc}`;

/**
 * __useGetPokemonsQuery__
 *
 * To run a query within a React component, call `useGetPokemonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useGetPokemonsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetPokemonsQuery, GetPokemonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetPokemonsQuery, GetPokemonsQueryVariables>(GetPokemonsDocument, options);
      }
export function useGetPokemonsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPokemonsQuery, GetPokemonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetPokemonsQuery, GetPokemonsQueryVariables>(GetPokemonsDocument, options);
        }
export type GetPokemonsQueryHookResult = ReturnType<typeof useGetPokemonsQuery>;
export type GetPokemonsLazyQueryHookResult = ReturnType<typeof useGetPokemonsLazyQuery>;
export type GetPokemonsQueryResult = ApolloReactCommon.QueryResult<GetPokemonsQuery, GetPokemonsQueryVariables>;