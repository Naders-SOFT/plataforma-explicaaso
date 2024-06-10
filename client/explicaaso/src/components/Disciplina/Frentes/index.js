import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import gramatica from '../../../images/frentes/gra.jpeg';
import literatura from '../../../images/frentes/lit.jpeg';
import interpretacao from '../../../images/frentes/int.jpeg';
import ingles from '../../../images/frentes/ing.jpeg';
import redacao from '../../../images/frentes/red.jpeg';
import his1 from '../../../images/frentes/his1.jpeg';
import his2 from '../../../images/frentes/his2.jpeg';
import geo1 from '../../../images/frentes/geo1.jpeg';
import geo2 from '../../../images/frentes/geo2.jpeg';
import fil from '../../../images/frentes/fil.jpeg';
import soc from '../../../images/frentes/soc.jpeg';
import bio1 from '../../../images/frentes/bio1.jpeg';
import bio2 from '../../../images/frentes/bio2.jpeg';
import bio3 from '../../../images/frentes/bio3.jpeg';
import fis1 from '../../../images/frentes/fis1.jpeg';
import fis2 from '../../../images/frentes/fis2.jpeg';
import fis3 from '../../../images/frentes/fis3.jpeg';
import qui1 from '../../../images/frentes/qui1.jpeg';
import qui2 from '../../../images/frentes/qui2.jpeg';
import qui3 from '../../../images/frentes/qui3.jpeg';
import mat1 from '../../../images/frentes/mat1.jpeg';
import mat2 from '../../../images/frentes/mat2.jpeg';
import mat3 from '../../../images/frentes/mat3.jpeg';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledButton = styled.button`
  background-color: darkcyan;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #002549;
  }
`;

const StyledH1 = styled.h1`
  color: #FF6600;
`;

const StyledItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledContentContainer = styled.div`
  display: flex;
  align-items: center;

  /* Add styles for image */
  & > img {
    width: 180px;
    height: 180px;
    margin-right: 10px;
    border-radius: 50%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: inline-block;
  margin: 0 10px;
  transition: color 0.3s ease;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
`;

const frentes = [
    { name: 'Gramática', image: gramatica, materia: 'Gramática'},
    { name: 'Literatura', image: literatura , materia: 'Literatura'},
    { name: 'Interpretação', image: interpretacao, materia: 'Gramática' },
    { name: 'Inglês', image: ingles , materia: 'Gramática'},
    { name: 'Redação', image: redacao, materia: 'Gramática' },
    { name: 'História do Brasil', image: his1, materia: 'História' },
    { name: 'História Geral', image: his2 , materia: 'História'},
    { name: 'Geografia do Brasil', image: geo1 , materia: 'Geografia'},
    { name: 'Geografia Geral', image: geo2, materia: 'Geografia' },
    { name: 'Filosofia', image: fil, materia: 'Filosofia'  },
    { name: 'Sociologia', image: soc, materia: 'Sociologia' },
    { name: 'Biologia1', image: bio1, materia: 'Biologia' },
    { name: 'Biologia2', image: bio2, materia: 'Biologia' },
    { name: 'Biologia3', image: bio3, materia: 'Biologia' },
    { name: 'Física1', image: fis1, materia: 'Física' },
    { name: 'Física2', image: fis2, materia: 'Física' },
    { name: 'Física3', image: fis3, materia: 'Física' },
    { name: 'Química1', image: qui1, materia: 'Química' },
    { name: 'Química2', image: qui2, materia: 'Química' },
    { name: 'Química3', image: qui3, materia: 'Química' },
    { name: 'Matemática1', image: mat1, materia: 'Matemática' },
    { name: 'Matemática2', image: mat2, materia: 'Matemática' },
    { name: 'Matemática3', image: mat3, materia: 'Matemática' },
];

const FrenteButton = ({ frente }) => {
  return (
    <StyledButton>
      <StyledContentContainer>
        <StyledLink to={`/pagina-aluno/${frente.materia}/${frente.name}`}>
            <img src={frente.image} alt={frente.name} />
            {frente.name}
        </StyledLink>
      </StyledContentContainer>
    </StyledButton>
  );
};

const Frentes = () => {
  const mat = useParams()
  const frentesBotoes = frentes
    .filter(frente => frente.materia === mat.materias)
    .map((frente, index) => (
          <FrenteButton key={index} frente={frente} />
    ))
    console.log(frentesBotoes)
  return (
    <StyledContainer>
      <StyledH1>Frentes</StyledH1>
      <StyledItemContainer>
        {frentesBotoes}
      </StyledItemContainer>
    </StyledContainer>
  );
};

export default Frentes;
