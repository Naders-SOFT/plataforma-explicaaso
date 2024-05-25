import express from 'express'
import multer from 'multer'
import pdfController from '../controllers/pdf.controller.js'

const routes = express.Router()

Router.post('/pdf', pdfController.upload2)

export default routes