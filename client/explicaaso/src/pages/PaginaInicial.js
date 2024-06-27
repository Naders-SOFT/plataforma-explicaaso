import Apresentacao from "../components/Inicio/Apresentacao";
import styled from "styled-components";


const PaginaContainer= styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  // background-color: white;
  display: flex;
  flex-direction: column;
`

function PaginaInicial(props) {
  return (
    <PaginaContainer>
      <Apresentacao isMobile={props.isMobile}/>
    </PaginaContainer>
  );
}

export default PaginaInicial;