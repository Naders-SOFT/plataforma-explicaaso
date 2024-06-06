import noticiaPost from '../models/noticiaPost.models.js'

export const createnoticiaPost = async (req, res) => {

    try {
        const postNovo = new noticiaPost({
            titulo: req.body.titulo,
            texto: req.body.texto,
            autor: req.body.autor,
            data: new Date().toLocaleDateString(),
        })

        await noticiaPost.save()
        
    }
    catch (error) {
        console.error('Error creating post:', error);
        res.status(500).send({ 
            error: 'Failed to upload file',
        });
    }
}


export async function listnoticiaPosts(req, res) {
    try {
      const posts = await noticiaPost.find({});
  
      res.status(200);
      res.send(posts);
    } catch(error) {
      res.status(500);
      res.send(error.message);
    }
}

export async function updatenoticiaPost(req, res) {
    try {
        await blogPost.findByIdAndUpdate(req.params.idnoticiaPost, req.body);

        res.status(200);
        res.send("Postagem de noticia modificada com sucesso");
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

export async function deletenoticiaPost(req, res) {
    try {
      await blogPost.findByIdAndDelete(req.params.idnoticiaPost);
  
      res.status(200);
      res.send("Postagem de noticia deletada com sucesso");
    } catch(error) {
      res.status(500);
      res.send(error.message);
    }
}