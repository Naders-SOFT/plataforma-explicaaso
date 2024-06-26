import Materia from "../models/materias.models.js";

export async function createMateria(req, res) {
    try {
        const materiaNova = new Materia({
            nome: req.body.nome,
            frentes: req.body.frentes,
            imagem: req.body.imagem
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
        const materias = await Materia.find({nome: req.params.materia})
        res.status(200).send(materias)
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}

export async function listFrentes(req, res) {
    try {
        const materias = await Materia.find({})
        res.status(200).send(materias.map(materia => materia.frentes))
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}

export async function listFrentesByMateria(req, res) {
    try {
        const materias = await Materia.find({nome: req.params.materia})
        res.status(200).send(materias.map(materia => materia.frentes))
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}

export async function updateMateria(req, res) {
    try {
        const updatedMateria = await Materia.findOneAndUpdate({ nome: req.params.materia }, req.body);
        res.status(200).send(updatedMateria);
    }
    catch(err) {
        res.status(500).send(err.message);
    }
}

export async function createFrente(req, res) {
    try {
        const materia = await Materia.findOne({nome: req.params.materia})
        materia.frentes.push(req.body)
        materia.save()

        res.status(200).send(materia);
    }
    catch(err) {
        res.status(500).send(err.message);
    }
}

export async function deleteMateria(req, res) {
    try {
        const deletedMateria = await Materia.findOneAndDelete({ nome: req.params.materia });
        if (deletedMateria) {
            res.status(200).send({ message: 'Materia deletada com sucesso' });
        }
        else {
            res.status(404).send({ message: 'Materia não econtrada' });
        }
    }
    catch(err) {
        res.status(500).send(err.message);
    }
}

export async function deleteFrente(req, res) {
    try {
        const materia = await Materia.findOne({ nome: req.params.materia });

        // se encontrou a materia, vamos encontrar a frente
        if (materia) {
            // encontrando o indice da frente a ser deletada no array 
            const index = materia.frentes.findIndex(frente => frente.nomeFrente === req.params.frente);

            // se existir, remover
            if (index !== -1) {
                materia.frentes.splice(index, 1);
                await materia.save();
                res.status(200).send({ message: 'Frente deleted successfully' });
            } 
            else {
                res.status(404).send({ message: 'Frente not found' });
            }
        } 
        else {
            res.status(404).send({ message: 'Materia not found' });
        }
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}