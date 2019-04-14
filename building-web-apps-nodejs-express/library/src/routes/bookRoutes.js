const express = require('express');
const { MongoClient } = require('mongodb');

const bookRouter = express.Router();

// MSSQL way
// const sql = require('mssql');

const debug = require('debug')('app:bookRoutes');

function router(nav) {
  // MSSQL way
  // const request = new sql.Request();

  bookRouter.route('/').get(async (req, res) => {
    // MSSQL way
    // const { recordset } = await request.query('select * from books');

    // MongoDB way
    const url = 'mongodb://localhost:27017';
    const dbName = 'libraryApp';
    let client;
    try {
      client = await MongoClient.connect(url, { useNewUrlParser: true });
      debug('Connected correctly to server');

      const db = client.db(dbName);
      const col = await db.collection('books');
      const books = await col.find().toArray();

      debug(books);
      res.render('bookListView', {
        title: 'MyLibrary',
        books,
        nav,
      });
    } catch (err) {
      debug('Error connecting to the server', err);
    }
  });
  bookRouter
    .route('/:id')
    .all(async (req, res, next) => {
      const { id } = req.params;

      // MSSQL way
      // const { recordset } = await request
      //   .input('id', sql.Int, id)
      //   .query('select * from books where id = @id');
      // [req.book] = recordset;

      next();
    })
    .get((req, res) => {
      res.render('bookView', {
        nav,
        book: req.book,
      });
    });
  return bookRouter;
}

module.exports = router;
