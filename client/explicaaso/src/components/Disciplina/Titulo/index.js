import styled from "styled-components";

const TituloContainer = styled.div`
    width: 100%;
    display: flex;
    color: white;
    gap: 2%;
    justify-content: flex-start;
    align-items: center;
    padding: 1vw;
    background-color: #002549;
    font-family: 'Inter';
`

const TituloNomeDisciplina = styled.h1`
    font-size: 200%;
    color: white;
`

function TituloDisciplina(props) {
    return (
        <TituloContainer>
            <TituloNomeDisciplina>
                {props.tituloDisciplina}
            </TituloNomeDisciplina>
        </TituloContainer>
    );
}

export default TituloDisciplina;