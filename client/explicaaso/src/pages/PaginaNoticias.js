import ContainerInfo from "../components/Noticias/ContainerInfo";
import styled from 'styled-components';

const ContainerPag = styled.div`
    width: 100%;
`



function PaginaNoticias(props) {
    return (
        <ContainerPag>
            <ContainerInfo isMobile={props.isMobile}/>
        </ContainerPag>
    )
}

export default PaginaNoticias;