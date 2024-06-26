import { uploadFile, getObjectSignedUrl, deleteFile } from '../s3.js'
import Pdf from '../models/pdf.models.js'

export const createPdf = async (req, res) => {

    try {
        console.log(req.body)
        // Criando um item para inserir no bd
        const pdfNovo = new Pdf({
            titulo: req.file.originalname,
            disciplina: req.body.disciplina,
            frente: req.body.frente,
            data: new Date().toLocaleDateString(),
            novoNome: req.body.novoNome
        })

        await pdfNovo.save() // salvando no bd

        // definindo o nome do bucket, pois separamos em bucket de provas
        // e bucket de materiais
        const bucketName = req.body.frente === 'Provas' ? 'provas' : 'pdfs'
        
        // Upload no minio
        // Utilizando id do mongoose como nome no minio para evitar
        // que sobrescricao de arquivos
        await uploadFile(req.file.buffer, 
                        pdfNovo._id.toString(), 
                        req.file.mimetype,
                        bucketName);

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

        // Buscando pdfs no bd
        const pdfs = await Pdf.find({})

        // Inserindo link assinado em cada objeto do banco de dados
        for (let pdf of pdfs) {
            pdf.link = await getObjectSignedUrl(pdf._id.toString())
            pdf.titulo = pdf.novoNome === "" ? pdf.titulo : pdf.novoNome
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
        // Nome do bucket depende se o arquivo é prova ou material
        const bucketName = req.params.frente === 'Provas' ? 'provas' : 'pdfs'
        deleteFile(req.params.idPdf, bucketName)

        res.status(200).send()
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}

export async function listPdfsFrente(req, res) {
    try {
        // Buscando pdfs no bd
        const pdfs = await Pdf.find({frente: req.params.frente})

        const bucketName = req.body.frente === 'Provas' ? 'provas' : 'pdfs'

        // Inserindo link assinado em cada objeto do banco de dados
        for (let pdf of pdfs) {
            pdf.link = await getObjectSignedUrl(pdf._id.toString(), bucketName)
            pdf.titulo = pdf.novoNome === "" ? pdf.titulo : pdf.novoNome
        }

        res.status(200).send(pdfs)
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}
