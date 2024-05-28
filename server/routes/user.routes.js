import { Router } from 'express';
import signupUser from '../controllers/user.controller.js';

// Instancia o roteador:
const router = Router();

router.post('/signup', signupUser);

// router.post('/login', loginUser);

// router.delete('/delete/:idUser', deleteUser);

export default router; 