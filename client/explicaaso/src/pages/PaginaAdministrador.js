import Header from '../components/Head/Header'
import styled from 'styled-components';
import SideBar from '../components/Administrador/SideBar';
import ListaItem from '../components/Administrador/Gerenciador';
import ContainerAdmin from '../components/Administrador/Gerenciador'
import imgPerfil from '../images/logos/perfil.jpg'
import Informacao from '../components/Administrador/Info';

const ContainerPag = styled.div`
    width: auto;
    height: 100%;
`

function PaginaAdmin(props) {
    return (
        <ContainerPag>
            <Informacao isMobile = {props.isMobile} imgPerfil={imgPerfil}/>      
        </ContainerPag>

    );
}

export default PaginaAdmin;