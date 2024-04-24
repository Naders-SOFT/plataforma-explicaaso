import Formulario from '../Formulario'
import Mapa from '../Mapa'
import styled from 'styled-components';

const ContainerContato = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10%;
    padding: 5%;
    width: 60%;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin-left: 15%;
    }
`;

const StyledContactForm = styled.div`
    padding: 5%;

    @media only screen and (max-width: 768px) {
        width: 100%;
        max-width: 100%;
        align-items: center;
    }
`;

const H2 = styled.h2`
    color: #FF6600;
    font-size: 50px;
    margin-top: 0;
    width: 500px;

    @media only screen and (max-width: 768px) {
        font-size: 30px;
        width: 100%;
        text-align: center;
    }
`;

const H3 = styled.h3`
    color: #FF6600;
    font-size: 30px;
    margin-top: 0;
    width: 500px;

    @media only screen and (max-width: 768px) {
        font-size: 30px;
        width: 100%;
        text-align: center;
    }
`;

const P = styled.p`
    color: #828282;

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`;

function PaginaContato(props) {
    return (
        <ContainerContato>
            <StyledContactForm>
                <H2>Entre em contato</H2>
                <P>
                    Ficamos felizes em ouvir de você!
                    <br />
                    Se você tem alguma dúvida, sugestão ou  apenas quer dizer "olá",
                    <br />
                    não hesite em nos contatar.
                    <br />
                    Preencha o formulário abaixo
                    <br />
                    e entraremos em contato o mais breve possível.
                </P>
                <Formulario />
            </StyledContactForm>
            <Div>
                <Mapa />
                <H3>Endereço</H3>
                <P>endereço</P>
            </Div>
        </ContainerContato>
    );
}

export default PaginaContato;
