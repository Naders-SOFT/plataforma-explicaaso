import mongoose from "mongoose";

const pdfSchema = new mongoose.Schema({
    id: { 
        type: mongoose.Schema.Types.ObjectId
    },
    titulo: {
        type: String, required: true
    },
    disciplina: {
        type: String, required: true
    },
    frente: {
        type: String, required: true
    },
    data: {
        type: String, required: true
    },
    link: {
        type: String
    },
    novoNome: {
        type: String
    }
}, { versionKey: false});

const pdf = mongoose.model('pdf', pdfSchema)

export default pdf