import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFCC00;
  width: 105px;
  height: 40px;
  border: none;
  border-radius: 10px;
  margin: 0 20px 0 20px;
  color: #003466;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  @media (min-width: 861px) and (max-width: 1050px) {
    font-size: 16px;
    width: 98px;
    height: 34px;
  }

  @media (max-width: 860px) {
    font-size: 14px;
    width: 94px;
    height: 32px;
  }
`


function LoginButton() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleClick = () => {
    if (token) {
      localStorage.removeItem('token');
      localStorage.removeItem('tipoUsuario');
      localStorage.removeItem('nome');
      localStorage.removeItem('sobrenome');
      navigate('/');
    } else {
      navigate('/login');
    }
  };

  return (
    <LoginButtonContainer onClick={handleClick}>
      <p>{token ? 'Log out' : 'Log in'}</p>
    </LoginButtonContainer>
  );
}

export default LoginButton;