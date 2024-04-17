import logoUsp from '../../images/logos/logo-usp.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    margin: 0 0 0 20px;
`

const LogoImage = styled.img`
    width: 100px;
    height: 42px;
`

function LogoUsp() {
    return (
        <LogoContainer>
            <LogoImage
                src={logoUsp}
                alt='Logo Usp'
            />
        </LogoContainer>
    );
}

export default LogoUsp