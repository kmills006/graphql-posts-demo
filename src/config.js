/* eslint-disable prefer-destructuring */
import { config } from 'dotenv';

config({ path: '.env', silent: true });

const { env } = process;

export const ENABLE_GRAPHIQL = env.ENABLE_GRAPHIQL;
export const PORT = env.PORT || 3000;
