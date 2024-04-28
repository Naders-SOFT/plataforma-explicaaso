import styled from "styled-components";
import ContainerInfo from "../components/SobreNos/ContainerInfo";

const ContainerPag = styled.div`
    width: 100%
`

function SobreNos(props) {
    return (
        <ContainerPag>
            <ContainerInfo isMobile={props.isMobile}/>
        </ContainerPag>
    );
}

export default SobreNos;