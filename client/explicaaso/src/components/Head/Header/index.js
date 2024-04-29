import LogosHeader from '../LogosHeader';
import MenuHamburguer from '../MenuHamburguer';
import NavigationHeader from '../NavigationHeader';
import LoginButton from '../LoginButton';
import BarrinhaTurquesa from '../BarrinhaTurquesa';
import styled from 'styled-components';
import PaginaSobreNos from '../../../pages/PaginaSobreNos';
import PaginaNoticias from '../../../pages/PaginaNoticias';
import PaginaLogin from '../../../pages/PaginaLogin';
import PaginaContato from '../../../pages/PaginaContato';
import PaginaBlog from '../../../pages/PaginaBlog';
// import PaginaAluno from '../../../pages/PaginaAluno';
import PaginaInicial from '../../../pages/PaginaInicial';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

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
    const itensNavigation = [{id: 0, texto: "Início", pagina: '/'}, 
        {id: 1, texto: "Sobre nós", pagina: '/pagina-sobre-nos'}, 
        {id: 2, texto: "Contato", pagina: '/pagina-contato'}, 
        {id: 3, texto: "Notícias", pagina: '/pagina-noticias'}, 
        {id: 4, texto: "Blog", pagina: '/pagina-blog'}];

    return  (
        <ContainerPag>
            <Router>
                <HeaderContainer $isMobile={props.isMobile}>
                    <LogosHeader $isMobile={props.isMobile}/>
                    {props.isMobile && <MenuHamburguer itensNavigation={itensNavigation}/>}
                    {!props.isMobile && <NavigationHeader itensNavigation={itensNavigation}/>}
                    {!props.isMobile && <LoginButton/>}
                </HeaderContainer>   
                <BarrinhaTurquesa/> 
                <Routes>
                    <Route path='/' element={<PaginaInicial isMobile={props.isMobile}/>} />
                    <Route path='/pagina-sobre-nos' element={<PaginaSobreNos isMobile={props.isMobile}/>} />
                    <Route path='/pagina-contato' element={<PaginaContato isMobile={props.isMobile}/>} />
                    <Route path='/pagina-noticias' element={<PaginaNoticias isMobile={props.isMobile}/>} />
                    <Route path='/pagina-blog' element={<PaginaBlog isMobile={props.isMobile}/>} />
                    <Route path='/login' element={<PaginaLogin isMobile={props.isMobile}/>} />
                </Routes>
            </Router>
        </ContainerPag>
    );
}

export default Header;