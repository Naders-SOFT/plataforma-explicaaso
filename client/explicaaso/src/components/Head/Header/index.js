import LogosHeader from '../LogosHeader';
import MenuHamburguer from '../MenuHamburguer';
import NavigationHeader from '../NavigationHeader';
import LoginButton from '../LoginButton';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    background-color: #003466;
    width: 100%;
    height: ${({isMobile}) => (isMobile ? "78px" : "90px")};
    align-items: center;
    justify-content: space-between;
`


function Header(props) {
    return  (
        <HeaderContainer isMobile={props.isMobile}>
            <LogosHeader isMobile={props.isMobile}/>
            {props.isMobile && <MenuHamburguer/>}
            {!props.isMobile && <NavigationHeader/>}
            {!props.isMobile && <LoginButton/>}
        </HeaderContainer>
    );
}

export default Header;