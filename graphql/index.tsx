import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HASURA_URL,
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN,
  },
})

export default client