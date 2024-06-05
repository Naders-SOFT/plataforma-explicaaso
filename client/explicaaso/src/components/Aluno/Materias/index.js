import styled from 'styled-components';
import CardMateria from '../CardMateria';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Frentes from '../../Disciplina/Frentes';
import PaginaBlog from '../../../pages/PaginaBlog';

const MOBLMATERIAS = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px;
`
const DSKMATERIAS = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2vw;
    list-style-type: none;
    padding: 0px;
    align-items: center;
    justify-content: center;
    margin: 0px;
    overflow: auto;
`

const Container = styled.div`
    width: 100%;
`

function ContainerMateria(props) {
    const materias = props.materias?.map((mat) => (
        // const linha = "/pagina-aluno/" + {mat.materia} + "/frentes";
        <div>
            {/* <Link to="/pagina-aluno/Materias/frentes" > */}
                <CardMateria imgSrc={mat.img} materia={mat.materia}/>
            {/* </Link> */}
            {/* <Routes>
                <Route path="/pagina-aluno/Materias/frentes" element={<Frentes frentes={props.frentes}/>} />
            </Routes> */}
        </div>
    ))

    const card = (
        <div>
        <Link to="/pagina-aluno/Materias/frentes" >
            <CardMateria materia="test"/>
        </Link>
        <Routes>
                <Route path="/jijij" element={<PaginaBlog />} />
        </Routes>
        </div>
    )
    

    return (
        <Container>
            {props.isMobile &&
                <MOBLMATERIAS>
                    {materias}
                </MOBLMATERIAS>
            }
            {!props.isMobile &&
                <DSKMATERIAS>
                    {materias}
                    {card}
                </DSKMATERIAS>
            }
        </Container>
    );
}

export default ContainerMateria;
