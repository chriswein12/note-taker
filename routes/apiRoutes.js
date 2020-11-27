const router = require('express').Router();
const { notes } = require('../db/db.json');
const { selectedNote } = require("../lib/notes.js")

router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
         
    }
});

router.post('/notes', (req, res) => {

});

module.exports = router;