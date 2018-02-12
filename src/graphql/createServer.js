import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { ENABLE_GRAPHIQL } from '../config';
import schema from './schema';

export default async (app) => {
  app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

  if (ENABLE_GRAPHIQL) {
    app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
  }
};
