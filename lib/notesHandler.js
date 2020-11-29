const fs = require("fs");
const path = require("path");

// Coding for reading all notes from database
const readNotes = () => {
    notesList = fs.readFileSync(path.join(__dirname, '../db/db.json'));

    return JSON.parse(notesList);
}

// Coding for creating new note in database
const createNewNote = (body) => {
    
    const notesArray = readNotes();
    
    const newNote = {
        id: body.id,
        title: body.title,
        text: body.text
    }

    notesArray.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    return newNote;
}

// Coding for deleting note from database
const deleteNote = (id) => {
    let notesArray = readNotes();

    notesArray = notesArray.filter((note) => note.id != id);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );

    return notesArray;
}


module.exports = {
    readNotes,
    createNewNote,
    deleteNote
}