const express = require('express');

const bookRouter = express.Router();
const sql = require('mssql');
const debug = require('debug')('app:bookRoutes');

function router(nav) {
  const request = new sql.Request();

  bookRouter.route('/').get(async (req, res) => {
    const { recordset } = await request.query('select * from books');
    debug(recordset);
    res.render('bookListView', {
      title: 'MyLibrary',
      books: recordset,
      nav,
    });
  });
  bookRouter
    .route('/:id')
    .all(async (req, res, next) => {
      const { id } = req.params;
      const { recordset } = await request
        .input('id', sql.Int, id)
        .query('select * from books where id = @id');
      [req.book] = recordset;
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
