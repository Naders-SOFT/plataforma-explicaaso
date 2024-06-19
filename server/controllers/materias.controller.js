import Materia from "../models/materias.models.js";

export async function createMateria(req, res) {
    try {
        const materiaNova = new Materia({
            nome: req.body.nome,
            frentes: req.body.frentes
        })

        await materiaNova.save()

        res.status(201).send()
    }
    catch(err) {
        console.error('Error creating post:', err);
        res.status(500).send({ 
            error: 'Failed to upload file',
        });
    }
}   

export async function listMaterias(req, res) {
    try {
        const materias = await Materia.find({})
        res.status(200).send(materias)
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}

export async function listMateriasByName(req, res) {
    try {
        const materias = await Materia.find({materia: req.params.materia})
        res.status(200).send(materias)
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}

export async function listFrentes(req, res) {
    try {
        const materias = await Materia.find({})
        res.status(200).send(materias.frentes)
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}

export async function listFrentesByMateria(req, res) {
    try {
        const materias = await Materia.find({materia: req.params.materia})
        res.status(200).send(materias.frentes)
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}