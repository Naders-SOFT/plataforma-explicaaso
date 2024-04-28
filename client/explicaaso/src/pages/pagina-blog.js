import Header from "../components/Head/Header";
import ContainerInfo from "../components/Blog/ContainerInfo";
import styled from 'styled-components';


const ContainerPag = styled.div`
    width: 100%;
`

function PaginaBlog(props) {
    return(
        <ContainerPag>
            <Header isMobile={props.isMobile}/>
            <ContainerInfo isMobile={props.isMobile}/>
        </ContainerPag>
    )


}

export default PaginaBlog;