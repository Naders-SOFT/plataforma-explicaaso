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
            // console.log(response.data);
        })
        .catch( error => {
            console.error('Error fetching data', error);
        })
    }, []);

    console.log(blogPosts);

    return(
        <ContainerPag>
            <ContainerInfo isMobile={props.isMobile}/>
        </ContainerPag>
    )


}

export default PaginaBlog;