// var obj = {
//     name: 'Fabio',
//     age: 25
// };
// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"Fabio","age": 25}';
// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);

const fs = require('fs');
var originalNote = {
    title: 'Some title',
    body: 'Some body'
};
originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync(__dirname + '/notes.json', originalNoteString);

var noteString = fs.readFileSync(__dirname + '/notes.json');
note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);