import express from 'express';
import multer from 'multer';
import { createPdf, listPdfs, deletePdf, listPdfsFrente } from '../controllers/pdf.controller.js'; 

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get('/list', listPdfs);

router.get('/list/:frente', listPdfsFrente);

router.post('/posts', upload.single('arq-pdf'), createPdf)

router.delete('/delete/:idPdf', deletePdf);

export default router