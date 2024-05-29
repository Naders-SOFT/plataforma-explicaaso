import { uploadFile } from '../s3.js'

export const createPost = async (req, res) => {

    try {

        // const file = req.file;
        // const caption = req.body.caption;
        console.log(req.file)

        await uploadFile(req.file.buffer, req.file.originalname, req.file.mimetype);

        // const post = await Post.create(imageName, caption);
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
