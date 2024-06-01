import styled from 'styled-components'
import AvisosContainer from '../components/Disciplina/AvisosContainer';

import imgPerfil from '../images/logos/pefil.jpg'

const ContainerPag = styled.div`
    width: 100%;
    height: 100%;
`

const tituloBotoes = [
    { titulo: 'Matérias'},
    { titulo: 'Provas'},
    { titulo: 'Simulados'}
]

function PaginaDisciplina(props) {
    return (
        <ContainerPag>
            <AvisosContainer imgPerfil={imgPerfil} isMobile={props.isMobile} botoes={tituloBotoes}></AvisosContainer>
        </ContainerPag>
    );
}

export default PaginaDisciplina;