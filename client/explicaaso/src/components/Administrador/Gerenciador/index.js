import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PaginaCadastro from '../../../pages/PaginaCadastro';
import axios from 'axios';
import { AuthContext } from '../../../App';
import { useContext } from 'react';

const ContainerAdmin = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: auto;
  grid-template-areas:
    "sidebar main"
    "footer footer";
  height: 100vh;
  justify-items: center; /* centraliza horizontalmente o conteúdo de cada célula */
`

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
  font-size: 50%;
  border: 2px solid darkcyan;
  border-radius: 0.75rem;
  text-align: center;
  &:hover {
      opacity: 0.5;
      cursor: pointer;
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
  justify: center 

  @media (max-width: 600px) {
    font-size: 10px;
  }
`

const CadastroSub = styled.span`
  grid-column: 2;
  font-weight: bold;
  margin-right: 10px;
`

const CadastroDate = styled.span`
  grid-column: 3;
  text-align: right;
`
// Define the ProfessorList component
const PessoaList = ({ items }) => {
  const authAxios = useContext(AuthContext);

  const handleButtonClickDelete = async (item) => {

    try {
        const response =  await authAxios.delete(`http://localhost:3003/user/delete/${item._id}`)
        if(response.status === 200){
           console.log(response.data);
           window.location.reload();
        }

      } catch (error) {
        console.error(error);
      }

    

};

  return (
    <Container>
      <CadastroListStyled>
        {items.map((item, index) => (
          <CadastroItem key={index} style={{ marginLeft: '5%' }}>
            <CadastroFormat>{item.nome} {item.sobrenome}</CadastroFormat>
            <CadastroSub style={{ marginRight: '30px' }}>{item.email}</CadastroSub>
            <DSKBotao style={{ gridColumn: '4 / 4', justifySelf: 'end' }} onClick={() => handleButtonClickDelete(item)}>Remover</DSKBotao>
          </CadastroItem>
        ))}
      </CadastroListStyled>
      <Link to="/pagina-administrador/cadastro" style={{ textDecoration: 'none' }}>
        <DSKBotao style={{ marginTop: '10px', marginLeft: '5%' }}>Cadastrar Usuários</DSKBotao>
      </Link>

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