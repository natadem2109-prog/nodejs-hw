import { Router } from 'express';
import {
  createNote,
  deleteNote,
  getNoteById,
  getNotes,
  updateNote,
} from '../controllers/notesController.js';

const router = Router();

router.get('/', getNotes);
router.get('/:noteId', getNoteById);
router.post('/', createNote);
router.patch('/:noteId', updateNote);
router.delete('/:noteId', deleteNote);

export default router;
