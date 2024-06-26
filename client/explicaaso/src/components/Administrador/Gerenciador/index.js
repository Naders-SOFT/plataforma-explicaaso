import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../App';

const Container = styled.div`
    width: 100%;
`

const DSKBotao = styled.button`
  background-color: #e6f7ff;
  cursor: pointer;
  color: darkcyan;
  border-radius: 1vw;
  transition: color 0.3s ease, background-color 0.3s ease;
  height: 3vw;
  font-size: 45%;
  border: 2px solid darkcyan;
  border-radius: 0.75rem;
  text-align: center;
  &:hover {
      opacity: 0.5;
  }
  
`

const CadastroListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  margin
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  align-items: center;
`

const CadastroItem = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(30px, auto);
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`

const CadastroFormat = styled.span`
  grid-column: 1;
  margin-right: 10px;
`

const CadastroSub = styled.span`
  grid-column: 2;
  font-weight: bold;
  margin-right: 10px;
`

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

  @media (max-width: 600px) {
    padding: 7px 14px;
    width: 45%;
    align-self: center;
  }
`;

// Define o componente PessoaList que recebe uma lista de itens (usuários)
const PessoaList = ({ items }) => {
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
  const [usuarioParaDeletar, setUsuarioParaDeletar] = useState(null);
  const authAxios = useContext(AuthContext);

  // Função para exibir a confirmação de deleção para o usuário selecionado
  const Confirmacao = (usuario) => {
    setUsuarioParaDeletar(usuario);
    setMostrarConfirmacao(true);
  };

  // Função para confirmar a deleção do usuário
  const confirmarDelecao = async () => {
    try {
      const response = await authAxios.delete(`http://localhost:3003/user/delete/${usuarioParaDeletar._id}`);
      if (response.status === 200) {
        console.log(response.data);
        window.location.reload(); // Recarrega a página após a deleção bem-sucedida
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Função para cancelar a deleção do usuário
  const cancelarDelecao = () => {
    setMostrarConfirmacao(false);
    setUsuarioParaDeletar(null);
  };

  // Renderiza a lista de usuários e o modal de confirmação de deleção
  return (
    <Container>
      <CadastroListStyled>
        {items.map((item, index) => (

          // Renderiza cada usuário como um item da lista
          <CadastroItem key={index} style={{ marginLeft: '5%' }}>
            <CadastroFormat>{item.nome} {item.sobrenome}</CadastroFormat>
            <CadastroSub style={{ gridColumn: '2 / 3' ,marginLeft: '30px' }}>{item.email}</CadastroSub>
            <DSKBotao style={{ gridColumn: '3 / 3', justifySelf: 'end' }} onClick={() => Confirmacao(item)}>Remover Usuário</DSKBotao>
          </CadastroItem>
          
        ))}
      </CadastroListStyled>

      {/* Link para a página de cadastro de novos usuários */}
      <Link to="/pagina-administrador/cadastro" style={{ textDecoration: 'none' }}>
        <DSKBotao style={{ marginTop: '10px', marginLeft: '5%' }}>Cadastrar Usuários</DSKBotao>
      </Link>

      {/* Modal de confirmação de deleção */}
      {mostrarConfirmacao && (
        <ConfirmacaoContainer>
          <ConfirmacaoTitulo>Confirmar Exclusão</ConfirmacaoTitulo>
          <p>Tem certeza de que deseja excluir {usuarioParaDeletar?.nome} {usuarioParaDeletar?.sobrenome}?</p>
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
    </Container>
  );
};
export default PessoaList;