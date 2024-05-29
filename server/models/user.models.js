import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  email: {
    type: String, 
    required: true, 
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  senha: { type: String, required: true },
  nome: { type: String, required: true},
  sobrenome: { type: String, required: true },
  tipo: { type: String, default: 'aluno' }
}, { versionKey: false });

const user = mongoose.model("user", userSchema);

export default user;