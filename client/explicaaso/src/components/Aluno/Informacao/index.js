import styled from 'styled-components';
import SideBar from '../SideBar';
import ContainerMateria from '../Materias';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MOBLINFO = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: right;
    justify-content: right;
    width: 100%;
    height: 100%;
`

const DSKINFO = styled.div`
    display: grid;
    grid-template-columns: 1fr 8fr;
    flex-wrap: wrap;
    gap: 2%;
    overflow: auto;
    min-height: 100%;
    width: 100%;
`
const Container = styled.div`
    width: 100%;
    ${'' /* height: 100%; */}
`
function Informacao(props) {
    const [materias, setMaterias] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3003/materias/listMat')
        .then(response => {
            setMaterias(response.data)
        })
        .catch(err => {
            console.error(err.message)
        })
    }, [])

    return (
        <Container>
            {
                props.isMobile &&
                <MOBLINFO>
                    <SideBar isMobile={props.isMobile} botoes={props.botoes}/>
                    <ContainerMateria isMobile={props.isMobile} materias={materias}/>
                </MOBLINFO>
            }
            {
                !props.isMobile &&
                <DSKINFO>
                    <SideBar isMobile={props.isMobile} imgPerfil={props.imgPerfil} botoes={props.botoes}/>
                    <ContainerMateria isMobile={props.isMobile} materias={materias}/>
                </DSKINFO>
            }
        </Container>
    );
}

export default Informacao;
