import styled from 'styled-components';
import SideBar from '../SideBar';
import ContainerMateria from '../Materias';

const MOBLINFO = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: right;
    justify-content: right;
    width: 100%;
    height: 100%;
`

const DSKINFO = styled.div`
    display: grid;
    grid-template-columns: 1fr 8fr;
    flex-wrap: wrap;
    gap: 2%;
    padding: 1% 1% 1% 0px;
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
                    <SideBar isMobile={props.isMobile} botoes={props.botoes}/>
                    <ContainerMateria isMobile={props.isMobile} materias={props.materias}/>
                </MOBLINFO>
            }
            {
                !props.isMobile &&
                <DSKINFO>
                    <SideBar isMobile={props.isMobile} imgPerfil={props.imgPerfil} botoes={props.botoes}/>
                    <ContainerMateria isMobile={props.isMobile} materias={props.materias}/>
                </DSKINFO>
            }
        </Container>
    );
}

export default Informacao;