import Header from "../components/Head/Header";
import InputComponent from "../components/Login/InputComponent/InputComponent";
import styled from 'styled-components';

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
  return (
    <ContainerPag>
      <Header isMobile={props.isMobile}/>
      <LoginContainer $isMobile={props.isMobile}>
        <LoginTitulo>Log in</LoginTitulo>
        <InputComponent label='Email' type='email'/>
        <InputComponent label='Senha' type='password'/>
        <Submit>
          Confirmar
        </Submit>
      </LoginContainer>
    </ContainerPag>
  );
}

export default PaginaLogin;