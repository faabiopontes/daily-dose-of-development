const express = require('express');

const app = express();

app.get('/', (req, res) => {
  let name = req.query.name;
  name = name ? name : 'World';

  return res.json({ message: `Hello ${name}` });
});

app.listen(3333);
