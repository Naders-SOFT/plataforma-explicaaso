import styled from "styled-components";

const ItemContainer = styled.li`
    width: 100%;
    display: flex;
    color: black;
    gap: 2%;
    justify-content: flex-start;
    align-items: center;
    padding: 1vw;
    background-color: rgba(0, 52, 102, 0.5);
    background-opacity: 0.5;
    border-radius: 1rem;
    margin: 1%;

    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`

const TituloAviso = styled.a`
    font-family: 'Inter';
    font-size: 150%;
`

const TipoAviso = styled.button`
    border-radius: 50%;
    background-color: yellow;
    width: 2vw;
    height: 2vw;
    border: none;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`

function ItemAviso(props) {
    return (
        <ItemContainer>
            <TipoAviso/>
            <TituloAviso href={props.link} target="_blank">{props.tituloAviso}</TituloAviso>
        </ItemContainer>
    );
}

export default ItemAviso;