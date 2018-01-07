console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
};
var getAll = () => {
    console.log('Getting all notes');
};
var getNote = (title) => {
    console.log('Getting note',title);
}
var removeNote = (title) => {
    console.log('Removing note',title);
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