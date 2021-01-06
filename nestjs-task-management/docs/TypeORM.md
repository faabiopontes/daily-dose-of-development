# TypeORM
[TypeORM Documentation](https://typeorm.io)

TypeORM is an ORM library that can run in Node.js and be used with TypeScript (or JavaScript).

Helps us define and manage entities, repositories, columns, relations, replication, indices, queries, logging and **so much more**.

## Example
Retrieving all tasks owned by "Ashley" and are of status "DONE".

**TypeORM:**
`const tasks = await Task.find({ status: 'DONE', user: 'Ashley' });`

**Pure JavaScript:**
```javascript
let tasks;
let query = 'SELECT * FROM tasks WHERE status = "DONE" AND user = "Ashley"';
db.query(query, (err, result) => {
  if (err) {
    throw new Error('Could not retrieve tasks!');
  }
  tasks = result.rows;
});
```

## Documentation
