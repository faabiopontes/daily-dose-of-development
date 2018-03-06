const express = require('express');

var app = express();
var port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Fabio',
    likes: [
      'Biking',
      'Music'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable do handle request',
  });
});

app.listen(port, () => {
  console.log('Server is up and running on port '+port);
});
console.log('Server is running');