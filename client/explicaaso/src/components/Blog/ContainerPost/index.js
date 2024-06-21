import styled from 'styled-components';
import BlocoPost from "../BlocoPost";
import placeholder from "../../../images/sobre_nos/placeholder.png"
import { useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';

const ContainerPag = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

`

const BTDIV = styled.div`
    width: ${({$isMobile}) => ($isMobile ? '70%' : '90%')};
    display: flex;
    alig-items: center;
    justify-content: flex-end;
`

const BTADICIONAR = styled.button`
    width: 25%;
    margin: 0 1%;
    padding: ${({$isMobile}) => $isMobile ? "1% 0" : "1% 0"};
    background-color: #FFCC00;
    border: none;
    border-radius: 10px;
    color: #003466;
    font-size: ${({$isMobile}) => $isMobile ? "20px" : "30px"};
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
`

function ContainerPost(props) {
    const [editor, setEditor] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        setEditor(token ? jwtDecode(token).tipoUsuario : '');
        

        window.addEventListener("storage", () => {
            const token = localStorage.getItem('token');
            setEditor(token ? jwtDecode(token).tipoUsuario : '');
        })
    }, [editor]);
    

    return (
        <ContainerPag>
            <BlocoPost
            isMobile={props.isMobile}
            imgSrc={placeholder}
            imgAlt={"placeholder"}
            titulopost = {props.blogPost.titulo} 
            textopost = {props.blogPost.texto}
            autorpost={props.blogPost.autor}
            datapost={props.blogPost.data}
            editor={editor}/>
        </ContainerPag>
    )
}

export default ContainerPost;