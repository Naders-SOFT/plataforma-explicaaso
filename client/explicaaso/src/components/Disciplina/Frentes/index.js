import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import SideBar from '../../Aluno/SideBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IoMdTrash } from "react-icons/io";
import { MdLibraryAdd } from "react-icons/md";

import imgPerfil from '../../../images/logos/perfil.jpg';

const ContainerFrentes = styled.div` // Novo nome: ContainerFrentes
  display: grid;
  grid-template-columns: ${({$isMobile}) => ($isMobile ? '1fr%' : '250px 1fr')};
  width: 100%;
  background-color: #f0f0f5;
  grid-template-rows: ${({$isMobile}) => ($isMobile ? 'auto 1fr%' : '250px 1fr')};
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const StyledButton = styled.button`
  width: 100%;
  max-width: 300px;
  margin: 10px;
  padding: 15px;
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
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.2);
  }
`;

const StyledDeleteButton = styled.button`
  background-color: transparent;
  border: none;
  color: #dc3545;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 8px;
  border-radius: 50%;

  &:hover {
    color: #c82333;
  }

  svg {
    font-size: 20px;
  }
`;

const StyledH1 = styled.h1`
  color: #3a3a3a;
  font-family: 'Raleway',Sans-serif;
  margin-bottom: 20px;
`;

const StyledItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    max-width: 200px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NomeFrente = styled.h2`
  font-size: 1.2em;
  font-family: 'Inter', sans-serif;
  margin-top: 10px;
`;

const botoes = [
  { titulo: 'Matérias', link: '/pagina-aluno' },
  { titulo: 'Provas', link: '/pagina-provas' }
];

const infoAdicionar = {
  nomeFrente: 'Adicionar frente',
  imgFrente: <MdLibraryAdd size="50%" />
};

const Frentes = (props) => {
  const mat = useParams();
  const [materia, setMateria] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3003/materias/listMat/${mat.materias}`)
      .then(response => {
        setMateria(response.data);
      })
      .catch(err => {
        console.error(err.message);
      });
  }, [mat.materias]);

  const handleDelete = (nomeFrente) => {
    console.log(`Excluindo frente: ${nomeFrente}`);
  };

  const FrenteButton = ({ frente }) => {
    const pag = frente.nomeFrente === 'Adicionar frente'
      ? '/pagina-cadastro-frentes/'
      : '/pagina-aluno/';

      return (
        <StyledButton key={frente.nomeFrente}>
          <StyledLink to={pag + mat.materias + '/' + frente.nomeFrente}>
            <Card>
              {typeof frente.imgFrente === 'string' ? (
                <img src={frente.imgFrente} alt={frente.nomeFrente} />
              ) : (
                frente.imgFrente // Renderiza o ícone se for um elemento React
              )}
              <NomeFrente>{frente.nomeFrente}</NomeFrente>
            </Card>
          </StyledLink>
        {frente.nomeFrente !== 'Adicionar frente' && (
          <StyledDeleteButton onClick={() => handleDelete(frente.nomeFrente)}>
            <IoMdTrash />
          </StyledDeleteButton>
        )}
      </StyledButton>
    );
  };

  const frentesBotoes = materia
    .flatMap((materiaItem) => materiaItem.frentes.map((frente) => (
      <FrenteButton key={frente.nomeFrente} frente={frente} />
    )));

  const botaoAdicionar = <FrenteButton key="adicionar" frente={infoAdicionar} />;

  return (
    <ContainerFrentes>
      <SideBar isMobile={props.isMobile} botoes={botoes} imgPerfil={imgPerfil} />
      <div> 
        <StyledContainer>
          <StyledH1>Frentes</StyledH1>
          <StyledItemContainer>
            {frentesBotoes}
            {botaoAdicionar}
          </StyledItemContainer>
        </StyledContainer>
      </div>
    </ContainerFrentes>
  );
};

export default Frentes;
