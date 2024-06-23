import { Router } from "express"
import { createMateria, listMaterias, listMateriasByName, listFrentesByMateria, listFrentes, updateMateria } from "../controllers/materias.controller.js"

const router = Router();

router.get('/listMat', listMaterias)

router.get('/listMat/:materia', listMateriasByName)

router.get('/listFrentes', listFrentes)

router.get('/listFrentes/:materia', listFrentesByMateria)

router.post('/create', createMateria)

router.put('/update/:materia', updateMateria)

export default router