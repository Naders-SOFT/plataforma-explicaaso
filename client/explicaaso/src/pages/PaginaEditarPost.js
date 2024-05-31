import RichText from "../components/EditorTexto/RichText";
import styled from "styled-components";

const ContainerPag = styled.div`
    width: 1 vw;
    margin: 0 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Titulo = styled.input`
    width: 100%;
    margin: 1% 0;
    border: 1px solid gray;
    border-radius: 3px;
    background: whitesmoke;
    font-size: 1.5em;
    display: flex;
    padding: 0.5% 0;
    text-indent: 0.5%;
`

const ContainerBotao = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Botao = styled.button`
    width: 20%;
    border: none;
    border-radius: 8px;
    background-color: #FF6600;
    font-size: 28px;
    font-weight: 600;
    color: #994107;
    height: 50px;
    margin: 0 0 40px 0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease; 

    &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    color: #FFEFD5;
    cursor: pointer;
    }
`

function EditarPost() {
    return(
        <ContainerPag>
            <Titulo placeholder="Título do Post"/>
            <RichText/>
            <ContainerBotao>
                <Botao>Postar</Botao>
            </ContainerBotao>
        </ContainerPag>
    );
}

export default EditarPost;