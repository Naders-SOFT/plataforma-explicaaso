import styled from 'styled-components'
import ItemAviso from '../ItemAviso';
import TituloDisciplina from '../Titulo';
import ItemAdicionar from '../ItemAdicionar';
import Naosei from './naosei';
import NewPost from './naosei2';

const AvisosPainel = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0px;
    ${'' /* flex-direction: column; */}
    align-items: center;
    justify-content: flex-start;
    margin: 0px;
`

const Container = styled.div`
    width: 100%;
`

function Avisos(props) {
    return (
        <Container>
            {
                props.isMobile &&
                <AvisosPainel>
                    <TituloDisciplina tituloDisciplina={props.tituloDisciplina}/>
                    <ItemAviso tituloAviso="sei la porra mobile"/>
                    <ItemAviso tituloAviso="sei la porra mobile2"/>

                </AvisosPainel>
            }
            {
                !props.isMobile &&
                <AvisosPainel>
                    <TituloDisciplina tituloDisciplina={props.tituloDisciplina}/>
                    <ItemAdicionar/>
                    <ItemAviso tituloAviso="sei la porra"/>
                    <ItemAviso tituloAviso="sei la porra2"/>
                    <NewPost></NewPost>
                </AvisosPainel>
            }
        </Container>
    );

}

export default Avisos;