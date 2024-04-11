import logoExpliCaaso from '../../images/logos/logo-explicaaso.png';
import styled from 'styled-components';


const LogoExpliCaasoContainer = styled.div`

`

const LogoExpliCaasoImg = styled.img`

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