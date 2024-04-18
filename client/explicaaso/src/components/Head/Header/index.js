import LogosHeader from '../LogosHeader';
import MenuHamburguer from '../MenuHamburguer';
import NavigationHeader from '../NavigationHeader';
import LoginButton from '../LoginButton';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const HeaderContainer = styled.div`
    display: flex;
    background-color: #003466;
    width: 100%;
    height: ${({isMobile}) => (isMobile ? '78px' : '90px')};
    align-items: center;
    justify-content: space-between;
`


function Header() {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const resizeScreen = () => {
            setIsMobile(window.innerWidth <= 768);
        }

        resizeScreen();

        window.addEventListener('resize', resizeScreen); // atualiza o estado isMobile quando a tela é redimensionada

        return () => {
            window.removeEventListener('resize', resizeScreen); // remove o event listener ao desmontar o componente
        };
    }, [])

    return  (
        <HeaderContainer isMobile={isMobile}>
            <LogosHeader isMobile={isMobile}/>
            {isMobile && <MenuHamburguer/>}
            {!isMobile && <NavigationHeader/>}
            {!isMobile && <LoginButton/>}
        </HeaderContainer>
    );
}

export default Header;