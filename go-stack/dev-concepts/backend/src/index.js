const express = require('express');

const app = express();

/**
 * HTTP Methods:
 *
 * GET: Get information from back-end
 * POST: Create information on back-end
 * PUT/PATCH: Change information on back-end
 * DELETE: Delete information on back-end
 */

app.get('/projects', (request, response) => {
  return response.json(['Project 1', 'Project 2']);
});

app.post('/projects', (request, response) => {
  return response.json(['Project 1', 'Project 2', 'Project 3']);
});

app.put('/projects/:id', (request, response) => {
  return response.json(['Project 4', 'Project 2', 'Project 3']);
});

app.delete('/projects/:id', (request, response) => {
  return response.json(['Project 2', 'Project 3']);
});

app.listen(3333, () => {
  console.log('🚀 Back-end started!', new Date());
});

process.on('SIGINT', () => {
  console.log('Bye bye!');
  process.exit();
});
