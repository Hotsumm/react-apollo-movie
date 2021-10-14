import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphql-movie-api-2021.herokuapp.com',
  cache: new InMemoryCache(),
});

export default client;
