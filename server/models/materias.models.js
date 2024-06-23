import mongoose from "mongoose";

const materiaSchema = new mongoose.Schema({
    id: { 
        type: mongoose.Schema.Types.ObjectId
    },
    nome : {
        type: String
    },
    imagem: {
        type: String
    },
    frentes: {
        type: [{
            nomeFrente: String,
            imgFrente: String
        }]
    },
}, { versionKey: false});

const materia = mongoose.model('materia', materiaSchema)

export default materia