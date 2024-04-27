import imagemFundo from '../../../images/background/fundoEESC.png';
import LogoExpliCaaso from '../../Head/LogoExpliCaaso';
import styled from 'styled-components';


const ApresentacaoContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`

const Fundo = styled.div`
  position: absolute;
  margin: 2px 0 0 0;
  top: 95px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${imagemFundo});
  background-size: cover;
  filter: blur(4px);
  opacity: 0.7;
`

const Titulos = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`

const Cursinho = styled.h1`
  color: #FFCC00; 
  font-size: 65px;
  margin-bottom: 2px;
`

const Explicaaso = styled.h1`
  color: white;
  font-size: 70px;
  margin-top: 2px;
`


function Apresentacao() {
  return (
    <ApresentacaoContainer>
      <Fundo></Fundo>
      <Titulos>
        <Cursinho>Cursinho Popular</Cursinho>
        <Explicaaso>ExpliCaaso</Explicaaso>
      </Titulos>
      <LogoExpliCaaso size='180px'/>
    </ApresentacaoContainer>
  );
}

export default Apresentacao;