import express from 'express';
import { helloWorld } from './routes';

const app = express();

app.get('/', (request, response) => {
  return helloWorld(request, response);
});

app.listen(3333);
