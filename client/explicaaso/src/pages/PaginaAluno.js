import styled from 'styled-components'
import Header from '../components/Head/Header'
import Informacao from '../components/Aluno/Informacao';

import imgPerfil from '../images/logos/pefil.jpg'

import imgMatematica from '../images/materias/matematica.jpg';
import imgHistoria from '../images/materias/historia.jpg'
import imgGeografia from '../images/materias/geografia.jpg'
import imgQuimica from '../images/materias/quimica.jpg'
import imgFisica from '../images/materias/fisica.png'
import imgBiologia from '../images/materias/biologia.jpg'
import imgLiteratura from '../images/materias/literatura2.jpg'
import imgGramatica from '../images/materias/literatura.webp'
import imgRedacao from '../images/materias/redacao.jpg'

const ContainerPag = styled.div`
    width: 100%;
    height: 100%;
`

const tituloBotoes = [
    { titulo: 'Matérias'},
    { titulo: 'Provas'},
    { titulo: 'Simulados'}
]

const imgMaterias = [
    { img: imgMatematica, materia: 'Matemática'},
    { img: imgHistoria, materia: 'História'},
    { img: imgGeografia, materia: 'Geografia'},
    { img: imgQuimica, materia: 'Química'},
    { img: imgFisica, materia: 'Física'},
    { img: imgBiologia, materia: 'Biologia'},
    { img: imgLiteratura, materia: 'Literatura'},
    { img: imgGramatica, materia: 'Gramática'},
    { img: imgRedacao, materia: 'Redação'}
]

function PaginaAluno(props) {
    return (
        <ContainerPag>
            {/* <Header isMobile={props.isMobile}/> */}
            <Informacao isMobile = {props.isMobile} imgPerfil={imgPerfil} botoes={tituloBotoes} materias={imgMaterias}/>
        </ContainerPag>
    );
}

export default PaginaAluno;