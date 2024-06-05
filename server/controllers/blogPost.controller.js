import { uploadFile, getObjectSignedUrl, deleteFile } from '../s3.js'
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
        // await uploadFile(req.file.buffer, 
        //                 pdfNovo._id.toString(), 
        //                 req.file.mimetype);

        // res.status(201).send();
    }
    catch (error) {
        console.error('Error creating post:', error);
        res.status(500).send({ 
            error: 'Failed to upload file',
        });
    }
}


export async function listblogPosts(req, res) {
    try {
      const posts = await blogPost.find({});
  
      res.status(200);
      res.send(posts);
    } catch(error) {
      res.status(500);
      res.send(error.message);
    }
}

export async function updateblogPost(req, res) {
    try {
        await blogPost.findByIdAndUpdate(req.params.idblogPost, req.body);

        res.status(200);
        res.send("Postagem do blog modificada com sucesso");
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

export async function deleteblogPost(req, res) {
    try {
      await blogPost.findByIdAndDelete(req.params.idblogPost);
  
      res.status(200);
      res.send("Postagem do blog deletada com sucesso");
    } catch(error) {
      res.status(500);
      res.send(error.message);
    }
}