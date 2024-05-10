import styled from 'styled-components'
import ItemAviso from '../ItemAviso';

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
                <ItemAviso tituloAviso="sei la porra mobile"/>
                </AvisosPainel>
            }
            {
                !props.isMobile &&
                <AvisosPainel>
                <ItemAviso tituloAviso="sei la porra"/>
                </AvisosPainel>
            }

        </Container>
    );

}

export default Avisos;