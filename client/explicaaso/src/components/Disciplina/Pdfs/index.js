import styled from 'styled-components';
import ItemAviso from '../ItemAviso';
import TituloDisciplina from '../Titulo';
import ItemAdicionar from '../ItemAdicionar';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useContext } from 'react';
import { AuthContext } from '../../../App';

// estiliza o container da confirmação
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

// estiliza o título da confirmação
const ConfirmacaoTitulo = styled.h2`
  color: #ffcc00;
  margin-bottom: 10px;
`;

// estiliza os botões da confirmação
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

// estiliza o painel de avisos
const AvisosPainel = styled.ul`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0px;
    ${'' /* flex-direction: column; */}
    align-items: center;
    justify-content: flex-start;
    margin: 0px;
`;

// estiliza o container
const Container = styled.div`
    width: 100%;
`

function Avisos(props) {
  const [pdfs, setPdfs] = useState([]); // estado para armazenar os PDFs
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false); // estado para controlar a exibição da confirmação
  const [pdfParaDeletar, setPdfParaDeletar] = useState(null); // estado para armazenar o PDF a ser deletado
  const authAxios = useContext(AuthContext); // contexto para autenticação

  useEffect(() => {
    authAxios.get(`http://localhost:3003/pdf/list/${props.tituloFrente}`)
      .then(response => {
        setPdfs(response.data); // atualiza o estado com a lista de PDFs
      })
      .catch(err => {
        console.error(err.message); // loga o erro no console
      });
  }, [props.tituloFrente]);

  const handleDelete = (id) => {
    setMostrarConfirmacao(true); // exibe a confirmação
    setPdfParaDeletar(id); // define o PDF a ser deletado
  };

  const confirmarDelecao = () => {
    authAxios
      .delete(`http://localhost:3003/pdf/delete/${props.tituloFrente}/${pdfParaDeletar}`)
      .then(response => {
        console.log('PDF deleted successfully'); // loga a mensagem de sucesso
        setPdfs(pdfs.filter(pdf => pdf._id.toString() !== pdfParaDeletar)); // atualiza a lista de PDFs
      })
      .catch(error => {
        console.error('Error deleting PDF:', error); // loga o erro no console
      })
      .finally(() => {
        setMostrarConfirmacao(false); // oculta a confirmação
        setPdfParaDeletar(null); // reseta o PDF a ser deletado
      });
  };

  const cancelarDelecao = () => {
    setMostrarConfirmacao(false); // oculta a confirmação
    setPdfParaDeletar(null); // reseta o PDF a ser deletado
  };

  const listaPdfs = pdfs.map((pdf, index) => (
    <ItemAviso
      key={index}
      tituloAviso={pdf.titulo}
      link={pdf.link}
      idPdf={pdf._id.toString()}
      onDelete={handleDelete}
    ></ItemAviso>
  ));

  const [user, setUser] = useState(''); // estado para armazenar o tipo de usuário
  useEffect(() => {
    const token = localStorage.getItem('token');
    setUser(token ? jwtDecode(token).tipoUsuario : '');

    window.addEventListener("storage", () => {
      const token = localStorage.getItem('token');
      setUser(token ? jwtDecode(token).tipoUsuario : '');
    });
  }, [user]);

  return (
    <Container>
      {mostrarConfirmacao && (
        <ConfirmacaoContainer>
          <ConfirmacaoTitulo>Confirmar Exclusão</ConfirmacaoTitulo>
          <p>Tem certeza de que deseja excluir este PDF?</p>
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
      {props.isMobile && (
        <AvisosPainel>
          <TituloDisciplina tituloDisciplina={props.tituloFrente} />
          {user !== 'aluno' && (
            <ItemAdicionar
              tituloDisciplina={props.tituloDisciplina}
              tituloFrente={props.tituloFrente}
            />
          )}
          {listaPdfs}
        </AvisosPainel>
      )}
      {!props.isMobile && (
        <AvisosPainel>
          <TituloDisciplina tituloDisciplina={props.tituloFrente} />
          {user !== 'aluno' && (
            <ItemAdicionar
              tituloDisciplina={props.tituloDisciplina}
              tituloFrente={props.tituloFrente}
            />
          )}
          {listaPdfs}
        </AvisosPainel>
      )}
    </Container>
  );
}

export default Avisos;
