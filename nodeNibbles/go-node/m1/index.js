// Using JS "Front-End" on server side
console.log('Hello World');
const array = [1,2,3,4];
const newArray = array.map(item => item * 2);
console.log(newArray);

// Creating our web-server
const http = require('http');
http.createServer((req,res) => {
  res.write('Hello World');
  res.end();
}).listen(3000);