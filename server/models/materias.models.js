import mongoose from "mongoose";

const materiaSchema = new mongoose.Schema({
    id: { 
        type: mongoose.Schema.Types.ObjectId
    },
    nome : {
        type: String
    },
    frentes: {
        type: [String]
    }
    
}, { versionKey: false});

const materia = mongoose.model('materia', materiaSchema)

export default materia