import BarrinhaTurquesa from '../components/Head/BarrinhaTurquesa';
import Header from '../components/Head/Header';
import BlocoAzul from '../components/BlocoAzul';
import styled from 'styled-components';

const ContainerPag = styled.div`
    width: 100%;
`



function PaginaNoticias() {
    return (
        <ContainerPag>
            <Header />
            <BarrinhaTurquesa />
            <BlocoAzul/>
        </ContainerPag>
    )
}

export default PaginaNoticias;