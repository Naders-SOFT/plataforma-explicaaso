import { useState } from 'react';
import styled from 'styled-components';
import LoginButton from '../LoginButton';

const MenuHambContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  height: 40px;
  width: auto;
  padding: 0 20px;
  right: 0;
`

const HamburguerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 54px;
  height: 45px;

  &:focus {
    outline: none;
  }

  div {
    width: 34px;
    height: 4px;
    border-radius: 2px;
    background-color: #FFCC00;
  }

  div:nth-child(1) {
    transform: ${({ $active }) => ($active ? "translate(0, 10px)" : "translate(0, 0)")};
    transition: transform 0.9s ease;
  }

  div:nth-child(2) {
    opacity: ${({ $active }) => ($active ? "0.0" : "1.0")};
    transition: opacity 0.9s ease;
  }

  div:nth-child(3) {
    transform: ${({ $active }) => ($active ? "translate(0, -10px)" : "translate(0, 0)")};
    transition: transform 0.9s ease;
  }
`

const MenuList = styled.ul`
  background-color: #003466;
  list-style: none;
  width: auto;
  padding: 0 44px 30px 44px;
  position: absolute;
  top: 80%; 
  opacity: ${({ $active }) => ($active ? "1" : "0")};
  transform: translateY(${({ $active }) => ($active ? "0" : "-10px")});
  transition: opacity 0.9s ease, transform 0.9s ease; 
  z-index: 1;
  flex-direction: column;
  color: white;
  right: 0;
`

const NavigationItem = styled.li`
  display: flex;
  font-size: 20px;
  white-space: nowrap; 
`

function Menu(props) {
  const [active, setMode] = useState(false);

  const toggleisActive = () => {
    setMode(!active);
  }

  // criar ids
  const itensNavigation = props.itensNavigation;

  return (
    <MenuHambContainer>
      <HamburguerButton $active={active} onClick={toggleisActive}>
        <div/>
        <div/>
        <div/>
      </HamburguerButton>
      <MenuList $active={active}>
        {
          itensNavigation.map( item => (
            <NavigationItem key={item.id}><p>{item.texto}</p></NavigationItem>
          ))
        }
        <NavigationItem><LoginButton/></NavigationItem>
      </MenuList>
    </MenuHambContainer>
  );
}

export default Menu;