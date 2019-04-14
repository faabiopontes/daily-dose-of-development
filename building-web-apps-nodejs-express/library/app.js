const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const sql = require('mssql');

const config = {
  user: 'pslibrary',
  password: 'pl4nq12PC!@#',
  server: 'fsplibrary.database.windows.net',
  database: 'PSLibrary',

  options: {
    encrypt: true, // Use this if you're on Windows Azure
  },
};

const app = express();
const port = process.env.PORT;

sql.connect(config).catch(err => debug(err));
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use(
  '/css',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')),
);
app.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')),
);
app.use(
  '/fonts',
  express.static(path.join(__dirname, '/node_modules/bootstrap/dist/fonts')),
);
app.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/jquery/dist')),
);

app.set('views', './src/views');
app.set('view engine', 'ejs');

const nav = [
  { link: '/books', title: 'Books' },
  { link: '/authors', title: 'Authors' },
];
const bookRouter = require('./src/routes/bookRoutes')(nav);

app.use('/books', bookRouter);
app.get('/', (req, res) => {
  // res.send('Hello from my library app');
  // res.sendFile(path.join(__dirname, 'views', 'index.html'));
  res.render('index', {
    title: 'MyLibrary',
    nav: [
      {
        link: '/books',
        title: 'Books',
      },
      {
        link: '/authors',
        title: 'Authors',
      },
    ],
  });
});

app.listen(port, () => {
  // Command to run with debug
  // DEBUG=app node app.js
  debug(`Listening on port ${chalk.green(process.env.PORT)}`);
});
