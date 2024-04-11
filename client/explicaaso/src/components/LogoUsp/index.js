import logoUsp from '../../images/logos/logo-usp.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    margin: 0 36px;
`

const LogoImage = styled.img`
    width: 130px;
    height: 53px;
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