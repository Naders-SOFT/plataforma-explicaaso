import { Router } from "express"
import { createMateria, listMaterias, listMateriasByName, listFrentesByMateria, listFrentes } from "../controllers/materias.controller.js"

const router = Router();

router.get('/listMat', listMaterias)

router.get('/listMat/:nome', listMateriasByName)

router.get('/listFrentes', listFrentes)

router.get('/listFrentes/:materia', listFrentesByMateria)

router.post('/create', createMateria)

export default router