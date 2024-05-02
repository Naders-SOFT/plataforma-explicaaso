import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Header from './components/Head/Header';
import Footer from './components/FooterComponents/Footer';
import { createGlobalStyle } from 'styled-components';

// ------- PÁGINA PRINCIPAL (LANDING PAGE) --------

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;
  }
`

// ESTILIZAÇÃO DO COMPONENTE
const AppContainer = styled.div`
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
      <GlobalStyle/>
      <Header isMobile={isMobile}/>
      <Footer isMobile={isMobile}/>
    </AppContainer>    
  );
}

export default App;
