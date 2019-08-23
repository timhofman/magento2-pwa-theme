
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { GRAPHQL_ENDPOINT } from '../configuration'

const httpLink = createHttpLink({
    uri: GRAPHQL_ENDPOINT
})

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})