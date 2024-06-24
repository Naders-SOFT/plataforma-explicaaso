import { Router } from 'express';
import { createnoticiaPost, 
    listnoticiaPosts,
    listnoticiaPostById,
    updatenoticiaPost,
    deletenoticiaPost } from '../controllers/noticiaPost.controller.js';

const router = Router();

router.post('/post', createnoticiaPost);

router.get('/list', listnoticiaPosts);

router.get('/list/:idnoticiaPost', listnoticiaPostById);

router.patch('/update/:idnoticiaPost', updatenoticiaPost);

router.delete('/delete/:idnoticiaPost', deletenoticiaPost);

export default router;