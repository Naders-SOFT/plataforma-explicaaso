import ContainerInfo from "../components/Blog/ContainerInfo";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import axios from "axios";

const ContainerPag = styled.div`
    width: 100%;
`

function PaginaBlog(props) {
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

    /** Exibir os blogposts e passar para o ContainerInfo */


    return(
        <ContainerPag>
            <ContainerInfo isMobile={props.isMobile} blogPosts={blogPosts}/>
        </ContainerPag>
    )


}

export default PaginaBlog;