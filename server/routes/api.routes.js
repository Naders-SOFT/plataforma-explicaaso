import express from 'express'
import multer from 'multer'
import pdfModels from '../models/pdf.models.js'

const routes = express.Router()

routes.post('/pdf', pdfModels.upload.single('pdf'), async (request, response) => {
    try {
      const fileUrl = `http://127.0.0.1:9000/teste/${request.file.key}`;
      response.json({ message: 'Arquivo enviado com sucesso!', url: fileUrl });
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: 'Erro ao enviar o arquivo' });
    }
  }
);

export default routes