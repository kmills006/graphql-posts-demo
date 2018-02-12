/* eslint-disable prefer-destructuring */
import { config } from 'dotenv';

config({ path: '.env', silent: true });

const { env } = process;

export const ENABLE_GRAPHIQL = env.ENABLE_GRAPHIQL;
export const MONGODB_URI = env.MONGODB_URI || 'mongodb://localhost/graphqlpostsdemo';
export const PORT = env.PORT || 3000;
