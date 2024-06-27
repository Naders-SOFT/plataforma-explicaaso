import styled from 'styled-components';
import CardMateria from '../CardMateria';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';
import imgAdicionar from '../../../images/misc/add-button-svgrepo-com.svg'
import { AuthContext } from '../../../App';
import { IoMdTrash } from "react-icons/io";

const Materias = styled.ul`
  display: ${({ $isMobile }) => ($isMobile ? 'flex' : 'grid')};
  flex-direction: ${({ $isMobile }) => ($isMobile ? 'column' : 'row')};
  flex-wrap: ${({ $isMobile }) => ($isMobile ? 'wrap' : 'nowrap')};
  grid-template-columns: ${({ $isMobile }) =>
    $isMobile ? 'none' : 'repeat(3, 1fr)'};
  gap: ${({ $isMobile }) => ($isMobile ? '0' : '2vw')};
  list-style-type: none;
  padding: 0px ${({ $isMobile }) => ($isMobile ? '0px' : '2%')} 0px 0px;
  align-items: ${({ $isMobile }) => ($isMobile ? 'center' : 'flex-start')};
  justify-content: center;
  margin: 0px;
  min-height: ${({ $isMobile }) => ($isMobile ? 'auto' : '100vh')};
`;

const Container = styled.div`
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  transition: color 0.3s ease;
  font-family: Inter;
  font-size: 120%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  position: relative; 
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
    cursor: pointer;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }

  svg {
    font-size: 16px;
  }
`;

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

const ConfirmacaoTitulo = styled.h2`
  color: #ffcc00;
  margin-bottom: 10px;
`;

const ConfirmacaoBotoes = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

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

function ContainerMateria(props) {
  const [user, setUser] = useState('');
  const [materiaLecionada, setMateriaLecionada] = useState('');
  const [materiaCard, setMateriaCard] = useState([]);
  const [materiaParaDeletar, setMateriaParaDeletar] = useState(null);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
  const [materias, setMaterias] = useState([]);
  const authAxios = useContext(AuthContext);

  // obtendo todas as materias do banco de dados
  useEffect(() => {
    authAxios
      .get('http://localhost:3003/materias/listMat')
      .then((response) => {
        setMaterias(response.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [materias]);

  // obtendo o tipo de usuario do token em local storage
  useEffect(() => {
    const token = localStorage.getItem('token');
    setUser(token ? jwtDecode(token).tipoUsuario : '');

    window.addEventListener('storage', () => {
      const token = localStorage.getItem('token');
      setUser(token ? jwtDecode(token).tipoUsuario : '');
    });
  }, []);

  // obtendo a materia lecionada de cada professor do token em local storage
  useEffect(() => {
    const token = localStorage.getItem('token');
    setMateriaLecionada(token ? jwtDecode(token).materiaProf : '');

    window.addEventListener('storage', () => {
      const token = localStorage.getItem('token');
      setMateriaLecionada(token ? jwtDecode(token).materiaProf : '');
    });
  }, []);

  // funcao para gerar o card de exclusao de materia
  const handleDelete = (nomeMateria) => {
    setMostrarConfirmacao(true);
    setMateriaParaDeletar(nomeMateria);
  };

  // funcao de deletar permanentemente o card da materia e suas frentes
  const confirmarDelecao = () => {
    authAxios
      .delete(`http://localhost:3003/materias/delete/${materiaParaDeletar}`)
      .then(() => {
        setMateriaCard(materiaCard.filter((mat) => mat.key !== materiaParaDeletar));
        console.log('Matéria deletada com sucesso');
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setMostrarConfirmacao(false);
        setMateriaParaDeletar(null);
      });
  };

  // funcao para desaparecer o card de confirmacao de exclusao da materia
  const cancelarDelecao = () => {
    setMostrarConfirmacao(false);
    setMateriaParaDeletar(null);
  };

  useEffect(() => {
    const renderMateriaCards = () => {

      // gerando o card para cada materia
      const cards = materias.map((mat) => (
        <CardWrapper key={mat.nome}>
          <StyledLink to={`/pagina-aluno/${mat.nome}`}>
            <CardMateria
              imgSrc={mat.imagem}
              materia={mat.nome}
              isMobile={props.isMobile}
              frentes={mat.frentes}
            />
          </StyledLink>

          {/* // gerando o botao de deletar materia para o usuario adm  */}
          {user === 'administrador' && ( 
           <StyledDeleteButton onClick={() => handleDelete(mat.nome)}>
              <IoMdTrash />
            </StyledDeleteButton> 
          )}
        </CardWrapper>
      ));
      return cards;
    };

    // renderizando todos os cards para alunos e adm
    if (user !== 'professor') {
      setMateriaCard(renderMateriaCards());
    } 
    // renderizando so o card da materia que o professor leciona
    else {
      setMateriaCard(
        renderMateriaCards().filter((card) => card.key === materiaLecionada)
      );
    }
  }, [materias, user]);

  const cardAdicionar = (
    <div key="adicionarMateria">
      <StyledLink to={'/pagina-cadastro-materia'}>
        <CardMateria
          imgSrc={imgAdicionar}
          materia='Adicionar matéria'
          isMobile={props.isMobile}
          frentes={['']}
        />
      </StyledLink>
    </div>
  );

  return (
    <Container>

      {/* mostrar card de exclusao de materia */}
      {mostrarConfirmacao && (
        <ConfirmacaoContainer>
          <ConfirmacaoTitulo>Confirmar Exclusão</ConfirmacaoTitulo>
          <p>Tem certeza de que deseja excluir esta matéria?</p>
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

      {/* mostrar todos os cards das materias */}
      <Materias $isMobile={props.isMobile}>
        {materiaCard}

        {/* somente administrador pode remover uma materia */}
        {user === 'administrador' && cardAdicionar}
      </Materias>
    </Container>
  );
}

export default ContainerMateria;
