import styled, { css } from "styled-components"
import React, { useState } from 'react'
import axios from "axios"

const ContainerPag = styled.div`
    width: 100%;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 10%;
`;


const Formulario = styled.form`
  background-color: #fff;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;
  background-color: #f5f5f5;

  h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
  }
`;

const inputStyles = css`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  ${inputStyles}
`;

const Select = styled.select`
  ${inputStyles}
`;

const Botao = styled.button`
  background-color: darkcyan;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #003466;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

function PaginaCadastro(props) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('aluno');
    const [confirmarSenha, setConfirmarSenha] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3003/user/signup', 
            {
                nome: nome,
                sobrenome: sobrenome,
                tipo: tipoUsuario,
                senha: senha,
                email: email,
                senhaConfirmada: confirmarSenha
            },
            {
                headers: {
                    'Content-Type': 'application/json' 
                },
            });

            if (response.ok) {
                setNome('');
                setSobrenome('');
                setEmail(''); 
                setSenha('')
                setTipoUsuario('')
                setConfirmarSenha('')
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
    <FormContainer>
      <Formulario onSubmit={handleSubmit}>
        <h2>Cadastro de Usuário</h2>

        <div>
          <Label htmlFor="tipo">Tipo de Usuário:</Label>
          <Select
            id="tipo"
            value={tipoUsuario}
            onChange={(e) => setTipoUsuario(e.target.value)}
          >
            <option value="aluno">Aluno</option>
            <option value="professor">Professor</option>
            <option value="administrador">Administrador</option>
          </Select>
        </div>

        <div>
          <Label htmlFor="nome">Nome:</Label>
          <Input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="sobrenome">Sobrenome:</Label>
          <Input
            type="text"
            id="sobrenome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="senha">Senha:</Label>
          <Input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="confirmar-senha">Confirmar Senha:</Label>
          <Input
            type="password"
            id="confirmar-senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />
        </div>

        <Botao type="submit">Cadastrar</Botao>
      </Formulario>
    </FormContainer>
  );
}

export default PaginaCadastro
