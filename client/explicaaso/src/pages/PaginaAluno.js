import styled from 'styled-components'
import Header from '../components/Head/Header'
import Informacao from '../components/Aluno/Informacao';

import imgPerfil from '../images/logos/perfil.jpg'

const ContainerPag = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
`

const tituloBotoes = [
    { titulo: 'Matérias', link:'/pagina-aluno'},
    { titulo: 'Provas', link:'/pagina-provas'}
]


function PaginaAluno(props) {
    return (
        <ContainerPag>
            <Informacao isMobile = {props.isMobile} imgPerfil={imgPerfil} botoes={tituloBotoes}/>
        </ContainerPag>
    );
}

export default PaginaAluno;
