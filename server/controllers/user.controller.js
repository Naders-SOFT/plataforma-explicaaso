import User from '../models/user.models.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Função de checagem de token (autenticação):
export function checkToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1];
  
  // Verifica se existe um token passado pela requisição:
  if(!token || token === 'null') {
    return res.status(401).json({ message: "Acesso negado" });
  }

  try {
    const secret = process.env.SECRET;
    
    jwt.verify(token, secret);

    next();
  } catch(error) {
    res.status(400).json({ message: "Seu acesso não é permitido para essa função" });
  }
}

// REGISTRO:
export async function signupUser(req, res) {
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

    // Salvamento dos dados do usuário:
    const userNovo = new User({
      email: req.body.email,
      senha: senhaHash,
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      tipo: req.body.tipo,
      materiaProf: req.body.materiaProf
    });

    // Salvamento do objeto no banco de dados:
    await userNovo.save();

    res.status(201);
    res.send({message: "Usuário cadastrado com sucesso"});
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

// LOGIN:
export async function signinUser(req, res) {
  try {
    // Checagem se usuário existe:
    const user = await User.findOne({ email: req.body.email });
    if(!user) {
      return res.status(404).send({ message: "Email incorreto" });
    }

    // Checagem de senha:
    const checkSenha = await bcrypt.compare(req.body.senha, user.senha);
    if(!checkSenha) {
      return res.status(422).json({ message: "Senha incorreta" });
    }

    const secret = process.env.SECRET;

    // Criação de Token:
    const token = jwt.sign({
      id: user._id,
      tipoUsuario: user.tipo,
      nome: user.nome,
      sobrenome: user.sobrenome,
      materiaProf: user.materiaProf
      sobrenome: user.sobrenome,
      materiaProf: user.materiaProf
    }, secret )

    // Resposta (envia o token):
    res.status(200);
    res.json(
      {
        message: "Autenticação realizada com sucesso", 
        token: token,
      });
    console.log("Login realizado");
    
  } catch(error) {
    if(error.name === 'ValidationError') {
      // Construimos uma mensagem de erro específica para cada campo inválido:
      const messages = Object.values(error.errors).map(err => err.message);
      res.status(400).json({ message: "Erro de validação", errors: messages });
    } else {
      res.status(409);
      res.send(error.message);
    }
  }
}

// GET DE TODOS OS USERS:
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

export async function listUsersByTipo(req, res) {
  try {
    const users = await User.find({ tipo: req.query.tipoUsuario });
    res.status(200);
    res.send(users);
  } catch(error) {
    res.status(404);
    res.send(error.message);
  }
}

export async function listUserById(req, res) {
  try {
    const user = await User.findById(req.params.idUser, '-senha');
    

    if(!user) {
      return res.status(404).send({ message: "Usuário não encontrado"})
    }

    res.status(200);
    res.send(user);
  } catch(error) {
    res.status(404);
    res.status(404);
    res.send(error.message);
  }
}

// GET DE UM USUÁRIO POR EMAIL:
export async function listUserByEmail(req, res) {
  try {
    const user = await User.find({ email: req.query.email });

    res.status(200);
    res.send(user);
  } catch(error) {
    res.status(404);
    res.status(404);
    res.send(error.message);
  }
}

// UPDATE DE UM USUÁRIO:
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

// DELEÇÃO DE UM USUÁRIO:
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

// DELEÇÃO DE TODOS OS USUÁRIOS:
export async function deleteAllUsers(req, res) {
  try {
    await User.deleteMany({});
    res.status(200);
    res.send("Todos os usuários deletados com sucesso");
  } catch(error) {
    res.status(500);
    res.send(error.message);
  }
}