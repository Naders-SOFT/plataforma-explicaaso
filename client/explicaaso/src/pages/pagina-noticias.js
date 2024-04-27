import Header from '../components/Head/Header';
import ContainerInfo from "../components/Noticias/ContainerInfo";
import BlocoNoticia from '../components/Noticias/BlocoNoticia';
import styled from 'styled-components';

const ContainerPag = styled.div`
    width: 100%;
`



function PaginaNoticias(props) {
    return (
        <ContainerPag>
            <Header isMobile={props.isMobile}/>
            <ContainerInfo isMobile={props.isMobile}/>
        </ContainerPag>
    )
}

export default PaginaNoticias;