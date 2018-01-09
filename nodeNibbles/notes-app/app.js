console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (typeof note === "undefined") {
        console.log('The note title already exists!');
    } else {
        console.log('The program created the note sucessfully!');
        notes.logNote(note);
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    note = notes.getNote(argv.title);
    if (typeof note === "undefined"){
        console.log('Note not found');
    } else {
        console.log('Note found');
        notes.logNote(note);
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note removed sucessfully' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}