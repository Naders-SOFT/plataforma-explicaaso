import express from 'express';
import multer from 'multer';
import { createPost } from '../controllers/pdf.controller.js'; 

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

// router.get('/', getPosts);
router.post('/posts', upload.single('arq-pdf'), createPost);
// router.delete('/:id', deletePost);

export default router