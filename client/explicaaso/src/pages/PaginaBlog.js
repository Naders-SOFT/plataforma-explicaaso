import ContainerInfo from "../components/Blog/ContainerInfo";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import axios from "axios";

const ContainerPag = styled.div`
    width: 100%;
`

function PaginaBlog(props) {
    //Realiza a requisição de todas as postagens criadas
    //e armazenadas na base de dados
    const [blogPosts, setBlogPosts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3003/blog/list')
        .then( response => {
            setBlogPosts(response.data);
        })
        .catch( error => {
            console.error('Error fetching data', error);
        })
    }, []);


    return(
        <ContainerPag>
            <ContainerInfo isMobile={props.isMobile} blogPosts={blogPosts}/>
        </ContainerPag>
    )


}

export default PaginaBlog;