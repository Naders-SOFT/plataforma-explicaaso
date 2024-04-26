import LogosHeader from '../LogosHeader';
import MenuHamburguer from '../MenuHamburguer';
import NavigationHeader from '../NavigationHeader';
import LoginButton from '../LoginButton';
import BarrinhaTurquesa from '../BarrinhaTurquesa';
import styled from 'styled-components';

const ContainerPag = styled.div`
    width: 100%;
`

const HeaderContainer = styled.div`
    display: flex;
    background-color: #003466;
    width: 100%;
    height: ${({$isMobile}) => ($isMobile ? "78px" : "90px")};
    align-items: center;
    justify-content: space-between;
`

function Header(props) {

    // Header define os itens de navegação com IDs associados para
    // serem utilizados no meno hamburguer e na barra de navegação.
    const itensNavigation = [{id: 0, texto: "Início"}, 
        {id: 1, texto: "Sobre nós"}, 
        {id: 2, texto: "Contato"}, 
        {id: 3, texto: "Notícias"}, 
        {id: 4, texto: "Blog"}];

    return  (
        <ContainerPag>
            <HeaderContainer $isMobile={props.isMobile}>
                <LogosHeader $isMobile={props.isMobile}/>
                {props.isMobile && <MenuHamburguer itensNavigation={itensNavigation}/>}
                {!props.isMobile && <NavigationHeader itensNavigation={itensNavigation}/>}
                {!props.isMobile && <LoginButton/>}
            </HeaderContainer>
            <BarrinhaTurquesa/>
        </ContainerPag>
    );
}

export default Header;