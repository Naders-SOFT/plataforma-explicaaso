import { Router } from 'express';
import { checkToken, signupUser, signinUser, listUsers, listUserById, listUserByEmail, updateUser, deleteUser, deleteAllUsers } from '../controllers/user.controller.js';

// Instancia o roteador:
const router = Router();

router.post('/signup', checkToken, signupUser);

router.post('/login', signinUser);

router.get('/list', listUsers);

router.get('/list/:idUser', checkToken, listUserById);

router.get('/listByEmail', listUserByEmail);

router.patch('/update/:idUser', updateUser);

router.delete('/delete/:idUser', deleteUser);

router.delete('/deleteAll', deleteAllUsers);

export default router; 