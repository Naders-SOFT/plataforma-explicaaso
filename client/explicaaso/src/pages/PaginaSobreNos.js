import styled from "styled-components";
import ContainerInfo from "../components/SobreNos/ContainerInfo";
import Desenvolvedores from "../components/SobreNos/Desenvolvedores";

const ContainerPag = styled.div`
    width: 100%
`

function SobreNos(props) {
    return (
        <ContainerPag>
            <ContainerInfo isMobile={props.isMobile}/>
            <Desenvolvedores></Desenvolvedores>
        </ContainerPag>
    );
}

export default SobreNos;
