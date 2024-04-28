import Header from './components/Head/Header';
import Apresentacao from './components/Inicio/Apresentacao';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import PaginaLogin from './pages/pagina-login';
import PaginaDisciplina from './pages/pagina-disciplina';

// ------- PÁGINA PRINCIPAL (LANDING PAGE) --------

// ESTILIZAÇÃO DO COMPONENTE
const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
`


// ESTRUTURA DO COMPONENTE
function App() {
  const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const resizeScreen = () => {
            setIsMobile(window.innerWidth <= 768);
        }

        resizeScreen();

        window.addEventListener('resize', resizeScreen); // atualiza o estado isMobile quando a tela é redimensionada

        return () => {
            window.removeEventListener('resize', resizeScreen); // remove o event listener ao desmontar o componente
        };
    }, [])

  return (
    // Aqui temos um container global que inclui a página 
    // inteira, nele temos apenas o componente Header, por enquanto. 
    // Note que a estilização desse container é feita através 
    // de styled-components algumas linhas acima.
    <AppContainer>
      {/* <Header isMobile={isMobile}/>
      <Apresentacao/> */}
      <PaginaDisciplina></PaginaDisciplina>
    </AppContainer>    
  );
}

export default App;
