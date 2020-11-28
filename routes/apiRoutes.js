const router = require('express').Router();
const handler = require('../public/assets/js/index')
const { notes } = require('../db/db.json');
const { selectedNote } = require("../lib/notes.js")

router.get('/notes', (req, res) => {
    let results = notes;
    handler.getNotes(results);
         
});

router.post('/notes', (req, res) => {
    handler.saveNote(req.body)

});

module.exports = router;