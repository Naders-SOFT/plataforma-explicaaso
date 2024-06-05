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
import PaginaAluno from '../../../pages/PaginaAluno';
import PaginaInicial from '../../../pages/PaginaInicial';
import Frentes from '../../Disciplina/Frentes';
import gramatica from '../../../images/frentes/gra.jpeg';
import literatura from '../../../images/frentes/lit.jpeg';
import interpretacao from '../../../images/frentes/int.jpeg';
import ingles from '../../../images/frentes/ing.jpeg';
import redacao from '../../../images/frentes/red.jpeg';
import his1 from '../../../images/frentes/his1.jpeg';
import his2 from '../../../images/frentes/his2.jpeg';
import geo1 from '../../../images/frentes/geo1.jpeg';
import geo2 from '../../../images/frentes/geo2.jpeg';
import fil from '../../../images/frentes/fil.jpeg';
import soc from '../../../images/frentes/soc.jpeg';
import bio1 from '../../../images/frentes/bio1.jpeg';
import bio2 from '../../../images/frentes/bio2.jpeg';
import bio3 from '../../../images/frentes/bio3.jpeg';
import fis1 from '../../../images/frentes/fis1.jpeg';
import fis2 from '../../../images/frentes/fis2.jpeg';
import fis3 from '../../../images/frentes/fis3.jpeg';
import qui1 from '../../../images/frentes/qui1.jpeg';
import qui2 from '../../../images/frentes/qui2.jpeg';
import qui3 from '../../../images/frentes/qui3.jpeg';
import mat1 from '../../../images/frentes/mat1.jpeg';
import mat2 from '../../../images/frentes/mat2.jpeg';
import mat3 from '../../../images/frentes/mat3.jpeg';

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
    font-size: 20px;
`

function Header(props) {

    // Header define os itens de navegação com IDs associados para
    // serem utilizados no meno hamburguer e na barra de navegação.
    const itensNavigation = [{id: 0, texto: "Início", pagina: '/'}, 
        {id: 1, texto: "Sobre nós", pagina: '/pagina-sobre-nos'}, 
        {id: 2, texto: "Contato", pagina: '/pagina-contato'}, 
        {id: 3, texto: "Notícias", pagina: '/pagina-noticias'}, 
        {id: 4, texto: "Blog", pagina: '/pagina-blog'},
        {id: 5, texto: "Área Aluno", pagina: '/pagina-aluno'}
        
    ];

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
                    <Route path='/pagina-aluno' element={<PaginaAluno isMobile={props.isMobile}/>}/>
                    <Route path="/pagina-aluno/Materias/frentes" element={<Frentes frentes={frentes} isMobile={props.isMobile} />} />
                </Routes>
            </Router>
        </ContainerPag>
    );
}

export default Header;
