import ContainerInfo from "../components/Blog/ContainerInfo";
import styled from 'styled-components';


const ContainerPag = styled.div`
    width: 100%;
`

function PaginaBlog(props) {
    return(
        <ContainerPag>
            <ContainerInfo isMobile={props.isMobile}/>
        </ContainerPag>
    )


}

export default PaginaBlog;