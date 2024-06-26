import styled from "styled-components";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../../../App";


const DSKCONTAINERSIDE = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
    float: left;
    color: white;
    padding: 1vw;
`

const MOBLCONTAINERSIDE = styled.div`
    width: 100%;
`

const DSKBOTAO = styled.button`
    background-color: #e6f7ff;
    cursor: pointer;
    color: darkcyan;
    border-radius: 1vw;
    transition: color 0.3s ease, background-color 0.3s ease;
    height: 3vw;
    font-size: 1vw;
    border: 2px solid darkcyan;
    border-radius: 0.75rem;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`

const MOBLBOTAO = styled.button`
    background-color: #e6f7ff;
    cursor: pointer;
    color: darkcyan;
    border-radius: 1vw;
    transition: color 0.3s ease, background-color 0.3s ease;
    height: 5vw;
    width: 33%;
    font-size: 2vw;
    border: 2px solid darkcyan;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`

const DSKCONTAINERBOTAO = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: strech;
    justify-content: space-evenly;
    gap: 5vw;
    flex-direction: column;
    width: 100%;
`

const MOBLCONTAINERBOTAO = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 2vw;
`

const ImgPerfil = styled.img`
    width: 7vw;
    height: 7vw;
    border-radius: 50%;
`

const ConatainerPerfil = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 2vh;
    
`

const Nome = styled.h1`
    color: black;
    font-size: 2vw;
`

const Container = styled.div`
    width: 100%;
`

function SideBar(props) {
    const authAxios = useContext(AuthContext);

    // Função para lidar com o clique dos botões, que faz uma requisição ao servidor para obter usuários por tipo
    const handleButtonClick = async (type) => {
        try {
            const token = localStorage.getItem('token');
            
            // Faz uma requisição para obter a lista de usuários do tipo especificado
            const response =  await authAxios.get(`http://localhost:3003/user/listByTipo?tipoUsuario=${type}`)
            if(response.status === 200){
                const usuarios = response.data;  // Obtém a lista de usuários da resposta
                props.handleSelectedUsuarios(usuarios);  // Atualiza a lista de usuários selecionados no componente pai
            }

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            {
                props.isMobile &&
                <MOBLCONTAINERSIDE>
                    <MOBLCONTAINERBOTAO>
                        {/* Botão para selecionar alunos ou professores */}
                        <MOBLBOTAO onClick={() => handleButtonClick('aluno')}>Alunos</MOBLBOTAO>
                        <MOBLBOTAO onClick={() => handleButtonClick('professor')}>Professores</MOBLBOTAO>
                     </MOBLCONTAINERBOTAO>
                </MOBLCONTAINERSIDE>
            } 
            {
                !props.isMobile &&
                <DSKCONTAINERSIDE>
                    <ConatainerPerfil>
                        <ImgPerfil src={props.imgPerfil}></ImgPerfil>
                        <Nome>Nome</Nome>
                    </ConatainerPerfil>
                    <DSKCONTAINERBOTAO>
                        {/* Botão para selecionar alunos ou professores */}
                        <DSKBOTAO onClick={() => handleButtonClick('aluno')}>Alunos</DSKBOTAO>
                        <DSKBOTAO onClick={() => handleButtonClick('professor')}>Professores</DSKBOTAO>
                    </DSKCONTAINERBOTAO>
                </DSKCONTAINERSIDE>
            }   
        </Container>
    );
}

export default SideBar;