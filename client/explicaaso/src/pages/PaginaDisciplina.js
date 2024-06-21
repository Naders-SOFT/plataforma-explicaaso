import styled from 'styled-components'
import AvisosContainer from '../components/Disciplina/PdfContainer'
import imgPerfil from '../images/logos/perfil.jpg'
import { useParams } from 'react-router-dom'


const ContainerPag = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
`

const tituloBotoes = [
    { titulo: 'Matérias', link:'/pagina-aluno'},
    { titulo: 'Provas', link:'/pagina-provas'}
]

function PaginaDisciplina(props) {
    const urlParams = useParams()
    console.log(props.prova)
    return (
        <ContainerPag>
            {props.prova ? 
            <AvisosContainer imgPerfil={imgPerfil} isMobile={props.isMobile} botoes={tituloBotoes} tituloFrente={"Provas"}></AvisosContainer>
            :
            <AvisosContainer imgPerfil={imgPerfil} isMobile={props.isMobile} botoes={tituloBotoes} tituloDisciplina={urlParams.materias} tituloFrente={urlParams.frente}></AvisosContainer>
            }
        </ContainerPag>
    );
}

export default PaginaDisciplina;
