import { Router } from 'express';
import { createnoticiaPost, 
    listnoticiaPosts,
    listnoticiaPostById,
    updatenoticiaPost,
    deletenoticiaPost } from '../controllers/noticiaPost.controller.js';
import { checkToken } from '../controllers/user.controller.js';

const router = Router();

router.post('/post', checkToken, createnoticiaPost);

router.get('/list', listnoticiaPosts);

router.get('/list/:idnoticiaPost', listnoticiaPostById);

router.patch('/update/:idnoticiaPost', checkToken, updatenoticiaPost);

router.delete('/delete/:idnoticiaPost', checkToken, deletenoticiaPost);

export default router;