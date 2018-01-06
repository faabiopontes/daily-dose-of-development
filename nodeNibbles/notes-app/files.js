console.log('Starting files.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
// Require is used to get modules from the outside
// There are there kinds of modules we can use
// Built-in modules: All modules available are on the Node API
// Our own modules: Files or modules created by us, like notes.js
// Third-party modules: Like lodash or anything available on NPM

function callbackAppendFile(err) {
    if (err) {
        console.log('Unable to write to file');
    } else {
        console.log('Append Sucessful [2]');
    }
}

var user = os.userInfo();
fs.appendFile(
    __dirname + '/greetings.txt',
    `Hello ${user.username}!\n`,
    // String interpolation, another great ES6 feature
    // That makes us be able to use object atributes
    // Without having to mess our code with concatenation
    callbackAppendFile
    // The function automatically creates the file if it doesn't exist
    // Without the third parameter it gives us a warning
    // The third parameter is a callback
    // The callback is executed after the function is completed
    // Since stuff related to files are blocking we need to have a callback
    // This makes the code asynchronous
);
console.log('Append Sucessful [1]');
// But the code goes on, and this message is displayed before the actual end of the function