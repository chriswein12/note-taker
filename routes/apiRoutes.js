const router = require('express').Router();
const uuid = require('uuid');
const { readNotes, createNewNote } = require('../lib/notesHandler')
const { notes } = require('../db/db');


router.get('/notes', (req, res) => {

    console.log("This part is working");
    console.log(notes);
    const notesList = readNotes();

    res.json(notesList);
         
});

router.post('/notes', (req, res) => {
    req.body.id = uuid.v4();
    
    const note = createNewNote(req.body, notes)

    res.json(note);

});

module.exports = router;