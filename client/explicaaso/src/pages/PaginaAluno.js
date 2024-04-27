import Header from '../components/Head/Header'
import ContainerMateria from '../components/ContainerMateria'
import styled from 'styled-components';
import BarrinhaTurquesa from '../components/Head/BarrinhaTurquesa'
import SideBar from '../components/ContainerMateria/SideBar';

import imgPerfil from '../images/logos/pefil.jpg'

const ContainerAluno = styled.div`
    width: 100vw;
    ${'' /* min-height: 100vh; */}
    height: auto;
    background-color: white;
    display: flex;
    flex-direction: column;
`

const ContainerPag = styled.div`
    width: 100%;
    height: 100%;
`

const Miolo = styled.div`
    display: grid;
    grid-template-columns: 1fr 7fr;
    flex-wrap: wrap;
    width: 100%;
    ${'' /* height: 100%; */}
`

function PaginaAluno(props) {
    return (
        <ContainerPag>
            <Header/>
            <BarrinhaTurquesa/>
            <Miolo>
                <SideBar imgPerfil={imgPerfil}></SideBar>
                <ContainerMateria/>
            </Miolo>
        </ContainerPag>
    );
}

export default PaginaAluno;