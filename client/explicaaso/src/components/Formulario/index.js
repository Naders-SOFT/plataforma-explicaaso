import styled from 'styled-components';

const ContainerFormulario = styled.form`
    align-text: center;
    align-items: center;

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

const ContactInfo = styled.div`
    display: flex;
    gap: 7.5%;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 10%;
    }
`;

const InputField = styled.input`
    background-color: #319190;
    border: 1px solid #CCCCCC;
    border-radius: 6px;
    margin-bottom: 5%;
    padding: 5%;
    width: 100%;

    @media only screen and (max-width: 768px) {
        padding: 10px 10px;
        width: 200px;
    }
`;

const Label = styled.label`
    color: #FF6600;
    margin-bottom: 5px;
`;

const SubmitButton = styled.button`
    background-color: #FF6600;
    border: 1px solid #CCCCCC;
    border-radius: 6px;
    color: #FFFFFF;
    cursor: pointer;
    height: 100%;
    padding: 10px 20px;
    width: 60vh;

    &:hover {
        background-color: #FF6600;
    }

    @media only screen and (max-width: 768px) {
        width: 220px;
    }
`;

const TextArea = styled.textarea`
    background-color: #319190;
    border: 1px solid #CCCCCC;
    border-radius: 6px;
    margin-bottom: 10px;
    padding: 10px;
    width: 60vh;

    @media only screen and (max-width: 768px) {
        padding: 10px 10px;
        width: 200px;
    }
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`;

function Formulario() {
    return (
        <ContainerFormulario>
            <ContactInfo>
                <Div>
                    <Label htmlFor="name">Nome</Label>
                    <InputField type="text" id="name" name="name" required />
                </Div>
                <Div>
                    <Label htmlFor="email">Email</Label>
                    <InputField type="email" id="email" name="email" required />
                </Div>
            </ContactInfo>
                <Div>
                    <Label htmlFor="message">Mensagem</Label>
                    <TextArea id="message" name="message" rows="5" required></TextArea>
                </Div>
        <SubmitButton type="submit">Enviar</SubmitButton>
    </ContainerFormulario>
    );
}

export default Formulario;