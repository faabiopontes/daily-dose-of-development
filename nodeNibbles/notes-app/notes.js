console.log('Starting notes.js');

module.exports.age = 25;
module.exports.name = "Fabio";
module.exports.addNote = () => {
    console.log('addNote');
    return 'New note';
}
module.exports.addNumbers = (a, b) => {
    return a + b;
}
// Everything on module.exports gets exported