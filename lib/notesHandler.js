const fs = require("fs");
const path = require("path");

const readNotes = () => {
    notesList = fs.readFileSync(path.join(__dirname, '../db/db.json'));

    return JSON.parse(notesList);

}

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



module.exports = {
    readNotes,
    createNewNote
}