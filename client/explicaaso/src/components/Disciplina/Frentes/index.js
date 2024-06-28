import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import SideBar from '../../Aluno/SideBar';
import { useEffect, useState, useContext } from 'react';
import { IoMdTrash } from "react-icons/io";
import imgPerfil from '../../../images/logos/perfil.jpg';
import imgAdc from '../../../images/misc/add-button-svgrepo-com.svg'
import { AuthContext } from '../../../App';
import { jwtDecode } from 'jwt-decode';

// estiliza o container das frentes
const ContainerFrentes = styled.div`
  display: ${({$isMobile}) => ($isMobile ? 'flex' : 'grid')};
  grid-template-columns: auto 1fr;
  width: 100%;
  height: 100%;
  background-color: #f0f0f5;
  flex-direction: ${({$isMobile}) => ($isMobile ? 'column' : '')};
  min-height: 100vh;
`;

// estiliza a área de conteúdo
const ContentArea = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;
`;

// estiliza o container
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

// estiliza o botão
const StyledButton = styled.button`
  width: 100%;
  margin: 20px 0;
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

// estiliza o botão de delete
const StyledDeleteButton = styled.button`
  background-color: white;
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

// estiliza o título h1
const StyledH1 = styled.h1`
  color: #3a3a3a;
  font-family: 'Raleway',Sans-serif;
  margin-bottom: 20px;
`;

// estiliza o link
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 300px; 
    height: 300px; 
    object-fit: cover; 
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
`;

// estiliza o card
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; 
`;

// estiliza o nome da frente
const NomeFrente = styled.h2`
  font-size: 1.2em;
  font-family: 'Inter', sans-serif;
  margin-top: 10px;
`;

// botões de navegação
const botoes = [
  { titulo: 'Matérias', link: '/pagina-aluno' },
  { titulo: 'Provas', link: '/pagina-provas' }
];

// informações para adicionar nova frente
const infoAdicionar = {
  nomeFrente: 'Adicionar frente',
  imgFrente: imgAdc
}

// estiliza o container de confirmação
const ConfirmacaoContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #003466;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  color: white;
`;

// estiliza o título de confirmação
const ConfirmacaoTitulo = styled.h2`
  color: #ffcc00;
  margin-bottom: 10px;
`;

// estiliza os botões de confirmação
const ConfirmacaoBotoes = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

// estiliza o botão de confirmação
const BotaoConfirmacao = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  color: ${props => !props.cancelar ? 'white' : '#003466'}; 
  background-color: ${props => !props.cancelar ? '#dc3545' : '#ffcc00'}; 

  &:hover {
    background-color: ${props => !props.cancelar ? '#c82333' : '#ffbf00'}; 
  }
`;

// componente principal das frentes
const Frentes = (props) => {
  const mat = useParams(); // obtém parâmetros da url
  const authAxios = useContext(AuthContext); // obtém contexto de autenticação
  const [materia, setMateria] = useState([]); // estado para armazenar matérias
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false); // estado para exibir confirmação de exclusão
  const [frenteParaDeletar, setFrenteParaDeletar] = useState(null); // estado para armazenar a frente a ser deletada
  const [frentesBotoes, setFrentesBotoes] = useState([]); // estado para armazenar os botões das frentes
  const [user, setUser] = useState(''); // estado para armazenar o tipo de usuário

  // obtém as matérias da API
  useEffect(() => {
    authAxios.get(`http://localhost:3003/materias/listMat/${mat.materias}`)
      .then(response => {
        setMateria(response.data);
      })
      .catch(err => {
        console.error(err.message);
      });
  }, [mat.materias]);

  // obtém o tipo de usuário do token armazenado localmente
  useEffect(() => {
    const token = localStorage.getItem('token');
    setUser(token ? jwtDecode(token).tipoUsuario : '');

    // escuta mudanças no localStorage para atualizar o estado do usuário
    window.addEventListener("storage", () => {
      const token = localStorage.getItem('token');
      setUser(token ? jwtDecode(token).tipoUsuario : '');
    });
  }, []);

  // lida com a exclusão de uma frente
  const handleDelete = (nomeFrente) => {
    setMostrarConfirmacao(true);
    setFrenteParaDeletar(nomeFrente);
  };

  // confirma a exclusão de uma frente
  const confirmarDelecao = () => {
    authAxios.delete(
        `http://localhost:3003/materias/deleteFrente/${mat.materias}/${frenteParaDeletar}`
      )
      .then(response => {
        console.log('Frente deleted successfully');
        setMateria(prevMateria => 
          prevMateria.map(materiaItem => ({
            ...materiaItem,
            frentes: materiaItem.frentes.filter(frente => frente.nomeFrente !== frenteParaDeletar)
          }))
        );
      })
      .catch(error => {
        console.error('Error deleting Frente:', error);
      })
      .finally(() => {
        setMostrarConfirmacao(false);
        setFrenteParaDeletar(null);
      });
  };

  // cancela a exclusão de uma frente
  const cancelarDelecao = () => {
    setMostrarConfirmacao(false);
    setFrenteParaDeletar(null);
  };

  // componente para renderizar um botão de frente
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
              frente.imgFrente
            )}
            <NomeFrente>{frente.nomeFrente}</NomeFrente>
          </Card>
        </StyledLink>
        {user === 'administrador' && frente.nomeFrente !== 'Adicionar frente' && (
          <StyledDeleteButton onClick={() => handleDelete(frente.nomeFrente)}>
            <IoMdTrash />
          </StyledDeleteButton>
        )}
      </StyledButton>
    );
  };

  // atualiza os botões de frentes com base nas matérias e no tipo de usuário
  useEffect(() => {
    const frentes = materia.flatMap((materiaItem) => materiaItem.frentes.map((frente) => (
      <FrenteButton key={frente.nomeFrente} frente={frente} />
    )));

    setFrentesBotoes(user === 'administrador'
      ? [...frentes, <FrenteButton key="adicionar" frente={infoAdicionar} />]
      : frentes
    );
  }, [materia, user]); 

  return (
    <ContainerFrentes $isMobile={props.isMobile}>
      <SideBar isMobile={props.isMobile} botoes={botoes} imgPerfil={imgPerfil} />
      <ContentArea> 
        {mostrarConfirmacao && (
          <ConfirmacaoContainer>
            <ConfirmacaoTitulo>Confirmar Exclusão</ConfirmacaoTitulo>
            <p>Tem certeza de que deseja excluir esta frente?</p>
            <ConfirmacaoBotoes>
              <BotaoConfirmacao cancelar onClick={cancelarDelecao}>
                Cancelar
              </BotaoConfirmacao>
              <BotaoConfirmacao onClick={confirmarDelecao}>
                Excluir
              </BotaoConfirmacao>
            </ConfirmacaoBotoes>
          </ConfirmacaoContainer>
        )}
        <StyledContainer>
          <StyledH1>Frentes</StyledH1>
          {frentesBotoes} 
        </StyledContainer>
      </ContentArea>
    </ContainerFrentes>
  );
};

export default Frentes;
