import express from 'express'
import pdfController from '../controllers/pdf.controller.js'

const routes = express.Router()

routes.post('/pdf', pdfController.upload.single('file'), function(request, response, err) {
    if (err) {
        return response
            .status(500)
            .send({
                error: 'erro no upload'
            })
    }
    response
        .send({
            message: 'upload concluido com sucesso',
            urlArquivo: request.file.location
        })
})

export default routes