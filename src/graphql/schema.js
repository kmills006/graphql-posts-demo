import { makeExecutableSchema } from 'graphql-tools';

import queryResolvers from './queries';
import types from './types';

const Query = `
  type Query {
    posts: [Post]
  }
`;

const typeDefs = [
  ...types,
  Query,
];

export default makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: queryResolvers,
  },
});
