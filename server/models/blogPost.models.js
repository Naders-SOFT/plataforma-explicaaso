import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
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
    },
    imagem: {
        type: String
    }
}, {versionKey: false});

const blogPost = mongoose.model("blogPost", blogPostSchema);

export default blogPost;