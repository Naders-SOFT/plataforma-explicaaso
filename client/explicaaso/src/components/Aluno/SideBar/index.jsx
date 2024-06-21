import styled from "styled-components";
import { Link } from "react-router-dom";

// Estilos comuns
const ContainerSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: ${({$isMobile}) => ($isMobile ? '20%' : '100%')};;
  min-width: 150px;
  padding: 2rem;
  background-color: #f0f0f0;
  color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;

const Botao = styled.button`
  cursor: pointer;
  color: darkcyan;
  transition: color 0.3s ease, background-color 0.3s ease;
  padding: 1rem 1.5rem;
  margin: 1rem;
  background-color: #e6f7ff;
  border: 2px solid darkcyan;
  border-radius: 0.75rem;
  text-align: center;

  &:hover {
    color: #002549;
    background-color: #cceeff;
  }
`;

const ContainerBotao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

// Estilos para elementos comuns
const ImgPerfil = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const ContainerPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Nome = styled.h1`
  color: #333;
  font-size: 1.5rem;
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
`;

function SideBar(props) {
  const listaBotoes = props.botoes?.map((botao, index) => (
    <Link to={`${botao.link}`}>
      <Botao key={index}>{botao.titulo}</Botao>
    </Link>
  ));

  return (
    <Container>
      <ContainerSide>
        {!props.isMobile && (
          <ContainerPerfil>
            <ImgPerfil src={props.imgPerfil} alt="Perfil" />
            <Nome>{props.nome}</Nome>
          </ContainerPerfil>
        )}
        <ContainerBotao>{listaBotoes}</ContainerBotao>
      </ContainerSide>
    </Container>
  );
}

export default SideBar;
