import express from 'express';
import "reflect-metadata";

import './database/connect';
import routes from './routes';

const app = express();

app.use(express.json());
app.use('/api', routes);

app.listen(3333, () => {
  console.log("[server] -> starting!");
  console.log("[server] -> Server started at http://localhost:3333/api");
})