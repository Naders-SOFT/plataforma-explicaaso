import { uploadFile } from '../s3.js'
import Pdf from '../models/pdf.models.js'

export const createPost = async (req, res) => {

    try {

        const pdfNovo = new Pdf({
            titulo: req.file.originalname,
            disciplina: req.body.disciplina,
            frente: req.body.frente,
            data: new Date().toLocaleDateString()
        })

        await pdfNovo.save()
        const msmPdfCriado = await Pdf.findOne({
            titulo: req.file.originalname,
            disciplina: req.body.disciplina,
            frente: req.body.frente
        })
        
        await uploadFile(req.file.buffer, 
                        msmPdfCriado._id.toString(), 
                        req.file.mimetype);

        res.status(201).send();
    }
    catch (error) {
        console.error('Error creating post:', error);
        res.status(500).send({ 
            error: 'Failed to create merdaaa',
            stop: 'para de ser ze mane'
        });
    }
}
