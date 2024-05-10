import styled from 'styled-components'

const MOBLAVISOS = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px;
`

const Container = styled.div`
    width: 100%;
`

function Avisos(props) {
    return (
        <Container>
            {props.isMobile &&
                <MOBLAVISOS>BABUAS</MOBLAVISOS>
            }

        </Container>
    );

}

export default Avisos;