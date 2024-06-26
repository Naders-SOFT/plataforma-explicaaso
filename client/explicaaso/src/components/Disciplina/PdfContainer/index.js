import styled from 'styled-components';
import Avisos from '../Pdfs';
import SideBar from '../../Aluno/SideBar'

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
    gap: 2%;
`
const Container = styled.div`
    width: 100%;
`

function AvisosContainer(props) {
    // console.log(props.tituloDisciplina, props.tituloFrente)
    return (
        <Container>
            {
                props.isMobile &&
                <MOBLINFO>
                    <SideBar isMobile={props.isMobile} botoes={props.botoes}/>
                    <Avisos isMobile={props.isMobile} tituloDisciplina={props.tituloDisciplina} tituloFrente={props.tituloFrente}></Avisos>
                </MOBLINFO>
            }
            {
                !props.isMobile &&
                <DSKINFO>
                    <SideBar isMobile={props.isMobile} imgPerfil={props.imgPerfil} botoes={props.botoes}/>
                    <Avisos isMobile={props.isMobile} tituloDisciplina={props.tituloDisciplina} tituloFrente={props.tituloFrente}></Avisos>
                </DSKINFO>
            }

        </Container>
    );
}

export default AvisosContainer;