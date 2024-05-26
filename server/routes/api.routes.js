import express from 'express'
import multer from 'multer'
import pdfModels from '../controllers/pdf.controller.js'

const routes = express.Router()

routes.post('/pdf', pdfModels.uploadArquivo);

export default routes0