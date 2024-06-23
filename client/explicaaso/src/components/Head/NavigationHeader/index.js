import styled from 'styled-components';
import { NavLink as Link } from "react-router-dom";

const NavigationHeaderContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  padding: 0;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
`

const NavigationItem = styled(Link)`
  font-size: 18px;
  color: white;
  text-decoration: none;
  text-align: center;
  height: 40px;
  margin: 0 auto;
  padding: 2px 20px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;

  @media (max-width: 1116px) {
    padding: 0 5px;
  }

  &:hover {
    background-color: #FFCC00;
    color: #003466;
    border-color: #FFCC00;
    font-weight: 600;
  }

  &.active {
    background-color: #FFCC00;
    color: #003466;
    border-color: #FFCC00;
    font-weight: 600;
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
