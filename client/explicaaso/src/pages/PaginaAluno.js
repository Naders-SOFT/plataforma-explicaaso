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
import imgFilosofia from '../images/materias/literatura2.jpg'
import imgSociologia from '../images/materias/literatura.webp'
import imgPortugues from '../images/materias/redacao.jpg'

const ContainerPag = styled.div`
    width: 100%;
    height: 100%;
`

const tituloBotoes = [
    { titulo: 'Matérias'},
]

const imgMaterias = [
    { img: imgMatematica, materia: 'Matemática'},
    { img: imgHistoria, materia: 'História'},
    { img: imgGeografia, materia: 'Geografia'},
    { img: imgQuimica, materia: 'Química'},
    { img: imgFisica, materia: 'Física'},
    { img: imgBiologia, materia: 'Biologia'},
    { img: imgFilosofia, materia: 'Filosofia'},
    { img: imgSociologia, materia: 'Sociologia'},
    { img: imgPortugues, materia: 'Linguagens'}
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
