import {s3, uploadArquivo} from '../models/pdf.models.js'

async function upload(request, response) {
    try {
        uploadArquivo(request.body.file)
        const urlArq = `http://127.0.0.1:9000/teste/${request.file.key}`
        response.json({
            mensagem: 'Upload realizado com sucesso.',
            url: urlArq
        })
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ 
            message: 'Erro ao enviar o arquivo'
        })
    }
}

export default upload