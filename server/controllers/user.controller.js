import User from '../models/user.models.js';

async function signupUser (req, res) {
  try {
    const userNovo = new User({
      email: req.body.email,
      senha: req.body.senha,
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      tipo: req.body.tipo
    });

    await userNovo.save();

    res.status(201);
    res.send("Usuário cadastrado com sucesso");
  } catch(error) {
    res.status(409);
    res.send(error.message);
  }
}

export default signupUser;