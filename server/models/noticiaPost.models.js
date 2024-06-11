import mongoose from "mongoose";

const noticiaPostSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    titulo: {
        type: String, required: true
    },
    texto: {
        type: String, required: true
    },
    autor: {
        type: String, required: true
    },
    data: {
        type: Date, required: true
    }
}, {versionKey: false});

const noticiaPost = mongoose.model("noticiaPost", noticiaPostSchema);

export default noticiaPost;