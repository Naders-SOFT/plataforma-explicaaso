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

import gramatica from '../images/frentes/gra.jpeg';
import literatura from '../images/frentes/lit.jpeg';
import interpretacao from '../images/frentes/int.jpeg';
import ingles from '../images/frentes/ing.jpeg';
import redacao from '../images/frentes/red.jpeg';
import his1 from '../images/frentes/his1.jpeg';
import his2 from '../images/frentes/his2.jpeg';
import geo1 from '../images/frentes/geo1.jpeg';
import geo2 from '../images/frentes/geo2.jpeg';
import fil from '../images/frentes/fil.jpeg';
import soc from '../images/frentes/soc.jpeg';
import bio1 from '../images/frentes/bio1.jpeg';
import bio2 from '../images/frentes/bio2.jpeg';
import bio3 from '../images/frentes/bio3.jpeg';
import fis1 from '../images/frentes/fis1.jpeg';
import fis2 from '../images/frentes/fis2.jpeg';
import fis3 from '../images/frentes/fis3.jpeg';
import qui1 from '../images/frentes/qui1.jpeg';
import qui2 from '../images/frentes/qui2.jpeg';
import qui3 from '../images/frentes/qui3.jpeg';
import mat1 from '../images/frentes/mat1.jpeg';
import mat2 from '../images/frentes/mat2.jpeg';
import mat3 from '../images/frentes/mat3.jpeg';

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

const frentes = [
    { name: 'gramatica', image: gramatica },
    { name: 'literatura', image: literatura },
    { name: 'interpretacao', image: interpretacao },
    { name: 'ingles', image: ingles },
    { name: 'redacao', image: redacao },
    { name: 'his1', image: his1 },
    { name: 'his2', image: his2 },
    { name: 'geo1', image: geo1 },
    { name: 'geo2', image: geo2 },
    { name: 'fil', image: fil },
    { name: 'soc', image: soc },
    { name: 'bio1', image: bio1 },
    { name: 'bio2', image: bio2 },
    { name: 'bio3', image: bio3 },
    { name: 'fis1', image: fis1 },
    { name: 'fis2', image: fis2 },
    { name: 'fis3', image: fis3 },
    { name: 'qui1', image: qui1 },
    { name: 'qui2', image: qui2 },
    { name: 'qui3', image: qui3 },
    { name: 'mat1', image: mat1 },
    { name: 'mat2', image: mat2 },
    { name: 'mat3', image: mat3 },
];

function PaginaAluno(props) {
    return (
        <ContainerPag>
            {/* <Header isMobile={props.isMobile}/> */}
            <Informacao isMobile = {props.isMobile} imgPerfil={imgPerfil} botoes={tituloBotoes} materias={imgMaterias}/>
        </ContainerPag>
    );
}

export default PaginaAluno;
