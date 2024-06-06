import InputComponent from "../components/Login/InputComponent/InputComponent";
import styled from 'styled-components';
import axios from "axios"
import { useState } from "react";

const ContainerPag = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginContainer = styled.form`
  display: flex;
  background-color: #003466;
  width: ${({$isMobile}) => ($isMobile ? '90%' : '690px')};
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  margin: 100px 0 50px 0;
`

const LoginTitulo = styled.h1`
  color: #FF6600;
  font-size: 36px;
`

const Submit = styled.button`
  width: 40%;
  border: none;
  border-radius: 8px;
  background-color: #FF6600;
  font-size: 28px;
  font-weight: 600;
  color: #994107;
  height: 50px;
  margin: 0 0 40px 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease; 

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    color: #FFEFD5;
    cursor: pointer;
  }
`


function PaginaLogin(props) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (event) => {
    // Aqui prevenimos o comportamento padrão do navegador ao acontecimento do evento:
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3003/user/login',
        {
          email: email,
          senha: senha
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if(response.ok) {
        setEmail('');
        setSenha('');
      }
    } catch(error) {
      console.error('Error submitting form:', error);
    }
  }

  return (
    <ContainerPag>
      <LoginContainer $isMobile={props.isMobile} onSubmit={handleSubmit}>
        <LoginTitulo>Log in</LoginTitulo>
        <InputComponent label='Email' type='email' id='email' value={email} onChange={(event) => setEmail(event.target.value)} required />
        <InputComponent label='Senha' type='password' id='senha' value={senha} onChange={(event) => setSenha(event.target.value)} required />
        <Submit type='submit'>
          Confirmar
        </Submit>
      </LoginContainer>
    </ContainerPag>
  );
}

export default PaginaLogin;