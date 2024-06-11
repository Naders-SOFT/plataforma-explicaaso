import styled from 'styled-components';
import { useEffect, useState } from 'react';
import PaginaBlogPost from './pages/PaginaBlogPostagem';
import PaginaNoticias from './pages/PaginaNoticias';
import { BrowserRouter as Router } from 'react-router-dom';
import Roteador from './Routes'
import Header from './components/Head/Header';
import Footer from './components/FooterComponents/Footer';
import { createGlobalStyle } from 'styled-components';
import PaginaInicial from './pages/PaginaInicial';
import PaginaDisciplina from './pages/PaginaDisciplina';
import PaginaAluno from './pages/PaginaAluno';
import PaginaCadastro from './pages/PaginaCadastro';

import RichText from './components/EditorTexto/RichText';
import PaginaEditarPost from './pages/PaginaEditarPost'
import Frentes from './components/Disciplina/Frentes';

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
  margin: 0;
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
    // inteira.
    // Note que a estilização desse container é feita através 
    // de styled-components algumas linhas acima.
    <AppContainer>
      <GlobalStyle/>
      <Router>
        <Header isMobile={isMobile}/>
        <Roteador isMobile={isMobile}/>
        <PaginaEditarPost isMobile={isMobile}/> 
        <Footer isMobile={isMobile}/>
      </Router>
      {/* <PaginaBlogPost isMobile={isMobile}/> */}
      {/* <PaginaNoticias isMobile={isMobile}/>
      <PaginaDisciplina isMobile={isMobile}/> */}
      {/* <Header isMobile={isMobile}/> */}
      {/* <PaginaDisciplina isMobile={isMobile}/> */}
      {/* <PaginaCadastro></PaginaCadastro> */}
      {/* <PaginaAluno isMobile={isMobile}></PaginaAluno> */}
    </AppContainer>
  );
}

export default App;