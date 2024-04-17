import Header from './components/Header';
//import Footer from './components/Footer';
import ContactForm from './components/ContactForm/ContactForm';
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
    <div className="App">
      <Header />
      <div className="container">
        <div className="content">
          <ContactForm />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
