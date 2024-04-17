import LogosHeader from '../../LogosHeader';
import MenuHamburguer from '../../MenuHamburguer';
import NavigationHeader from '../NavigationHeader';
import LoginButton from '../LoginButton';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const HeaderContainer = styled.div`
    display: flex;
    background-color: #003466;
    width: 100%;
    height: 90px;
    align-items: center;
    justify-content: space-between;
`

const ItensDesktop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px 0 0;
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
        <HeaderContainer>
            <LogosHeader isMobile={isMobile}/>
            {
                isMobile ? (
                    <MenuHamburguer/>
                ) : 
                (
                    <ItensDesktop>
                        <NavigationHeader/>
                        <LoginButton/>
                    </ItensDesktop>
                )
            }
        </HeaderContainer>
    );
}

export default Header;