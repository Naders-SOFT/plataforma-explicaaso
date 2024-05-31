import styled from "styled-components";
import addImg from '../../../images/disciplina/add-add-plus-sign.svg'

const ItemContainer = styled.li`
    width: 100%;
    display: flex;
    color: black;
    gap: 2%;
    justify-content: center;
    align-items: center;
    padding: 1vw;
    background-color: rgba(0, 52, 102, 0.5);
    background-opacity: 0.5;
    border-radius: 1rem;
    margin: 1%;
`

const ImgAdd = styled.img`
    width: 4%;
    height: 4%;
`
function ItemAdicionar(props) {
    return (
        <ItemContainer>
            <ImgAdd src={addImg}/>
        </ItemContainer>
    );
}

export default ItemAdicionar;