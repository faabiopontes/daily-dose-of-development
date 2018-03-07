const express = require('express');
const hbs = require('hbs');

var app = express();
var port = 3000;

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(port, () => {
  console.log('html5-css3: Server is up and running on port', port, 'Seconds:', new Date().getSeconds());
});