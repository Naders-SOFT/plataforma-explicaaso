import BarrinhaTurquesa from "../components/Head/BarrinhaTurquesa";
import Header from "../components/Head/Header";
import BlocoBlog from "../components/BlocoBlog";
import styled from 'styled-components';


const ContainerPag = styled.div`
    width: 100%;
`



function PaginaBlog() {
    return(
        <ContainerPag>
            <Header/>
            <BlocoBlog/>
        </ContainerPag>
    )


}

export default PaginaBlog;