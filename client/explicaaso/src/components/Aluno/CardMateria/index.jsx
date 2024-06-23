import styled from 'styled-components';
import { IoMdTrash } from "react-icons/io";

const TituloMateria = styled.h1`
  font-size: 150%;
  line-height: 1.1em;
  color: #32325d;
  margin-bottom: 0.2em;
`;

const CardInfo = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
  line-height: 1.5em;
  height: 4rem;
`;

const CardFrentes = styled.p`
  font-size: ${props => props.fontSize || '85%'};
  text-align: inter-word;
`;

const Card = styled.li`
  width: ${props => props.isMobile ? '60%' : '100%'};
  height: auto;
  display: flex;
  flex-direction: column;
  color: black;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 6px;
  text-rendering: optimizeLegibility;
  box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
  transition: transform 0.5s;
  -webkit-transition: transform 0.5s;
  font-family: 'Raleway',Sans-serif;
  overflow: auto;
  font-size: 20px;
  position: relative;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }
`;

const ImgCard = styled.img`
  width: 100%;
  height: ${props => props.isMobile ? '50%' : '100%'};
  border-radius: 6px 6px 0px 0px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.91;
`;

const StyledDeleteButton = styled.button`
  background-color: white;
  border: none;
  color: #dc3545;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 6px;
  border-radius: 50%;

  &:hover {
    color: #c82333;
  }

  svg {
    font-size: 16px;
  }
`;

function CardMateria(props) {
  const f = props.frentes.map(frt => frt.nomeFrente).join(' | ');

  return (
    <Card isMobile={props.isMobile}>
      <ImgCard 
        src={`${props.imgSrc}`} 
        alt={props.materia} 
        isMobile={props.isMobile} 
      />
      <TituloMateria>{props.materia}</TituloMateria> 
      <CardInfo>
        <CardFrentes fontSize={props.fontesSize}>{f}</CardFrentes> {/* Passando o tamanho da fonte como prop */}
      </CardInfo>
      <StyledDeleteButton>
        <IoMdTrash />
      </StyledDeleteButton>
    </Card>
  );
}

export default CardMateria;
