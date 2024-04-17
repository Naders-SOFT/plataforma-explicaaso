import logoExpliCaaso from '../../images/logos/logo-explicaaso.png';
import styled from 'styled-components';


const LogoExpliCaasoContainer = styled.div`
    margin: 0 15%;
`

const LogoExpliCaasoImg = styled.img`
    width: 75px;
    height: 75px;
`


function LogoExpliCaaso() {
    return (
        <LogoExpliCaasoContainer>
            <LogoExpliCaasoImg
                src={logoExpliCaaso}
                alt="Logo do ExpliCaaso"
            />
        </LogoExpliCaasoContainer>
    );
}

export default LogoExpliCaaso;