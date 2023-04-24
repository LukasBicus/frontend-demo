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

export type NarrowPokemonFieldsFragment = { __typename?: 'Pokemon', id: string, name: string, types?: Array<string>, isFavorite: boolean, image: string };

export type FavoritePokemonMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FavoritePokemonMutation = { __typename?: 'Mutation', favoritePokemon: { __typename?: 'Pokemon', id: string, isFavorite: boolean } | null };

export type UnFavoritePokemonMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UnFavoritePokemonMutation = { __typename?: 'Mutation', unFavoritePokemon: { __typename?: 'Pokemon', id: string, isFavorite: boolean } | null };

export type AttackFieldsFragment = { __typename?: 'Attack', name: string, damage: number, type: string };

export type PokemonModalFieldsFragment = { __typename?: 'Pokemon', id: string, name: string, classification: string, resistant: Array<string>, weaknesses: Array<string>, fleeRate: number, attacks: { __typename?: 'PokemonAttack', fast: Array<{ __typename?: 'Attack', name: string, damage: number, type: string }>, special: Array<{ __typename?: 'Attack', name: string, damage: number, type: string }> } };

export type GetPokemonModalQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPokemonModalQuery = { __typename?: 'Query', pokemonById: { __typename?: 'Pokemon', id: string, name: string, classification: string, resistant: Array<string>, weaknesses: Array<string>, fleeRate: number, attacks: { __typename?: 'PokemonAttack', fast: Array<{ __typename?: 'Attack', name: string, damage: number, type: string }>, special: Array<{ __typename?: 'Attack', name: string, damage: number, type: string }> } } | null };

export type DimensionFieldsFragment = { __typename?: 'PokemonDimension', minimum: string, maximum: string };

export type PokemonDetailFieldsFragment = { __typename?: 'Pokemon', id: string, name: string, types: Array<string>, classification: string, isFavorite: boolean, image: string, maxCP: number, maxHP: number, sound: string, weight: { __typename?: 'PokemonDimension', minimum: string, maximum: string }, height: { __typename?: 'PokemonDimension', minimum: string, maximum: string }, evolutions: Array<{ __typename?: 'Pokemon', id: string, name: string, types?: Array<string>, isFavorite: boolean, image: string }> };

export type GetPokemonDetailQueryVariables = Exact<{
  id: Scalars['ID'];
  withoutTypes: Scalars['Boolean'];
}>;


export type GetPokemonDetailQuery = { __typename?: 'Query', pokemonById: { __typename?: 'Pokemon', id: string, name: string, types: Array<string>, classification: string, isFavorite: boolean, image: string, maxCP: number, maxHP: number, sound: string, weight: { __typename?: 'PokemonDimension', minimum: string, maximum: string }, height: { __typename?: 'PokemonDimension', minimum: string, maximum: string }, evolutions: Array<{ __typename?: 'Pokemon', id: string, name: string, types?: Array<string>, isFavorite: boolean, image: string }> } | null };

export type GetPokemonDetailByNameQueryVariables = Exact<{
  name: Scalars['String'];
  withoutTypes: Scalars['Boolean'];
}>;


export type GetPokemonDetailByNameQuery = { __typename?: 'Query', pokemonByName: { __typename?: 'Pokemon', id: string, name: string, types: Array<string>, classification: string, isFavorite: boolean, image: string, maxCP: number, maxHP: number, sound: string, weight: { __typename?: 'PokemonDimension', minimum: string, maximum: string }, height: { __typename?: 'PokemonDimension', minimum: string, maximum: string }, evolutions: Array<{ __typename?: 'Pokemon', id: string, name: string, types?: Array<string>, isFavorite: boolean, image: string }> } | null };

export type GetPokemonsQueryVariables = Exact<{
  query: PokemonsQueryInput;
  withoutTypes: Scalars['Boolean'];
}>;


export type GetPokemonsQuery = { __typename?: 'Query', pokemons: { __typename?: 'PokemonConnection', limit: number, offset: number, count: number, edges: Array<{ __typename?: 'Pokemon', id: string, name: string, types?: Array<string>, isFavorite: boolean, image: string }> } };

export const AttackFieldsFragmentDoc = gql`
    fragment AttackFields on Attack {
  name
  damage
  type
}
    `;
export const PokemonModalFieldsFragmentDoc = gql`
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
    ${AttackFieldsFragmentDoc}`;
export const DimensionFieldsFragmentDoc = gql`
    fragment DimensionFields on PokemonDimension {
  minimum
  maximum
}
    `;
export const NarrowPokemonFieldsFragmentDoc = gql`
    fragment NarrowPokemonFields on Pokemon {
  id
  name
  types @skip(if: $withoutTypes)
  isFavorite
  image
}
    `;
export const PokemonDetailFieldsFragmentDoc = gql`
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
    ${DimensionFieldsFragmentDoc}
${NarrowPokemonFieldsFragmentDoc}`;
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
export const FavoritePokemonDocument = gql`
    mutation favoritePokemon($id: ID!) {
  favoritePokemon(id: $id) {
    id
    isFavorite
  }
}
    `;
export type FavoritePokemonMutationFn = ApolloReactCommon.MutationFunction<FavoritePokemonMutation, FavoritePokemonMutationVariables>;

/**
 * __useFavoritePokemonMutation__
 *
 * To run a mutation, you first call `useFavoritePokemonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFavoritePokemonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [favoritePokemonMutation, { data, loading, error }] = useFavoritePokemonMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFavoritePokemonMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<FavoritePokemonMutation, FavoritePokemonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<FavoritePokemonMutation, FavoritePokemonMutationVariables>(FavoritePokemonDocument, options);
      }
export type FavoritePokemonMutationHookResult = ReturnType<typeof useFavoritePokemonMutation>;
export type FavoritePokemonMutationResult = ApolloReactCommon.MutationResult<FavoritePokemonMutation>;
export type FavoritePokemonMutationOptions = ApolloReactCommon.BaseMutationOptions<FavoritePokemonMutation, FavoritePokemonMutationVariables>;
export const UnFavoritePokemonDocument = gql`
    mutation unFavoritePokemon($id: ID!) {
  unFavoritePokemon(id: $id) {
    id
    isFavorite
  }
}
    `;
export type UnFavoritePokemonMutationFn = ApolloReactCommon.MutationFunction<UnFavoritePokemonMutation, UnFavoritePokemonMutationVariables>;

/**
 * __useUnFavoritePokemonMutation__
 *
 * To run a mutation, you first call `useUnFavoritePokemonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnFavoritePokemonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unFavoritePokemonMutation, { data, loading, error }] = useUnFavoritePokemonMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUnFavoritePokemonMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UnFavoritePokemonMutation, UnFavoritePokemonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UnFavoritePokemonMutation, UnFavoritePokemonMutationVariables>(UnFavoritePokemonDocument, options);
      }
export type UnFavoritePokemonMutationHookResult = ReturnType<typeof useUnFavoritePokemonMutation>;
export type UnFavoritePokemonMutationResult = ApolloReactCommon.MutationResult<UnFavoritePokemonMutation>;
export type UnFavoritePokemonMutationOptions = ApolloReactCommon.BaseMutationOptions<UnFavoritePokemonMutation, UnFavoritePokemonMutationVariables>;
export const GetPokemonModalDocument = gql`
    query GetPokemonModal($id: ID!) {
  pokemonById(id: $id) {
    ...PokemonModalFields
  }
}
    ${PokemonModalFieldsFragmentDoc}`;

/**
 * __useGetPokemonModalQuery__
 *
 * To run a query within a React component, call `useGetPokemonModalQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonModalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonModalQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPokemonModalQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetPokemonModalQuery, GetPokemonModalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetPokemonModalQuery, GetPokemonModalQueryVariables>(GetPokemonModalDocument, options);
      }
export function useGetPokemonModalLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPokemonModalQuery, GetPokemonModalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetPokemonModalQuery, GetPokemonModalQueryVariables>(GetPokemonModalDocument, options);
        }
export type GetPokemonModalQueryHookResult = ReturnType<typeof useGetPokemonModalQuery>;
export type GetPokemonModalLazyQueryHookResult = ReturnType<typeof useGetPokemonModalLazyQuery>;
export type GetPokemonModalQueryResult = ApolloReactCommon.QueryResult<GetPokemonModalQuery, GetPokemonModalQueryVariables>;
export const GetPokemonDetailDocument = gql`
    query GetPokemonDetail($id: ID!, $withoutTypes: Boolean!) {
  pokemonById(id: $id) {
    ...PokemonDetailFields
  }
}
    ${PokemonDetailFieldsFragmentDoc}`;

/**
 * __useGetPokemonDetailQuery__
 *
 * To run a query within a React component, call `useGetPokemonDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *      withoutTypes: // value for 'withoutTypes'
 *   },
 * });
 */
export function useGetPokemonDetailQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetPokemonDetailQuery, GetPokemonDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetPokemonDetailQuery, GetPokemonDetailQueryVariables>(GetPokemonDetailDocument, options);
      }
export function useGetPokemonDetailLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPokemonDetailQuery, GetPokemonDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetPokemonDetailQuery, GetPokemonDetailQueryVariables>(GetPokemonDetailDocument, options);
        }
export type GetPokemonDetailQueryHookResult = ReturnType<typeof useGetPokemonDetailQuery>;
export type GetPokemonDetailLazyQueryHookResult = ReturnType<typeof useGetPokemonDetailLazyQuery>;
export type GetPokemonDetailQueryResult = ApolloReactCommon.QueryResult<GetPokemonDetailQuery, GetPokemonDetailQueryVariables>;
export const GetPokemonDetailByNameDocument = gql`
    query GetPokemonDetailByName($name: String!, $withoutTypes: Boolean!) {
  pokemonByName(name: $name) {
    ...PokemonDetailFields
  }
}
    ${PokemonDetailFieldsFragmentDoc}`;

/**
 * __useGetPokemonDetailByNameQuery__
 *
 * To run a query within a React component, call `useGetPokemonDetailByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonDetailByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonDetailByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *      withoutTypes: // value for 'withoutTypes'
 *   },
 * });
 */
export function useGetPokemonDetailByNameQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetPokemonDetailByNameQuery, GetPokemonDetailByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetPokemonDetailByNameQuery, GetPokemonDetailByNameQueryVariables>(GetPokemonDetailByNameDocument, options);
      }
export function useGetPokemonDetailByNameLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPokemonDetailByNameQuery, GetPokemonDetailByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetPokemonDetailByNameQuery, GetPokemonDetailByNameQueryVariables>(GetPokemonDetailByNameDocument, options);
        }
export type GetPokemonDetailByNameQueryHookResult = ReturnType<typeof useGetPokemonDetailByNameQuery>;
export type GetPokemonDetailByNameLazyQueryHookResult = ReturnType<typeof useGetPokemonDetailByNameLazyQuery>;
export type GetPokemonDetailByNameQueryResult = ApolloReactCommon.QueryResult<GetPokemonDetailByNameQuery, GetPokemonDetailByNameQueryVariables>;
export const GetPokemonsDocument = gql`
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
 *      withoutTypes: // value for 'withoutTypes'
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