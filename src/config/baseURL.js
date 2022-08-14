import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://branymyanmar.test/graphql',
    cache: new InMemoryCache(),
});

export {
    client
}