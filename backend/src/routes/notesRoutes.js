import express from 'express';
import { createNote, deleteNote, getAllNotes, updateNote } from '../controller/notesController.js';

const router = express.Router();

router.get("/",getAllNotes);
router.post("/:id", createNote);
router.put("/", updateNote);
router.delete("/:id", deleteNote);

export default router;
