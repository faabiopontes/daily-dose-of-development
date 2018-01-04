console.log('Starting app.js');
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');
// Require is used to get modules from the outside
// There are there kinds of modules we can use
// Built-in modules: All modules available are on the Node API
// Our own modules: Files or modules created by us, like notes.js
// Third-party modules: Like lodash or anything available on NPM

// console.log(_.isString(true));
// console.log(_.isString('Fabio'));
var filteredArray = _.uniq(['Fabio',1,'Pontes',1,2,3,4]);
console.log(filteredArray);

var res = notes.addNote();

console.log(res);
console.log('Result: ', notes.addNumbers(25,24));