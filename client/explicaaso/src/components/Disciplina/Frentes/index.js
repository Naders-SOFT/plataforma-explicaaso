import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SideBar from '../../Aluno/SideBar';
import TituloDisciplina from '../Titulo';
import { useEffect, useState } from 'react';
import axios from 'axios';

import imgPerfil from '../../../images/logos/perfil.jpg'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f0f0f5;
`;

const StyledButton = styled.button`
  width: ${props => props.isMobile ? '70%' : '100%'};
  height: ${props => props.isMobile ? 'auto' : '100%'};
  display: flex;
  flex-direction: column;
  color: #333;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  font-family: 'Raleway', Sans-serif;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.2);
  }
`;

const StyledH1 = styled.h1`
  color: #3a3a3a;
  font-family: 'Raleway',Sans-serif;
  margin-bottom: 20px;
`;

const StyledItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const StyledContentContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  & > img {
    width: 120px;
    height: 120px;
    margin-right: 15px;
    border-radius: 12px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: inline-block;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
`

const NomeFrente = styled.h1`
    font-size: 140%;
    font-family: Inter;
`

const MOBLINFO = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
`

const DSKINFO = styled.div`
    display: grid;
    grid-template-columns: 1fr 8fr;
    flex-wrap: wrap;
    gap: 2%;
`

const botoes = [
    { titulo: 'Matérias'},
    { titulo: 'Provas'}
]

const Frentes = (props) => {
  const mat = useParams()
  const [materia, setMateria] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3003/materias/listMat/${mat.materias}`)
        .then(response => {
            setMateria(response.data)
        })
        .catch(err => {
            console.error(err.message)
        })
    }, [])

  const FrenteButton = ({ frente }) => {
    console.log(frente)
    return (
      <StyledButton>
          <StyledContentContainer>
              <StyledLink to={`/pagina-aluno/${mat.materia}/${frente.NomeFrente}`}>
                  <Card>
                      <img src={frente.imgFrente} alt={frente.nomeFrente} />
                      <NomeFrente>{frente.nomeFrente}</NomeFrente>
                  </Card>
              </StyledLink>
          </StyledContentContainer>
      </StyledButton>
    );
  };

  const frentesBotoes = materia
    .flatMap((materiaItem) => 
        materiaItem.frentes.map((frente, index) => (
            <FrenteButton key={index} frente={frente} />
        ))
    );

  return (
    <div>
        {props.isMobile ?
        <MOBLINFO>
                <SideBar isMobile={props.isMobile} botoes={botoes} imgPerfil={imgPerfil}/>
                <div>
                  <TituloDisciplina tituloDisciplina={mat.materias}/>
                  <StyledContainer>
                    <StyledH1>Frentes</StyledH1>
                    <StyledItemContainer>
                        {frentesBotoes}
                    </StyledItemContainer>
                  </StyledContainer>
                </div>
        </MOBLINFO>
        :
        <DSKINFO>
            <SideBar isMobile={props.isMobile} botoes={botoes} imgPerfil={imgPerfil}/>
            <div>
              <TituloDisciplina tituloDisciplina={mat.materias}/> 
              <StyledContainer>
                      <StyledH1>Frentes</StyledH1>
                      <StyledItemContainer>
                          {frentesBotoes}
                      </StyledItemContainer>
              </StyledContainer>
            </div>
        </DSKINFO>
        }
    </div>
  );
};

export default Frentes;
