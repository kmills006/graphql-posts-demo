import 'babel-polyfill';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { PORT } from './config';

console.log('PORT: ', PORT);

const startServer = async () => {
  const app = express();

  app.use(cors());
  app.use(helmet());

  const server = app.listen(PORT, () => {
    const { port } = server.address();

    console.log(`Server is running on port ${port}.`);
  });
};

startServer().catch((error) => {
  console.error(`Error starting server: ${error}`);
});
