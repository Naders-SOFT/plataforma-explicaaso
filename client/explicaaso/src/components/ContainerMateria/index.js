import styled from 'styled-components';
import CardMateria from '../CardMateria';

import imgMatematica from '../../images/materias/matematica.jpg'

const Materias = styled.ul`
    display: block;
    flex-wrap: wrap;
    list-style-type: none;
`

function ContainerMateria(props) {
    return (
        <Materias>
            <CardMateria imgSrc={imgMatematica} materia='Química'></CardMateria>
            {/* <CardMateria>Português</CardMateria>
            <CardMateria>Física</CardMateria>
            <CardMateria>Biologia</CardMateria>
            <CardMateria>Geografia</CardMateria>
            <CardMateria>Redação</CardMateria>
            <CardMateria>Matemática</CardMateria>
            <CardMateria>História</CardMateria>
            <CardMateria>CardCardMateriateratura</CardMateria>
            <CardMateria>Gramática</CardMateria> */}
        </Materias>
    );
}

export default ContainerMateria;