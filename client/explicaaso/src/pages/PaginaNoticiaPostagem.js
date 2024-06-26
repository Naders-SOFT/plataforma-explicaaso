import Header from "../components/Head/Header";
import ContainerPost from "../components/Noticias/ContainerPost";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const ContainerPag = styled.div`
    width: 100%;
`



function PaginaNoticiaPost(props) {
    const token = localStorage.getItem('token');
    const [editor, setEditor] = useState(token ? jwtDecode(token).tipoUsuario : '');
    const [noticiaPost, setNoticiaPost] = useState([]);
    const {idPost} = useParams();

    //Faz a requisição da postagem específica por meio do id
    //obtido. O post será exibido em sua totalidade
    useEffect(() => {
        axios.get(`http://localhost:3003/noticia/list/${idPost}`)
        .then( response => {
            setNoticiaPost(response.data);
        })
        .catch( error => {
            console.error('Error fetching data', error);
        })

        window.addEventListener("storage", () => {
            const token = localStorage.getItem('token');
            setEditor(token ? jwtDecode(token).tipoUsuario : '');
        })
    }, []);


    return(
        <ContainerPag>
            <ContainerPost isMobile={props.isMobile} noticiaPost={noticiaPost} editor={editor}/>
        </ContainerPag>
    )

}

export default PaginaNoticiaPost;