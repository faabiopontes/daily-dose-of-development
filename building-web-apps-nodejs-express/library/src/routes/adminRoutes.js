const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:adminRoutes');
const books = require('../json/books');

const adminRouter = express.Router();

function router(nav) {
  adminRouter.route('/').get(async (req, res) => {
    const url = 'mongodb://localhost:27017';
    const dbName = 'libraryApp';
    let client;
    try {
      client = await MongoClient.connect(url, { useNewUrlParser: true });
      debug('Connected correctly to server');

      const db = client.db(dbName);
      const response = await db.collection('books').insertMany(books);
      res.json(response);
    } catch (err) {
      debug('Error connecting to the server', err);
    }
  });
  return adminRouter;
}

module.exports = router;
