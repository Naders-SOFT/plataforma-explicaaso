import React from "react";
import styled from "styled-components";
import ItemExcluir from "../ItemExcluir";
import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from "react";
// importa o componente principal
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';

// importa os estilos
import '@react-pdf-viewer/core/lib/styles/index.css';

// estiliza o container do item
const ItemContainer = styled.li`
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 1.5rem;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

// estiliza o tipo de aviso
const TipoAviso = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffd700;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: black;
`;

// estiliza o cabeçalho
const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px; 
`;

// estiliza o título do aviso
const TituloAviso = styled.a`
  flex: 1;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: #003466;
  text-decoration: none;
  margin-left: 10px; 
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// estiliza o container do PDF
const PDFContainer = styled.div`
  width: 100%; 
  height: 300px;
  margin-top: 20px; 
  border: 2px solid darkcyan;
  border-radius: 12px; 
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

// estiliza a pré-visualização do PDF
const PDFPreview = styled.embed`
  width: 100%;
  height: 100%;
  border: none; 
`;

function ItemAviso(props) {
  const [user, setUser] = useState(''); // estado para armazenar o tipo de usuário
  useEffect(() => {
      const token = localStorage.getItem('token');
      setUser(token ? jwtDecode(token).tipoUsuario : '');
    
      // adiciona um event listener para atualizar o estado do usuário quando o token mudar
      window.addEventListener("storage", () => {
          const token = localStorage.getItem('token');
          setUser(token ? jwtDecode(token).tipoUsuario : '');
      })
  }, [user]);

  return (
    <ItemContainer>
      <Header> 
        <TipoAviso>!</TipoAviso>
        <TituloAviso href={props.link} target="_blank">
          {props.tituloAviso}
        </TituloAviso>
        {/* se o usuário não for aluno, exibe o botão de excluir */}
        {user !== "aluno" && <ItemExcluir onDelete={props.onDelete} idPdf={props.idPdf} />}
      </Header>
      <PDFContainer>
        {/* visualizador de PDF */}
        <Viewer fileUrl={props.link} defaultScale={SpecialZoomLevel.PageFit}/>
      </PDFContainer>
    </ItemContainer>
  );
}

export default ItemAviso;
