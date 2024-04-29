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
  font-size: 24px;
  color: white;
  text-decoration: none;
  margin: 0 5%;
  white-space: nowrap; 
  cursor: pointer;

  @media (min-width: 861px) and (max-width: 1050px) {
    font-size: 22px;
    margin: 0 4%;
  }

  @media (max-width: 860px) {
    font-size: 18px;
    margin: 0 3%;
  }
`

function NavigationHeader(props) {
  const itensNavigation = props.itensNavigation;

  return (
    <NavigationHeaderContainer>
      {
        itensNavigation.map( (item) => (
          <NavigationItem to={item.pagina} activeStyle key={item.id}><p>{item.texto}</p></NavigationItem>
        ))
      }
    </NavigationHeaderContainer>
  );
}

export default NavigationHeader;