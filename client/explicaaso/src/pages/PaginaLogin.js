import InputComponent from "../components/Login/InputComponent/InputComponent";
import styled from 'styled-components';
import axios from "axios"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const ContainerPag = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginContainer = styled.form`
  display: flex;
  background-color: #003466;
  width: ${({$isMobile}) => ($isMobile ? '80%' : '500px')};
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  margin: 70px 0 50px 0;
`

const LoginTitulo = styled.h1`
  color: white;
  font-size: 36px;
`

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

const Submit = styled.button`
  width: 40%;
  border: none;
  border-radius: 8px;
  background-color: #FFCC00;
  font-size: 28px;
  font-weight: 600;
  color: #003466;
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
  const [feedbackErro, setFeedbackErro] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    // Aqui prevenimos o comportamento padrão do navegador ao acontecimento do evento:
    event.preventDefault();
    setFeedbackErro('')

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

      if(response.status === 200) {
        setEmail('');
        setSenha('');

        const token = response.data.token;
        const materiaProf = response.data.materiaProf;

        // Armazena o token no localStorage:
        localStorage.setItem('token', token);
        localStorage.setItem('materiaProf', materiaProf);
        window.dispatchEvent(new Event("storage"));

        const tipoUsuario = jwtDecode(token).tipoUsuario;

        // Redireciona o usuário com base no tipo de usuário
        switch (tipoUsuario) {
          case 'aluno':
            navigate('/pagina-aluno');
            break;
          case 'administrador':
            navigate('/pagina-administrador');
            break;
          case 'professor':
            navigate('/pagina-aluno');
            break;
          default:
            console.error('Tipo de usuário inválido');
            break;
        }
      }
    } catch(error) {
      console.log('Error submitting form:', error);
      setFeedbackErro(error.response.data.message);
    }
  }

  return (
    <ContainerPag>
      <LoginContainer $isMobile={props.isMobile} onSubmit={handleSubmit}>
        <LoginTitulo>Log in</LoginTitulo>
        <InputComponent label='Email' type='email' id='email' value={email} onChange={(event) => setEmail(event.target.value)} required />
        <InputComponent label='Senha' type='password' id='senha' value={senha} onChange={(event) => setSenha(event.target.value)} required />
        {feedbackErro && <MensagemErro>{feedbackErro}</MensagemErro>}
        <Submit type='submit'>
          Confirmar
        </Submit>
      </LoginContainer>
    </ContainerPag>
  );
}

export default PaginaLogin;