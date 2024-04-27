import styled from 'styled-components';
import Header from '../components/Head/Header'
import Informacao from '../components/ContainerMateria/Informacao';

import imgPerfil from '../images/logos/pefil.jpg'

const ContainerPag = styled.div`
    width: auto;
    height: 100%;
    overflow: auto;
`

function PaginaAluno(props) {
    return (
        <ContainerPag>
            <Header isMobile={props.isMobile}/>
            <Informacao isMobile = {props.isMobile} imgPerfil={imgPerfil}/>
        </ContainerPag>
    );
}

export default PaginaAluno;