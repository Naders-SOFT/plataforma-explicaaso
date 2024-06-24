import Header from "../components/Head/Header";
import ContainerPost from "../components/Noticia/ContainerPost";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";

const ContainerPag = styled.div`
    width: 100%;
`



function PaginaBlogPost(props) {
    const [blogPost, setBlogPost] = useState([]);
    const {idPost} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3003/noticias/list/${idPost}`)
        .then( response => {
            setBlogPost(response.data);
        })
        .catch( error => {
            console.error('Error fetching data', error);
        })
    }, []);


    return(
        <ContainerPag>
            {/* <Header isMobile={props.isMobile}/> */}
            <ContainerPost isMobile={props.isMobile} blogPost={blogPost}/>
        </ContainerPag>
    )


}

export default PaginaBlogPost;