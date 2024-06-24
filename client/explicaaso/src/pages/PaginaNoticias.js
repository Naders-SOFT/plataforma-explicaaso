import ContainerInfo from "../components/Noticias/ContainerInfo";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import axios from "axios";

const ContainerPag = styled.div`
    width: 100%;
`



function PaginaNoticias(props) {
    const [noticiaPosts, setNoticiaPosts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3003/noticias/list')
        .then( response => {
            setNoticiaPosts(response.data);
        })
        .catch( error => {
            console.error('Error fetching data', error);
        })
    }, []);
    
    
    return (
        <ContainerPag>
            <ContainerInfo isMobile={props.isMobile} noticiaPosts={noticiaPosts}/>
        </ContainerPag>
    )
}

export default PaginaNoticias;