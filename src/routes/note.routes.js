const express = require("express");
const router = express.Router();

const { createNote } = require("../controllers/note.controller");

router.post("/", createNote);
router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.patch("/:id", updateNote);
router.delete("/:id", deleteNote);

module.exports = router;