import styled from "styled-components";
import ItemExcluir from "../ItemExcluir";

const ItemContainer = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 12px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
`;

const TituloAviso = styled.a`
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    color: #333;
    text-decoration: none;
    margin-left: 15px;
    flex: 1;
`;

const TipoAviso = styled.div`
    border-radius: 50%;
    background-color: #ffcc00;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #333;
`;

function ItemAviso(props) {
    return (
        <ItemContainer>
            <TipoAviso>!</TipoAviso>
            <TituloAviso href={props.link} target="_blank">{props.tituloAviso}</TituloAviso>
            <ItemExcluir onDelete={props.onDelete} idPdf={props.idPdf} />
        </ItemContainer>
    );
}

export default ItemAviso;
