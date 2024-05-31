import { useState } from "react";
import RichText from "../components/EditorTexto/RichText";
import styled from "styled-components";
import { useCurrentEditor } from "@tiptap/react";
//import { useNavigate } from "react-router-dom";

const ContainerPag = styled.div`
    width: 1 vw;
    margin: ${({$isMobile}) => ($isMobile ? '0 5%' : '0 15%')};
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
    font-size: 28px;
    display: flex;
    padding: 2% 0;
    text-indent: 0.7%;
`

const ContainerBotao = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Botao = styled.button`
    width: ${({$isMobile}) => ($isMobile ? '40%' : '20%')};
    border: none;
    border-radius: 8px;
    background-color: #FF6600;
    font-size: 28px;
    font-weight: 600;
    color: #994107;
    height: 50px;
    margin: 1% 0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease; 

    &:hover {
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
        color: #FFEFD5;
        cursor: pointer;
    }
`

function EditarPost(props) {
    const [titulo, setTitulo] = useState('');
    const { editor } = useCurrentEditor();

    //let navigate = useNavigate();

    const criarPost = async () => {
        /* Comunicação com o BD */

      //  navigate("/pagina-blog");
    }

    /**ARRUMAR ESSA CACETA */
    /**Aparentemente useContext é o que resolve essa merda, mas naõ sei usar ainda */
    console.log(editor ? true : false);

    return(
        <ContainerPag $isMobile={props.isMobile}>
            <Titulo placeholder="Título do Post" onChange={(e) => {setTitulo(e.target.value);}}/>
            <RichText isMobile={props.isMobile}/>
            <ContainerBotao>
                <Botao $isMobile={props.isMobile} onClick={criarPost}>Postar</Botao>
            </ContainerBotao>
            {/* <pre>
            { editor ? editor.getJSON() : null }
            </pre> */}
        </ContainerPag>
    );
}

export default EditarPost;