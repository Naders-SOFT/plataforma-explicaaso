import Header from '../components/Head/Header';
import BlocoAzul from '../components/BlocoAzul';
import styled from 'styled-components';

const ContainerPag = styled.div`
    width: 100%;
`



function PaginaNoticias() {
    return (
        <ContainerPag>
            <Header/>
            <BlocoAzul/>
        </ContainerPag>
    )
}

export default PaginaNoticias;