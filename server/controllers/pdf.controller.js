import { uploadFile, getObjectSignedUrl, deleteFile } from '../s3.js'
import Pdf from '../models/pdf.models.js'

export const createPdf = async (req, res) => {

    try {
        const pdfNovo = new Pdf({
            titulo: req.file.originalname,
            disciplina: req.body.disciplina,
            frente: req.body.frente,
            data: new Date().toLocaleDateString()
        })

        await pdfNovo.save()
        
        // Upload no minio
        await uploadFile(req.file.buffer, 
                        pdfNovo._id.toString(), 
                        req.file.mimetype);

        res.status(201).send();
    }
    catch (error) {
        console.error('Error creating post:', error);
        res.status(500).send({ 
            error: 'Failed to upload file',
        });
    }
}

export async function listPdfs(req, res) {
    try {
        const pdfs = await Pdf.find({})
        for (let pdf of pdfs) {
            pdf.link = await getObjectSignedUrl(pdf._id.toString())
            console.log(pdf.link)
        }

        res.status(200).send(pdfs)
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}

export async function deletePdf(req, res) {
    try {
        // Deletando do bd
        await Pdf.findByIdAndDelete(req.params.idPdf)

        // Nome do arquivo a ser deletado do minio é o id do bd
        await deleteFile(req.params.idPdf)

        res.status(200).send()
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}
