import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { authAxios } from '../App';


const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0;
`;

const CadastroTitulo = styled.h1`
  color: #ffcc00;
  font-size: 36px;
`;

const Formulario = styled.form`
  background-color: #003466;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;

  h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
  }
`;

const inputStyles = css`
  width: 93.5%;
  padding: 12px;
  border: 1px solid #ddd;
  border: none;
  border-radius: 4px;
  color: white;
  margin-bottom: 20px;
  font-size: 16px;
  background-color: #265a9b;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  }
`;

const selectStyles = css`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border: none;
  border-radius: 4px;
  color: white;
  margin-bottom: 20px;
  font-size: 16px;
  background-color: #265a9b;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  }
`;

const Label = styled.label`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

const Input = styled.input`
  ${inputStyles}
`;

const Select = styled.select`
  ${selectStyles}
`;

const Botao = styled.button`
  width: 30%;
  border: none;
  border-radius: 8px;
  background-color: #ffcc00;
  font-size: 20px;
  font-weight: 600;
  color: #003466;
  height: 40px;
  margin: 0 0 40px 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    color: #ffefd5;
    cursor: pointer;
  }
`;

const MensagemErro = styled.p`
  color: #ffcc00;
  font-size: 14px;
  margin-top: -10px;
`;

const MensagemSucesso = styled.p`
  color: #ffcc00;
  font-size: 14px;
  margin-top: -10px;
`;

function PaginaCadastro(props) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('aluno');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [feedbackErro, setFeedbackErro] = useState('');
  const [feedbackSucesso, setFeedbackSucesso] = useState('');
  const [senhaSugerida, setSenhaSugerida] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedbackErro('');
    setFeedbackSucesso('');

    if (senha !== confirmarSenha) {
      setFeedbackErro('A senha e a confirmação de senha não coincidem');
      return;
    }

    try {
      const response = await authAxios.post(
        'http://localhost:3003/user/signup',
        {
          nome: nome,
          sobrenome: sobrenome,
          tipo: tipoUsuario,
          senha: senha,
          email: email,
          senhaConfirmada: confirmarSenha,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        setFeedbackSucesso('Cadastro realizado com sucesso');
        setNome('');
        setSobrenome('');
        setEmail('');
        setSenha('');
        setTipoUsuario('aluno');
        setConfirmarSenha('');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      setFeedbackErro(error.response.data.message);
    }
  };

  return (
    <FormContainer>
      <Formulario onSubmit={handleSubmit}>
        <CadastroTitulo>Cadastro de Usuário</CadastroTitulo>

        <div>
          <Label htmlFor="tipo">Tipo de Usuário:</Label>
          <Select id="tipo" value={tipoUsuario} onChange={(e) => setTipoUsuario(e.target.value)}>
            <option value="aluno">Aluno</option>
            <option value="professor">Professor</option>
            <option value="administrador">Administrador</option>
          </Select>
        </div>

        <div>
          <Label htmlFor="nome">Nome:</Label>
          <Input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>

        <div>
          <Label htmlFor="sobrenome">Sobrenome:</Label>
          <Input type="text" id="sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} required />
        </div>

        <div>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div>
          <Label htmlFor="senha">Senha:</Label>
          <Input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
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
          {feedbackErro && <MensagemErro>{feedbackErro}</MensagemErro>}
          {feedbackSucesso && <MensagemSucesso>{feedbackSucesso}</MensagemSucesso>}
        </div>

        <Botao type="submit">Cadastrar</Botao>
      </Formulario>
    </FormContainer>
  );
}

export default PaginaCadastro;
