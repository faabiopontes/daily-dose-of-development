const express = require('express');
const hbs = require('hbs');

var app = express();
var port = 3000;

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  // reace this to a call to res.render
  // brand new home.hbs
  // inside we are going to have the same properties below
  // plus welcome message
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
  console.log('Server is up and running on port ' + port);
});
console.log('Server is running');