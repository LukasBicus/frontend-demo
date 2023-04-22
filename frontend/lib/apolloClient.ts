import { ApolloClient, InMemoryCache } from '@apollo/client'
import { orderBy, uniqBy } from 'lodash'

let client: ApolloClient<any> | null = null

/**
 * @link https://www.apollographql.com/blog/apollo-client/how-to-use-apollo-client-with-next-js-13/
 */
export const getClient = () => {
  // create a new client if there's no existing one
  // or if we are running on the server.
  if (!client || typeof window === 'undefined') {
    client = new ApolloClient({
      uri: 'http://localhost:4000/graphql',
      cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              pokemons: {
                keyArgs: ['query', ['search', 'filter']],
                merge: (existing = { edges: [] }, incoming = { edges: [] }) => {
                  return {
                    ...existing,
                    ...incoming,
                    // edges are re-filtered and re-ordered due fetch-policy (cache and network)
                    edges: orderBy(
                      uniqBy([...incoming.edges, ...existing.edges], '__ref'),
                      '__ref',
                    ),
                  }
                },
              },
            },
          },
        },
      }),
    })
  }

  return client
}
