import { makeExecutableSchema } from 'graphql-tools';
import queryResolvers from './queries';
import resolverMaps from './resolver-maps';
import types from './types';

const Query = `
  type Query {
    authors: [Author]!
    comments: [Comment]!
    posts: [Post]!
  }
`;

const typeDefs = [
  ...types,
  Query,
];

export default makeExecutableSchema({
  typeDefs,
  resolvers: {
    ...resolverMaps,
    Query: queryResolvers,
  },
});
