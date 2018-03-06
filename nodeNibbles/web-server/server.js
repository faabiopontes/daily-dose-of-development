const express = require('express');
const hbs = require('hbs');

var app = express();
var port = 3000;


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});
hbs.registerHelper('screamIt', (string) => {
  return string.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'Learning Node with Andrew Mead'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });

});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable do handle request',
  });
});

app.listen(port, () => {
  console.log('Server is up and running on port', port, 'Seconds:', new Date().getSeconds());
});