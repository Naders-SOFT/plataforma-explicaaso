import React from "react";
import styled from "styled-components";
import ItemExcluir from "../ItemExcluir";

const ItemContainer = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const TipoAviso = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffcc00;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #333;
`;

const TituloAviso = styled.a`
  flex: 1;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: #003466;
  text-decoration: none;
  margin-left: 10%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
`;

const PDFContainer = styled.div`
  width: 80%;
  max-height: 400px;
  overflow: hidden;
  margin-left: 10%;
`;

const PDFPreview = styled.embed`
  width: 100%;
  height: 300px;
  border: 1px solid #ddd;
`;

function ItemAviso(props) {
  const tipoUsr = localStorage.getItem("tipoUsuario");

  return (
    <ItemContainer>
      <TipoAviso>!</TipoAviso>
      <div style={{ flex: 1 }}>
        <TituloAviso href={props.link} target="_blank">
            {props.tituloAviso}
        </TituloAviso>
        <PDFContainer>
          <PDFPreview src={props.link} type="application/pdf" />
        </PDFContainer>
      </div>
      {tipoUsr !== "aluno" && <ItemExcluir onDelete={props.onDelete} idPdf={props.idPdf} />}
    </ItemContainer>
  );
}

export default ItemAviso;
