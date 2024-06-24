import Header from "../components/Head/Header";
import ContainerPost from "../components/Blog/ContainerPost";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const ContainerPag = styled.div`
    width: 100%;
`



function PaginaBlogPost(props) {
    const token = localStorage.getItem('token');
    const [editor, setEditor] = useState(token ? jwtDecode(token).tipoUsuario : '');
    const [blogPost, setBlogPost] = useState([]);
    const {idPost} = useParams();

    //Faz a requisição da postagem específica por meio do id
    //obtido. O post será exibido em sua totalidade
    useEffect(() => {
        axios.get(`http://localhost:3003/blog/list/${idPost}`)
        .then( response => {
            setBlogPost(response.data);
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
            <ContainerPost isMobile={props.isMobile} blogPost={blogPost} editor={editor}/>
        </ContainerPag>
    )


}

export default PaginaBlogPost;