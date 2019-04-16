import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { answer: 42 });
});

app.set('view engine', 'ejs');

app.listen(config.port, () => {
  console.info(`Running on ${config.port}`);
});
