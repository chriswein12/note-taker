const router = require('express').Router();
const uuid = require('uuid');
const { readNotes, createNewNote, deleteNote } = require('../lib/notesHandler')
const { notes } = require('../db/db');

// Pull notes from db.json
router.get('/notes', (req, res) => {

    const notesList = readNotes();

    res.json(notesList);
         
});

// Add note to list
router.post('/notes', (req, res) => {
    req.body.id = uuid.v4();
    
    const note = createNewNote(req.body, notes)

    res.json(note);

});

// Delete note from list
router.delete('/notes/:id', (req, res) => {
    const deletedNote = deleteNote(req.params.id);
    res.json(deletedNote);

});

module.exports = router;