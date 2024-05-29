import User from '../models/user.models.js';

export async function signupUser (req, res) {
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
    res.send({id: userNovo.id, message: "Usuário cadastrado com sucesso"});
  } catch(error) {
    res.status(409);
    res.send(error.message);
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
    res.status(500);
    res.send(error.message);
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