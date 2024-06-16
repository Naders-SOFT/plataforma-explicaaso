import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SideBar from '../../Aluno/SideBar';
import TituloDisciplina from '../Titulo';

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
  background-color: #f0f0f5;
`;

const StyledButton = styled.button`
  width: ${props => props.isMobile ? '80%' : '100%'};
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
  font-family: 'Inter', sans-serif;
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

const frentes = [
    { name: 'Gramática', image: gramatica, materia: 'Linguagens'},
    { name: 'Literatura', image: literatura , materia: 'Literatura'},
    { name: 'Interpretação', image: interpretacao, materia: 'Linguagens' },
    { name: 'Inglês', image: ingles , materia: 'Linguagens'},
    { name: 'Redação', image: redacao, materia: 'Linguagens' },
    { name: 'História do Brasil', image: his1, materia: 'História' },
    { name: 'História Geral', image: his2 , materia: 'História'},
    { name: 'Geografia do Brasil', image: geo1 , materia: 'Geografia'},
    { name: 'Geografia Geral', image: geo2, materia: 'Geografia' },
    { name: 'Filosofia', image: fil, materia: 'Filosofia'  },
    { name: 'Sociologia', image: soc, materia: 'Sociologia' },
    { name: 'Biologia 1', image: bio1, materia: 'Biologia' },
    { name: 'Biologia 2', image: bio2, materia: 'Biologia' },
    { name: 'Biologia 3', image: bio3, materia: 'Biologia' },
    { name: 'Física 1', image: fis1, materia: 'Física' },
    { name: 'Física 2', image: fis2, materia: 'Física' },
    { name: 'Física 3', image: fis3, materia: 'Física' },
    { name: 'Química 1', image: qui1, materia: 'Química' },
    { name: 'Química 2', image: qui2, materia: 'Química' },
    { name: 'Química 3', image: qui3, materia: 'Química' },
    { name: 'Matemática 1', image: mat1, materia: 'Matemática' },
    { name: 'Matemática 2', image: mat2, materia: 'Matemática' },
    { name: 'Matemática 3', image: mat3, materia: 'Matemática' },
];

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
    { titulo: 'Provas'},
    { titulo: 'Simulados'}
]

const FrenteButton = ({ frente }) => {
  return (
    <StyledButton>
        <StyledContentContainer>
            <StyledLink to={`/pagina-aluno/${frente.materia}/${frente.name}`}>
                <Card>
                    <img src={frente.image} alt={frente.name} />
                    <NomeFrente>{frente.name}</NomeFrente>
                </Card>
            </StyledLink>
        </StyledContentContainer>
    </StyledButton>
  );
};

const Frentes = (props) => {
  const mat = useParams()
  const frentesBotoes = frentes
        .filter(frente => frente.materia === mat.materias)
        .map((frente, index) => (
            <FrenteButton key={index} frente={frente} />
        ))

  return (
    <div>
        {props.isMobile ?
        <MOBLINFO>
                <SideBar isMobile={props.isMobile} botoes={botoes}/>
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
            <SideBar isMobile={props.isMobile} botoes={botoes}/>
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
