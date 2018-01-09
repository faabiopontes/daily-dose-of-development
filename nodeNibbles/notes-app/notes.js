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
    return true;
};

var noteDuplicated = (notes, title) => {
    notes = notes.filter((note) => note.title === title);
    // When we are doing one verification
    // The line above does the same as the lines below
    // var noteDuplicated = notes.filter((note) => {
    //     return note.title === title;
    // });
    return notes.length === 0;
}

var noteRemove = (notes, title) => {
    notes = notes.filter((note) => note.title !== title);
    return notes;
}

var noteFind = (notes, title) => {
    notes = notes.filter((note) => note.title === title);
    return notes[0];
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    if (noteDuplicated(notes, title) === true) {
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
    var notes = fetchNotes();
    var filteredNotes = noteFind(notes, title);
    return filteredNotes;
}
var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = noteRemove(notes, title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
}
var logNote = (note) => {
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    // this is the same as
    // addNote: addNote
    // since the property is the same name as the variable defined
    getAll,
    getNote,
    removeNote,
    logNote
};