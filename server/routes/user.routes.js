import { Router } from 'express';
import { checkToken, signupUser, signinUser, listUsers, listUsersByTipo, listUserById, listUserByEmail, updateUser, deleteUser, deleteAllUsers } from '../controllers/user.controller.js';

// Instancia o roteador:
const router = Router();

// Cadastro de um usuário:
router.post('/signup', checkToken, signupUser);

// Login de um usuário:
router.post('/login', signinUser);

// Listagem de todos os usuários (independente do tipo):
router.get('/list', listUsers);

// Listagem de usuários de acordo com o tipo:
router.get('/listByTipo', checkToken, listUsersByTipo);

// Listagem de um usuário (por ID):
router.get('/list/:idUser', checkToken, listUserById);

// Listagem de um usuário (por email):
router.get('/listByEmail', checkToken, listUserByEmail);

// Update de um usuário (por ID):
router.patch('/update/:idUser', checkToken, updateUser);

// Deleção de um usuário (por ID):
router.delete('/delete/:idUser', deleteUser);

// Deleção de todos os usuários (independente do tipo):
router.delete('/deleteAll', checkToken, deleteAllUsers);

export default router; 