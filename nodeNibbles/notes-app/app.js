console.log('Starting app.js');
const fs = require('fs');
const os = require('os');
// Require is used to get built-in modules
// All modules available are on the API

const notes = require('./notes.js');
// We can also require our own files

var res = notes.addNote();

console.log(res);
console.log('Result: ', notes.addNumbers(25,24));