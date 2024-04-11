import styled from 'styled-components';


const NavigationHeaderContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  padding: 0;
  margin: 0 3%;
`

const NavigationItem = styled.li`
  font-size: 24px;
  margin: 0 50px;
`

function NavigationHeader() {
  const itensNavigation = ['Início', 'Sobre nós', 'Contato', 'Notícias', 'Blog'];

  return (
    <NavigationHeaderContainer>
      {
        itensNavigation.map( (item) => (
          <NavigationItem><p>{item}</p></NavigationItem>
        ))
      }
    </NavigationHeaderContainer>
  );
}

export default NavigationHeader;