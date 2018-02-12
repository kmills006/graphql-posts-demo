import 'babel-polyfill';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { connectToDb } from './db';
import { createGraphQLServer } from './graphql';
import { PORT } from './config';

const startServer = async () => {
  await connectToDb();

  const app = express();

  app.use(cors());
  app.use(helmet());

  createGraphQLServer(app);

  const server = app.listen(PORT, () => {
    const { port } = server.address();

    console.log(`Server is running on port ${port}.`);
  });
};

startServer().catch((error) => {
  console.error(`Error starting server: ${error}`);
});
