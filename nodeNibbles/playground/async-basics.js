console.log('Starting app');

// Asynchronous
setTimeout(() => {
  console.log('Inside of callback');
}, 2000);

setTimeout(() => {
  console.log('Inside of second callback');
}, 0);

// Synchronous
var x = 1;

var y = x + 9;

console.log(`y is ${y}`);

console.log('Finishing app');