import express from 'express';
import multer from 'multer';
import { createPdf, listPdfs, deletePdf, listPdfsFrente } from '../controllers/pdf.controller.js'; 

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

// get de todos os pdfs
router.get('/list', listPdfs);

// get dos pdfs de uma frente especifica
router.get('/list/:frente', listPdfsFrente);

// upload de pdfs
router.post('/posts', upload.single('arq-pdf'), createPdf)

// delecao de pdfs
router.delete('/delete/:frente/:idPdf', deletePdf);

export default router