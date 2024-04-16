import BarrinhaTurquesa from './components/BarrinhaTurquesa';
import Header from './components/Header';
import styled from 'styled-components';

// ------- PÁGINA PRINCIPAL (LANDING PAGE) --------

// ESTILIZAÇÃO DO COMPONENTE
const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
`

// ESTRUTURA DO COMPONENTE
function App() {
  return (
    // Aqui temos um container global que inclui a página 
    // inteira, nele temos apenas o componente Header, por enquanto. 
    // Note que a estilização desse container é feita através 
    // de styled-components algumas linhas acima.
    <AppContainer>
      <Header/>
      <BarrinhaTurquesa/>
    </AppContainer>
  );
}

export default App;
