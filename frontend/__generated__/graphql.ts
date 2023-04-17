/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
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
  favoritePokemon?: Maybe<Pokemon>;
  unFavoritePokemon?: Maybe<Pokemon>;
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
  evolutionRequirements?: Maybe<PokemonEvolutionRequirement>;
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
  isFavorite?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
};

export type PokemonsQueryInput = {
  filter?: InputMaybe<PokemonFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  pokemonById?: Maybe<Pokemon>;
  pokemonByName?: Maybe<Pokemon>;
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

export type EdgeFieldsFragment = { __typename?: 'Pokemon', id: string, name: string, classification: string, types: Array<string>, isFavorite: boolean, image: string } & { ' $fragmentName'?: 'EdgeFieldsFragment' };

export type GetPokemonsQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type GetPokemonsQuery = { __typename?: 'Query', pokemons: { __typename?: 'PokemonConnection', limit: number, offset: number, count: number, edges: Array<(
      { __typename?: 'Pokemon' }
      & { ' $fragmentRefs'?: { 'EdgeFieldsFragment': EdgeFieldsFragment } }
    )> } };

export const EdgeFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EdgeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pokemon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"classification"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorite"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]} as unknown as DocumentNode<EdgeFieldsFragment, unknown>;
export const GetPokemonsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPokemons"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokemons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EdgeFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EdgeFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pokemon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"classification"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorite"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]} as unknown as DocumentNode<GetPokemonsQuery, GetPokemonsQueryVariables>;