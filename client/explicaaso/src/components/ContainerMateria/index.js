import styled from 'styled-components';
import CardMateria from './CardMateria';

import imgMatematica from '../../images/materias/matematica.jpg';
import imgHistoria from '../../images/materias/historia.jpg'
import imgGeografia from '../../images/materias/geografia.jpg'
import imgQuimica from '../../images/materias/quimica.jpg'
import imgFisica from '../../images/materias/fisica.png'
import imgBiologia from '../../images/materias/biologia.jpg'
import imgLiteratura from '../../images/materias/literatura2.jpg'
import imgGramatica from '../../images/materias/literatura.webp'
import imgRedacao from '../../images/materias/redacao.jpg'


const Materias = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 5vh;
    }
`

function ContainerMateria(props) {
    return (
        <Materias>
            <CardMateria imgSrc={imgMatematica} materia='Matemática'></CardMateria>
            <CardMateria imgSrc={imgQuimica} materia='Química'></CardMateria>
            <CardMateria imgSrc={imgGramatica} materia='Gramática'></CardMateria>
            <CardMateria imgSrc={imgFisica} materia='Física'></CardMateria>
            <CardMateria imgSrc={imgBiologia} materia='Biologia'></CardMateria>
            <CardMateria imgSrc={imgGeografia} materia='Geografia'></CardMateria>
            <CardMateria imgSrc={imgRedacao} materia='Redação'></CardMateria>
            <CardMateria imgSrc={imgHistoria} materia='História'></CardMateria>
            <CardMateria imgSrc={imgLiteratura} materia='Literatura'></CardMateria>
        </Materias>
    );
}

export default ContainerMateria;