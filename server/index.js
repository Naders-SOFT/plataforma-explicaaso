import express from 'express';
// import routes from './routes/api.routes.js'
import path from 'path';
import cors from 'cors';
import pdfController from './controllers/pdf.controller.js';


// Cria uma aplicação express:
const app = express();

app.use(express.static('public'));

// Habilita a aplicação a trabalhar com JSONs:
app.use(express.json());


// app.use('/api', routes)
app.use(cors({
    origin: 'http://localhost:3000'  // Replace with your frontend's origin
}));

// PARTE DOS PDFs:

app.post('/pdf', pdfController.upload.single('file'), function(request, response, err) {
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
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(3003,  () => {
    console.log('Servidor ouvindo na porta 3003.') 
});