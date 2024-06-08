import styled from 'styled-components';
import { CiInstagram, CiMail } from "react-icons/ci";

const ContainerFormulario = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column; /* Botões empilhados verticalmente */
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
`;

const ButtonLink = styled.a`
    background-color: ${props => props.instagram ? "#F8BBC8" : "darkcyan"};
    border: none;
    border-radius: 8px;
    color: #FFFFFF;
    cursor: pointer;
    height: 6rem;
    width: 16rem; /* Comprimento aumentado dos botões */
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

const ButtonIcon = styled.div`
    font-size: 2.5rem;
`;

function Formulario(props) {
    return (
        <ContainerFormulario>
            <ButtonContainer>
                <ButtonLink href="mailto:seuemail@example.com">
                    <ButtonIcon><CiMail /></ButtonIcon>
                </ButtonLink>
                <ButtonLink href="https://www.instagram.com/seuinstagram/" instagram>
                    <ButtonIcon><CiInstagram /></ButtonIcon>
                </ButtonLink>
            </ButtonContainer>
        </ContainerFormulario>
    );
}

export default Formulario;
