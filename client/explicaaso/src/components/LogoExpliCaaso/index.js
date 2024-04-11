import logoExpliCaaso from '../../images/logos/logo-explicaaso.png';
import styled from 'styled-components';


const LogoExpliCaasoContainer = styled.div`
    margin-right: 56px;
`

const LogoExpliCaasoImg = styled.img`
    width: 90px;
    height: 90px;
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