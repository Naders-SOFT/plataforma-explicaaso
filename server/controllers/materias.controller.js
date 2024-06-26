import Materia from "../models/materias.models.js";

export async function createMateria(req, res) {
    try {
        // criando item para salvar no bd
        const materiaNova = new Materia({
            nome: req.body.nome,
            frentes: req.body.frentes,
            imagem: req.body.imagem
        })

        // salvando no bd
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
        // encontrando todas as materias
        const materias = await Materia.find({})
        res.status(200).send(materias)
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}

export async function listMateriasByName(req, res) {
    try {
        // encontrando uma materia especifica
        const materias = await Materia.find({nome: req.params.materia})
        res.status(200).send(materias)
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}

export async function listFrentes(req, res) {
    try {
        // encontrando todas as frentes
        const materias = await Materia.find({})
        res.status(200).send(materias.map(materia => materia.frentes))
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}

export async function listFrentesByMateria(req, res) {
    try {
        // encontrando as frentes de uma materia especifica
        const materias = await Materia.find({nome: req.params.materia})
        res.status(200).send(materias.map(materia => materia.frentes))
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}

export async function updateMateria(req, res) {
    try {
        // alterando os dados de uma materia especifica
        const updatedMateria = await Materia.findOneAndUpdate({ nome: req.params.materia }, req.body);
        res.status(200).send(updatedMateria);
    }
    catch(err) {
        res.status(500).send(err.message);
    }
}

export async function createFrente(req, res) {
    try {
        // encontrando a materia e inserindo no array de frentes
        // a nova frente criada
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
        // deletando a materia especificada
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
        // encontrando a materia que possui a frente a ser deletada
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