import { Router } from "express"
import { createMateria, listMaterias, listMateriasByName, listFrentesByMateria, listFrentes, updateMateria, createFrente, deleteMateria, deleteFrente } from "../controllers/materias.controller.js"

const router = Router();

// get de todas as materias 
router.get('/listMat', listMaterias)

// get de uma materia especifica
router.get('/listMat/:materia', listMateriasByName)

// get de todas as frentes
router.get('/listFrentes', listFrentes)

// get das frentes de uma materia especifica
router.get('/listFrentes/:materia', listFrentesByMateria)

// criar materia
router.post('/create', createMateria)

// update do nome ou imagem da materia
router.put('/update/:materia', updateMateria)

// criar uma frente em uma matera especifica
router.post('/createFrente/:materia', createFrente)

// deletar uma materia
router.delete('/delete/:materia', deleteMateria)

// deletar uma frente de uma materia especifica
router.delete('/deleteFrente/:materia/:frente', deleteFrente)

export default router