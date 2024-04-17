import styled from 'styled-components';


const LoginButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFCC00;
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 10px;
  margin: 0 0 0 0;
  color: #003466;
  font-size: 20px;
  font-weight: 600;
`


function LoginButton() {
  return (
    <LoginButtonContainer>
      <p>Log in</p>
    </LoginButtonContainer>
  );
}

export default LoginButton;