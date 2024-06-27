import { Router } from 'express';
import { createBlogPost, 
    listblogPosts,
    listblogPostById,
    updateblogPost,
    deleteblogPost } from '../controllers/blogPost.controller.js';
import { checkToken } from '../controllers/user.controller.js'

const router = Router();

router.post('/post', checkToken, createBlogPost);

router.get('/list', listblogPosts);

router.get('/list/:idBlogPost', listblogPostById);

router.patch('/update/:idBlogPost', checkToken, updateblogPost);

router.delete('/delete/:idBlogPost', checkToken, deleteblogPost);

export default router;