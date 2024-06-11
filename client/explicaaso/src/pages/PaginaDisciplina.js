import styled from 'styled-components'
import AvisosContainer from '../components/Disciplina/PdfContainer'
import imgPerfil from '../images/logos/pefil.jpg'
import { useParams } from 'react-router-dom'


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
    const urlParams = useParams()
    return (
        <ContainerPag>
            <AvisosContainer imgPerfil={imgPerfil} isMobile={props.isMobile} botoes={tituloBotoes} tituloDisciplina={urlParams.materias} tituloFrente={urlParams.frente}></AvisosContainer>
        </ContainerPag>
    );
}

export default PaginaDisciplina;