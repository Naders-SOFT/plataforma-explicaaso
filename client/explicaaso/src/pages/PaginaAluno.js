import styled from 'styled-components'
import Header from '../components/Head/Header'
import Informacao from '../components/Aluno/Informacao';

import imgPerfil from '../images/logos/perfil.jpg'

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
    background-color: #f8f8f8;
`

const tituloBotoes = [
    { titulo: 'Matérias'},
]

const imgMaterias = [
    { img: imgMatematica, materia: 'Matemática', frentes:['Matemática 1', 'Matemática 2', 'Matemática 3']},
    { img: imgHistoria, materia: 'História', frentes:['História do Brasil', 'História Geral']},
    { img: imgGeografia, materia: 'Geografia', frentes:['Geografia do Brasil', 'Geografia Geral']},
    { img: imgQuimica, materia: 'Química', frentes:['Química 1', 'Química 2', 'Química 3']},
    { img: imgFisica, materia: 'Física', frentes:['Física 1', 'Física 2', 'Física 3']},
    { img: imgBiologia, materia: 'Biologia', frentes:['Biologia 1', 'Biologia 2', 'Biologia 3']},
    { img: imgFilosofia, materia: 'Filosofia', frentes:['Filosofia']},
    { img: imgSociologia, materia: 'Sociologia', frentes:['Sociologia']},
    { img: imgPortugues, materia: 'Linguagens', frentes:['Linguagens', 'Inglês', 'Redação']}
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
