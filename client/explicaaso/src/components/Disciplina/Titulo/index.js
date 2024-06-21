import styled from "styled-components";

const TituloContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem; /* Ajustando o padding para rem */
    background-color: #002549;
    font-family: 'Inter', sans-serif;
`;

const TituloNomeDisciplina = styled.h1`
    font-size: 1.5rem; /* Ajustando o tamanho da fonte para rem */
    color: white;
    margin: 0; /* Removendo margens padrão */
`;

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
