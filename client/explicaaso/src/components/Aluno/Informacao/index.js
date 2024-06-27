import styled from 'styled-components';
import SideBar from '../SideBar';
import ContainerMateria from '../Materias';

const Info = styled.div`
  display: ${({ $isMobile }) => ($isMobile ? 'flex' : 'grid')};
  flex-direction: ${({ $isMobile }) => ($isMobile ? 'column' : 'row')};
  flex-wrap: wrap;
  align-items: ${({ $isMobile }) => ($isMobile ? 'right' : 'stretch')}; 
  justify-content: ${({ $isMobile }) => ($isMobile ? 'right' : 'flex-start')}; 
  grid-template-columns: ${({ $isMobile }) =>
    $isMobile ? 'none' : '1fr 8fr'};
  gap: ${({ $isMobile }) => ($isMobile ? '0' : '2%')}; 
  overflow: auto;
  min-height: 100%;
  width: 100%;
`;

const Container = styled.div`
    width: 100%;
    ${'' /* height: 100%; */}
`
function Informacao(props) {
    return (
        <Container>
            <Info $isMobile={props.isMobile}>
                <SideBar isMobile={props.isMobile} imgPerfil={props.imgPerfil} botoes={props.botoes}/>
                <ContainerMateria isMobile={props.isMobile} />
            </Info>
        </Container>
    );
}

export default Informacao;
