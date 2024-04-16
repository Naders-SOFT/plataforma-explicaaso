import { useState } from 'react';
import styled from 'styled-components';

const MenuHambContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40px;
  width: 40px;
  margin: 0 30px;
`

const HamburguerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 60px;
  height: 50px;

  &:focus {
    outline: none;
  }

  div {
    width: 36px;
    height: 4px;
    border-radius: 2px;
    background-color: #FFCC00;
  }

  div:nth-child(1) {
    transform: ${({ active }) => (active ? 'translate(0, 10px)' : 'translate(0, 0)')};
    transition: transform 0.9s ease;
  }

  div:nth-child(2) {
    opacity: ${({ active }) => (active ? '0' : '1')};
    transition: opacity 0.9s ease;
  }

  div:nth-child(3) {
    transform: ${({ active }) => (active ? 'translate(0, -10px)' : 'translate(0, 0)')};
    transition: transform 0.9s ease;
  }
`


function Menu() {
  const [active, setMode] = useState(false);

  const toggleActive = () => {
    setMode(!active);
  }

  return (
    <MenuHambContainer>
      <HamburguerButton active={active} onClick={toggleActive}>
        <div/>
        <div/>
        <div/>
      </HamburguerButton>
    </MenuHambContainer>
  );
}

export default Menu;