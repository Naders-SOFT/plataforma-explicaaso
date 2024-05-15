import styled from 'styled-components'
import Header from '../components/Head/Header';
import AvisosContainer from '../components/Disciplina/AvisosContainer';

import imgPerfil from '../images/logos/pefil.jpg'

const ContainerPag = styled.div`
    width: 100%;
    height: 100%;
`

function PaginaDisciplina(props) {
    return (
        <ContainerPag>
            {/* <Header isMobile={props.isMobile}/> */}
            <AvisosContainer imgPerfil={imgPerfil} isMobile={props.isMobile}></AvisosContainer>
        </ContainerPag>
    );
}

export default PaginaDisciplina;