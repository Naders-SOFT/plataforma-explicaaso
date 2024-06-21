import LogosHeader from '../LogosHeader';
import MenuHamburguer from '../MenuHamburguer';
import NavigationHeader from '../NavigationHeader';
import LoginButton from '../LoginButton';
import BarrinhaTurquesa from '../BarrinhaTurquesa';
import styled from 'styled-components';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';

const ContainerPag = styled.div`
    width: 100%;
    margin: 0;
`

const HeaderContainer = styled.div`
    display: flex;
    background-color: #003466;
    width: 100%;
    height: ${({$isMobile}) => ($isMobile ? "78px" : "90px")};
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    margin: 0;
`

function Header(props) {
    // Header define os itens de navegação com IDs associados para
    // serem utilizados no menu hamburguer e na barra de navegação.
    const [itensNavigation, setItensNavigation] = useState([
        { id: 0, texto: "Início", pagina: '/' },
        { id: 1, texto: "Sobre nós", pagina: '/pagina-sobre-nos' },
        { id: 2, texto: "Contato", pagina: '/pagina-contato' },
        { id: 3, texto: "Notícias", pagina: '/pagina-noticias' },
        { id: 4, texto: "Blog", pagina: '/pagina-blog' }
    ]);

    useEffect(() => {
        // Ao carregar a pagina:
        const token = localStorage.getItem("token");
        if (token) {
            setItensNavigation(prevItens => {
                if (!prevItens.some(item => item.id === 5)) {
                    return [...prevItens, { id: 5, texto: "Área Aluno", pagina: '/pagina-aluno' }];
                }
                return prevItens;
            });
        } else {
            setItensNavigation(prevItens => prevItens.filter(item => item.id !== 5));
        }

        // Ouvindo os eventos do token em tempo real:
        window.addEventListener("storage", () => {
            const token = localStorage.getItem("token");
            if (token) {
                setItensNavigation(prevItens => {
                    if (!prevItens.some(item => item.id === 5)) {
                        return [...prevItens, { id: 5, texto: "Área Aluno", pagina: '/pagina-aluno' }];
                    }
                    return prevItens;
                });
            } else {
                setItensNavigation(prevItens => prevItens.filter(item => item.id !== 6 && item.id !== 5));
            }
        }

        // Ao carregar a pagina:
        logicaToken();

        // Ouvindo os eventos do token em tempo real:
        window.addEventListener("storage", () => {
            logicaToken();
        });
    }, []);

    return  (
        <ContainerPag>
            <HeaderContainer $isMobile={props.isMobile}>
                <LogosHeader $isMobile={props.isMobile} isMobile={props.isMobile}/>
                {props.isMobile && <MenuHamburguer itensNavigation={itensNavigation}/>}
                {!props.isMobile && <NavigationHeader itensNavigation={itensNavigation}/>}
                {!props.isMobile && <LoginButton/>}
            </HeaderContainer>   
            <BarrinhaTurquesa/> 
        </ContainerPag>
    );
}

export default Header;
