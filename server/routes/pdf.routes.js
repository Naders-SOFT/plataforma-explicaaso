import express from 'express';
import multer from 'multer';
import { createPdf, listPdfs, deletePdf } from '../controllers/pdf.controller.js'; 

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get('/list', listPdfs);

router.post('/posts', upload.single('arq-pdf'), createPdf)

router.delete('/delete/:idPdf', deletePdf);

export default router