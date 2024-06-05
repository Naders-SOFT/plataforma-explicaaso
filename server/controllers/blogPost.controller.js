import blogPost from '../models/blogPost.models.js'

export const createBlogPost = async (req, res) => {

    try {
        const postNovo = new blogPost({
            titulo: req.body.titulo,
            texto: req.body.texto,
            autor: req.body.autor,
            data: new Date().toLocaleDateString(),
            imagem: req.body.imagem
        })

        await blogPost.save()
        
        // Upload da imagem no minio
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