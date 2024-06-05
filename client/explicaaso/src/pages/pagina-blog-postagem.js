import Header from "../components/Head/Header";
import ContainerPost from "../components/Blog/ContainerPost";
import styled from 'styled-components';

const ContainerPag = styled.div`
    width: 100%;
`



function PaginaBlogPost(props) {
    return(
        <ContainerPag>
            <Header isMobile={props.isMobile}/>
            <ContainerPost isMobile={props.isMobile}/>
        </ContainerPag>
    )


}

export default PaginaBlogPost;