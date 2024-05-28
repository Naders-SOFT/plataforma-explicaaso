import { Router } from 'express';
import { signupUser, listUsers, listUser, updateUser, deleteUser } from '../controllers/user.controller.js';

// Instancia o roteador:
const router = Router();

router.post('/signup', signupUser);

router.get('/list', listUsers);

router.get('/list/:idUser', listUser);

router.patch('/update/:idUser', updateUser);

router.delete('/delete/:idUser', deleteUser);

export default router; 