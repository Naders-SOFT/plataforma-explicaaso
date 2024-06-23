import { Router } from "express"
import { createMateria, listMaterias, listMateriasByName, listFrentesByMateria, listFrentes, updateMateria, createFrente, deleteMateria, deleteFrente } from "../controllers/materias.controller.js"

const router = Router();

router.get('/listMat', listMaterias)

router.get('/listMat/:materia', listMateriasByName)

router.get('/listFrentes', listFrentes)

router.get('/listFrentes/:materia', listFrentesByMateria)

router.post('/create', createMateria)

router.put('/update/:materia', updateMateria)

router.post('/createFrente/:materia', createFrente)

router.delete('/delete/:materia', deleteMateria)

router.delete('/deleteFrente/:materia/:frente', deleteFrente)

export default router