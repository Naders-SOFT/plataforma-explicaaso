import styled from "styled-components";
import Header from "../components/Head/Header";
import ContainerInfo from "../components/SobreNos/ContainerInfo";

const ContainerPag = styled.div`
    width: 100%
`

function SobreNos(props) {
    return (
        <ContainerPag>
            <Header isMobile={props.isMobile}/>
            <ContainerInfo isMobile={props.isMobile}/>
        </ContainerPag>
    );
}

export default SobreNos;