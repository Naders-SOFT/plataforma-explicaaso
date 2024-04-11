import LogoUsp from '../LogoUsp';
import LogoExpliCaaso from '../LogoExpliCaaso';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    display: flex;
    background-color: #003466;
    width: 100%;
    height: 125px;
    align-items: center;
`


function Header() {
    return  (
        <HeaderContainer>
            <LogoUsp/>
            <LogoExpliCaaso/>
        </HeaderContainer>
    );
}

export default Header;