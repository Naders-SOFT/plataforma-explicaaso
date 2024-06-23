import logoExpliCaaso from '../../../images/logos/logo-explicaaso.png';
import styled from 'styled-components';


const LogoExpliCaasoContainer = styled.div`
    width: auto;
    margin: 0 15px;
    z-index: 1;
`

const LogoExpliCaasoImg = styled.img`
    width: ${props => props.size || '75px'};
    height: ${props => props.size || '75px'};

    @media (min-width: 861px) and (max-width: 1116px) {
        width: ${props => props.size || '60px'};
        height: ${props => props.size || '60px'};
    }
    
    @media (max-width: 860px) {
        width: ${props => props.size || '54px'};
        height: ${props => props.size || '54px'};
    }
`


function LogoExpliCaaso(props) {
    return (
        <LogoExpliCaasoContainer>
            <LogoExpliCaasoImg
                src={logoExpliCaaso}
                alt="Logo do ExpliCaaso"
                size={props.size}
            />
        </LogoExpliCaasoContainer>
    );
}

export default LogoExpliCaaso;