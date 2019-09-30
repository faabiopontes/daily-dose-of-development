const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  let name = req.query.name;
  name = name ? name : 'World';

  return res.json({ message: `Hello ${name}` });
});

routes.post('/devs', (req, res) => {
  console.log(req.body);
  return res.json({ ok: true });
});

module.exports = routes;
