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
  return (
    <LoginButtonContainer>
      <p>Log in</p>
    </LoginButtonContainer>
  );
}

export default LoginButton;