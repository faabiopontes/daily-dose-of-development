const express = require('express');
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.json());

/**
 * HTTP Methods:
 *
 * GET: Get information from back-end
 * POST: Create information on back-end
 * PUT/PATCH: Change information on back-end
 * DELETE: Delete information on back-end
 */

/**
 * Parameter Types:
 *
 * Query Params: Filters and Pagination
 * Route Params: Identify resources (Update/Delete)
 * Request Body: Content of resource to Create or Update (JSON)
 */

/**
 * Middlware: Request interceptor
 *
 * Stop requests or change its data
 */

const projects = [];

const logRequests = (request, response, next) => {
  const { method, url } = request;
  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.time(logLabel);
  next();
  console.timeEnd(logLabel);
};

const validateProjectId = (request, response, next) => {
  const { id } = request.params;

  if(!isUuid(id)) {
    return response.status(400).json({ error: 'Invalid project ID.' });
  }

  next();
};

app.use(logRequests);
app.use('/projects/:id', validateProjectId);

app.get('/projects', (request, response) => {
  // Query Params
  const { title, owner } = request.query;
  let results = projects;

  if(title) {
    results = results.filter(project => project.title.includes(title));
  }

  if(owner) {
    results = results.filter(project => project.owner.includes(owner));
  }

  return response.json(results);
});

app.post('/projects', (request, response) => {
  // Request Body
  const { title, owner } = request.body;

  const project = { id: uuid(), title, owner };
  projects.push(project);

  return response.json(project);
});

app.put('/projects/:id', (request, response) => {
  // Route Params
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex(project => project.id == id);

  if(projectIndex == -1) {
    return response.status(400).json({ error: 'Project not found.' });
  }

  const project = {
    id,
    title,
    owner
  };

  projects[projectIndex] = project;

  return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
  // Route Params
  const { id } = request.params;

  const projectIndex = projects.findIndex(project => project.id == id);

  if(projectIndex == -1) {
    return response.status(400).json({ error: 'Project not found.' });
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

app.listen(3333, () => {
  console.log('🚀 Back-end started!', new Date());
});

process.on('SIGINT', () => {
  console.log('Bye bye!');
  process.exit();
});
