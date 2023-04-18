/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment NarrowPokemonFields on Pokemon {\n    id\n    name\n    classification\n    types\n    isFavorite\n    image\n  }\n": types.NarrowPokemonFieldsFragmentDoc,
    "\n  \n  query GetPokemons($limit: Int!, $offset: Int!) {\n    pokemons(query: { limit: $limit, offset: $offset }) {\n      limit\n      offset\n      count\n      edges {\n        ...NarrowPokemonFields\n      }\n    }\n  }\n": types.GetPokemonsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment NarrowPokemonFields on Pokemon {\n    id\n    name\n    classification\n    types\n    isFavorite\n    image\n  }\n"): (typeof documents)["\n  fragment NarrowPokemonFields on Pokemon {\n    id\n    name\n    classification\n    types\n    isFavorite\n    image\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  \n  query GetPokemons($limit: Int!, $offset: Int!) {\n    pokemons(query: { limit: $limit, offset: $offset }) {\n      limit\n      offset\n      count\n      edges {\n        ...NarrowPokemonFields\n      }\n    }\n  }\n"): (typeof documents)["\n  \n  query GetPokemons($limit: Int!, $offset: Int!) {\n    pokemons(query: { limit: $limit, offset: $offset }) {\n      limit\n      offset\n      count\n      edges {\n        ...NarrowPokemonFields\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;