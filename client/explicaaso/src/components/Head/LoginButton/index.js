import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFCC00;
  width: 105px;
  height: 36px;
  border: none;
  border-radius: 10px;
  margin: 0 20px 0 20px;
  color: #003466;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 1116px) {
    font-size: 14px;
    width: 94px;
    height: 32px;
  }

  &:hover {
    height: 38px;
  }
`


function LoginButton() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleClick = () => {
    if (token) {
      localStorage.removeItem('token');
      window.dispatchEvent(new Event("storage"));
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