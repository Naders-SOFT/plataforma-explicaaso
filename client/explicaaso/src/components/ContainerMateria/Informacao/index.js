import styled from 'styled-components';
import SideBar from '../SideBar';
import ContainerMateria from '..';

const MOBLINFO = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
`

const DSKINFO = styled.div`
    display: grid;
    grid-template-columns: 1fr 8fr;
    flex-wrap: wrap;
`
const Container = styled.div`
    width: 100%;
`

function Informacao(props) {
    return (
        <Container>
            {
                props.isMobile &&
                <MOBLINFO>
                    <SideBar isMobile={props.isMobile}/>
                    <ContainerMateria isMobile={props.isMobile}/>
                </MOBLINFO>
            }
            {
                !props.isMobile &&
                <DSKINFO>
                    <SideBar isMobile={props.isMobile} imgPerfil={props.imgPerfil}/>
                    <ContainerMateria isMobile={props.isMobile}/>
                </DSKINFO>
            }

        </Container>
    );
}

export default Informacao;