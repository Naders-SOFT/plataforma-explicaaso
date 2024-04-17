import LogosHeader from '../LogosHeader';
import NavigationHeader from '../NavigationHeader';
import LoginButton from '../LoginButton';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    background-color: #003466;
    width: 100%;
    height: 90px;
    align-items: center;
    justify-content: flex-start;
`

function Header() {
    return  (
        <HeaderContainer>
            <LogosHeader/>
            <NavigationHeader/>
            <LoginButton/>
        </HeaderContainer>
    );
}

export default Header;