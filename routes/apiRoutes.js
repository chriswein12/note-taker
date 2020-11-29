const router = require('express').Router();
const uuid = require('uuid');
const { readNotes, createNewNote, deleteNote } = require('../lib/notesHandler')
const { notes } = require('../db/db');


router.get('/notes', (req, res) => {

    const notesList = readNotes();

    res.json(notesList);
         
});

router.post('/notes', (req, res) => {
    req.body.id = uuid.v4();
    
    const note = createNewNote(req.body, notes)

    res.json(note);

});

router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id);
    return router;

});

module.exports = router;