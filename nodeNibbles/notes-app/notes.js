console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync(__dirname + '/notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync(__dirname + '/notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };



    var duplicateNotes = notes.filter((note) => note.title === title);
    // When we are doing one verification
    // The line above does the same as the lines below
    // var duplicateNotes = notes.filter((note) => {
    //     return note.title === title;
    // });
    if (duplicateNotes.length === 0) {
        console.log('Adding note', title, body);
        notes.push(note);
        saveNotes(notes);
        return note;
    } else {
        console.log('Note Title already exists!');
    }

};
var getAll = () => {
    console.log('Getting all notes');
};
var getNote = (title) => {
    console.log('Getting note', title);
}
var removeNote = (title) => {
    console.log('Removing note', title);
}

module.exports = {
    addNote,
    // this is the same as
    // addNote: addNote
    // since the property is the same name as the variable defined
    getAll,
    getNote,
    removeNote
};