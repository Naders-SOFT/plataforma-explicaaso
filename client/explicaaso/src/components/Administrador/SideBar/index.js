import styled from "styled-components";
import React, { useContext } from "react";
import { AuthContext } from "../../../App";
import Engrenagem from '../../../images/logos/engre.jpg';
import { Link } from 'react-router-dom';

const ContainerSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: ${({ $isMobile }) => ($isMobile ? "20%" : "100%")};
  min-width: 150px;
  height: 100vh; /* Ocupa toda a altura da viewport */
  background-color: #f0f0f0;
  color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  box-sizing: border-box; /* Inclui padding e border na largura e altura */
  padding: 2rem; /* Mantém o padding, mas agora o container ocupa toda a altura */

  @media (max-width: 768px) {
    height: auto; /* Define a altura automática para ocupar o conteúdo */
    padding: 1rem; /* Reduz o padding para telas menores */
  }
`;



const Botao = styled.button`
  cursor: pointer;
  color: darkcyan;
  transition: color 0.3s ease, background-color 0.3s ease;
  padding: 1rem 1.5rem;
  margin: 1rem;
  background-color: #e6f7ff;
  border: 2px solid darkcyan;
  border-radius: 0.75rem;
  text-align: center;

  &:hover {
    color: #002549;
    background-color: #cceeff;
  }
`;

const Botao_cadastrar = styled.button`
  cursor: pointer;
  color: white;
  transition: color 0.3s ease, background-color 0.3s ease;
  padding: 1rem 1.5rem;
  margin: 1rem;
  background-color: #FFCC00;
  border: none;
  border-radius: 0.75rem;
  text-align: center;
  font-weight: bold;  // Adiciona negrito ao texto

  &:hover {
    color: #002549;
    background-color: #FFB700;  // Cor de fundo amarelo mais forte ao passar o cursor
  }
`;

const ContainerBotao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;


const ImgPerfil = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-bottom: 1rem;
`;

const ConatainerPerfil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
`;

const Nome = styled.h1`
    color: #333;
    font-size: 1.5rem;
    margin: 0;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
`;

// Componente SideBar
function SideBar(props) {
    const authAxios = useContext(AuthContext);

    // Função para lidar com o clique dos botões, que faz uma requisição ao servidor para obter usuários por tipo
    const handleButtonClick = async (type) => {
        try {
            const response = await authAxios.get(`http://localhost:3003/user/listByTipo?tipoUsuario=${type}`);
            if (response.status === 200) {
                const usuarios = response.data; // Obtém a lista de usuários da resposta
                props.handleSelectedUsuarios(usuarios); // Atualiza a lista de usuários selecionados no componente pai
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            {props.isMobile ? (
                <ContainerSide>
                     <ContainerBotao>
                        {/* Botão para selecionar alunos ou professores */}
                        <Botao onClick={() => handleButtonClick('aluno')}>Alunos</Botao>
                        <Botao onClick={() => handleButtonClick('professor')}>Professores</Botao>
                        
                        <Link to="/pagina-administrador/cadastro" style={{ textDecoration: 'none' }}>
                            <Botao_cadastrar>Cadastrar</Botao_cadastrar>
                        </Link>
                     </ContainerBotao>
                    
                </ContainerSide>
            ) : (
                <ContainerSide>
                    <ConatainerPerfil>
                        {/* Aparece imagem de perfil */}
                        <ImgPerfil src={Engrenagem} alt="Perfil" />
                        <Nome >Admin</Nome>
                    </ConatainerPerfil>
                    <ContainerBotao>
                        {/* Botão para selecionar alunos ou professores */}
                        <Botao onClick={() => handleButtonClick('aluno')}>Alunos</Botao>
                        <Botao onClick={() => handleButtonClick('professor')}>Professores</Botao>

                        <Link to="/pagina-administrador/cadastro" style={{ textDecoration: 'none' }}>
                            <Botao_cadastrar>Cadastrar</Botao_cadastrar>
                        </Link>
                     </ContainerBotao>
                </ContainerSide>
            )}
        </Container>
    );
}

export default SideBar;
