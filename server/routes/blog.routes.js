import { Router } from 'express';
import { createBlogPost, 
    listblogPosts,
    listblogPostById,
    updateblogPost,
    deleteblogPost } from '../controllers/blogPost.controller.js';

const router = Router();

router.post('/post', createBlogPost);

router.get('/list', listblogPosts);

router.get('/list/:idBlogPost', listblogPostById);

router.patch('/update/:idBlogPost', updateblogPost);

router.delete('/delete/:idBlogPost', deleteblogPost);

export default router;