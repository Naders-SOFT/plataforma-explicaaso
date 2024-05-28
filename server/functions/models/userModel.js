class User {
  constructor(id, nome, sobrenome, email, senha, tipo) {
    this.id = id;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.senha = senha;
    this.tipo = tipo;
  }

  toFirestore() {
    return {
      id: this.id,
      nome: this.nome,
      sobrenome: this.sobrenome,
      email: this.email,
      senha: this.senha,
      tipo: this.tipo
    };
  }

  static fromFirestore(doc) {
    const data = doc.data();
    return new User(doc.id, data.nome, data.sobrenome, data.email, data.senha, data.tipo);
  }
}

module.exports = User;