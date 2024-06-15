import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AuthContext } from '../components/Auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import InputComponent from '../components/Login/InputComponent/InputComponent';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginContainer = styled.form`
  background-color: #003466;
  width: 90%;
  max-width: 400px; /* Reduzindo a largura máxima do formulário */
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  color: #ffcc00;
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
`;

const SubmitButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: #ffcc00;
  font-size: 18px;
  font-weight: 600;
  color: #003466;
  height: 50px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffe6b3;
  }
`;

const ErrorMessage = styled.p`
  color: #ffcc00;
  margin-top: 10px;
  text-align: center;
`;

const LoginPage = ({ isMobile }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3003/user/login', { email, senha }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        const { token, tipoUsuario } = response.data;
        setEmail('');
        setSenha('');
        login(token, tipoUsuario);
        navigate(`/${tipoUsuario === 'aluno' ? 'pagina-aluno' : tipoUsuario === 'administrador' ? 'pagina-administrador' : 'pagina-professor'}`);
      }
    } catch (error) {
      setError('Credenciais inválidas. Por favor, tente novamente.');
      console.error('Erro ao enviar formulário:', error);
    }
  };

  return (
    <Container>
      <LoginContainer onSubmit={handleSubmit}>
        <Title>Log in</Title>
        <InputComponent label="Email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <InputComponent label="Senha" type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        <SubmitButton type="submit">Confirmar</SubmitButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </LoginContainer>
    </Container>
  );
};

export default LoginPage;
