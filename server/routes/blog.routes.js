import { Router } from 'express';
import { createBlogPost, 
    listblogPosts, 
    updateblogPost,
    deleteblogPost } from '../controllers/blogPost.controller.js';

const router = Router();

router.post('/post', createBlogPost);

router.get('/list', listblogPosts);

router.patch('/update/:idBlogPost', updateblogPost);

router.delete('/delete/:idBlogPost', deleteblogPost);

export default router;