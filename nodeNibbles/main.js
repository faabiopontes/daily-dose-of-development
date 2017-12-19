const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
var times = 0;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Server requested '+times+'\n');

  times++;
  console.log('URL Requested: '+req.url);
  console.log('Server requested '+times);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});