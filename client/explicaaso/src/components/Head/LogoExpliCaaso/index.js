import logoExpliCaaso from '../../../images/logos/logo-explicaaso.png';
import styled from 'styled-components';


const LogoExpliCaasoContainer = styled.div`
    width: auto;
    margin: 0 15px;
`

const LogoExpliCaasoImg = styled.img`
    width: 75px;
    height: 75px;

    @media (min-width: 861px) and (max-width: 1050px) {
        width: 60px;
        height: 60px;
    }
    
    @media (max-width: 860px) {
        width: 54px;
        height: 54px;
    }
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