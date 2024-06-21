import styled from 'styled-components';
import { NavLink as Link } from "react-router-dom";

const NavigationHeaderContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  padding: 0;
  margin: 0;
  width: 100%;
  justify-content: center;
`

const NavigationItem = styled(Link)`
  font-size: 18px;
  color: white;
  text-decoration: none;
  text-align: center;
  margin: 0 10px;
  padding: 2px 20px;
  display: inline-block;
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    background-color: #FFCC00;
    color: #003466;
    border-color: #FFCC00;
  }

  &.active {
    background-color: #FFCC00;
    color: #003466;
    border-color: #FFCC00;
  }
`;

function NavigationHeader(props) {
  const itensNavigation = props.itensNavigation;

  return (
    <NavigationHeaderContainer>
      {
        itensNavigation.map( (item) => (
          <NavigationItem to={item.pagina} $activeStyle key={item.id}><p>{item.texto}</p></NavigationItem>
        ))
      }
    </NavigationHeaderContainer>
  );
}

export default NavigationHeader;
