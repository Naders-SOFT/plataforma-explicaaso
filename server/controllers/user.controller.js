import User from '../models/user.models.js';
import bcrypt from 'bcrypt';

export async function signupUser (req, res) {
  console.log(req.body)
  try {
    // Validação de confirmação de senha:
    if(req.body.senha != req.body.senhaConfirmada) {
      return res.status(422).json({message: "As senhas não conferem"});
    }

    // Checagem se usuário já existe:
    const userExists = await User.findOne({ email: req.body.email });
    if(userExists) {
      return res.status(422).send({ message: "Email já utilizado" });
    }

    // Criação de senha:
    const salt = await bcrypt.genSalt(12);
    const senhaHash = await bcrypt.hash(req.body.senha, salt);

    const userNovo = new User({
      email: req.body.email,
      senha: senhaHash,
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      tipo: req.body.tipo
    });

    await userNovo.save();

    res.status(201);
    res.send({id: userNovo.id, message: "Usuário cadastrado com sucesso"});
  } catch(error) {
    if(error.name === 'ValidationError') {
      // Construimos uma mensagem de erro específica para cada campo inválido:
      const messages = Object.values(error.errors).map(err => err.message);
      res.status(400).send({ message: "Erro de validação", errors: messages });
    } else {
      res.status(409);
      res.send(error.message);
    }
  }
}

export async function listUsers(req, res) {
  try {
    const users = await User.find({});

    res.status(200);
    res.send(users);
  } catch(error) {
    res.status(500);
    res.send(error.message);
  }
}

export async function listUserById(req, res) {
  try {
    const user = await User.findById(req.params.idUser);

    res.status(200);
    res.send(user);
  } catch(error) {
    res.status(500);
    res.send(error.message);
  }
}

export async function listUserByEmail(req, res) {
  try {
    const user = await User.find({ email: req.query.email });

    res.status(200);
    res.send(user);
  } catch(error) {
    res.status(500);
    res.send(error.message);
  }
}

export async function updateUser(req, res) {
  try {
    await User.findByIdAndUpdate(req.params.idUser, req.body);

    res.status(200);
    res.send("Usuário modificado com sucesso");
  } catch(error) {
    if(error.name === 'ValidationError') {
      // Construimos uma mensagem de erro específica para cada campo inválido:
      const messages = Object.values(error.errors).map(err => err.message);
      res.status(400).send({ message: "Erro de validação", errors: messages });
    } else {
      res.status(409);
      res.send(error.message);
    }
  }
}

export async function deleteUser(req, res) {
  try {
    await User.findByIdAndDelete(req.params.idUser);

    res.status(200);
    res.send("Usuário deletado com sucesso");
  } catch(error) {
    res.status(500);
    res.send(error.message);
  }
}