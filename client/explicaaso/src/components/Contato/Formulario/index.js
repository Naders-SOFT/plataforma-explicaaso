import styled from 'styled-components';

const ContainerFormulario = styled.form`
    height: 100%;
    width: 100%;
`;

const DSKCONTACTINFO = styled.div`
    display: flex;
    gap: 2.25vw;
`;

const DSKDIV = styled.div`
    display: flex;
    flex-direction: column;
`;

const DSKFORM = styled.form`
    align-text: center;
    align-items: center;
`;

const DSKINPUTFIELD = styled.input`
    background-color: #319190;
    border: 1px solid #CCCCCC;
    border-radius: 6px;
    margin-bottom: 2.5vh;
    height: 5vh;
    width: 15vw;
    color: white;
    padding: 1vh;
`;

const DSKLABEL = styled.label`
    color: #FF6600;
    margin-bottom: 2.5vh;
`;

const DSKSUBMITBUTTON = styled.button`
    background-color: #FF6600;
    border: 1px solid #CCCCCC;
    border-radius: 6px;
    color: #FFFFFF;
    cursor: pointer;
    margin-bottom: 2.5vh;
    height: 7.5vh;
    width: 33vw;
`;

const DSKTEXTAREA = styled.textarea`
    background-color: #319190;
    border: 1px solid #CCCCCC;
    border-radius: 6px;
    margin-bottom: 2.5vh;
    height: 20vh;
    width: 32.5vw;
    color: white;
    padding: 1vh;
`;

const MOBCONTACTINFO = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5vh;
`;

const MOBDIV = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const MOBFORM = styled.form`
    align-text: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const MOBINPUTFIELD = styled.input`
    background-color: #319190;
    border: 1px solid #CCCCCC;
    border-radius: 6px;
    margin-bottom: 2.5vh;
    height: 7.5vh;
    width: 60vw;
    color: white;
    padding: 1vh;
`;

const MOBLABEL = styled.label`
    color: #FF6600;
    margin-bottom: 2.5vh;
`;

const MOBSUBMITBUTTON = styled.button`
    background-color: #FF6600;
    border: 1px solid #CCCCCC;
    border-radius: 6px;
    color: #FFFFFF;
    cursor: pointer;
    height: 7.5vh;
    width: 60vw;
`;

const MOBTEXTAREA = styled.textarea`
    background-color: #319190;
    border: 1px solid #CCCCCC;
    border-radius: 6px;
    margin-bottom: 2.5vh;
    height: 20vh;
    width: 60vw;
    color: white;
    padding: 1vh;
`;

function Formulario(props) {
    return (
        <ContainerFormulario>

            {/* Disposição mobile da página */}
            {props.isMobile &&
                <MOBFORM>
                    <MOBCONTACTINFO>
                        <MOBDIV>
                            <MOBLABEL htmlFor="name">Nome</MOBLABEL>
                            <MOBINPUTFIELD type="text" id="name" name="name" required />
                        </MOBDIV>
                        <MOBDIV>
                            <MOBLABEL htmlFor="email">Email</MOBLABEL>
                            <MOBINPUTFIELD type="email" id="email" name="email" required />
                        </MOBDIV>
                    </MOBCONTACTINFO>
                    <MOBDIV>
                        <MOBLABEL htmlFor="message">Mensagem</MOBLABEL>
                        <MOBTEXTAREA id="message" name="message" rows="5" required></MOBTEXTAREA>
                    </MOBDIV>
                    <MOBSUBMITBUTTON type="submit">Enviar</MOBSUBMITBUTTON>
                </MOBFORM>
            }

            {/* Disposição desktop da página */}
            {!props.isMobile &&
                <DSKFORM>
                    <DSKCONTACTINFO>
                        <DSKDIV>
                            <DSKLABEL htmlFor="name">Nome</DSKLABEL>
                            <DSKINPUTFIELD type="text" id="name" name="name" required />
                        </DSKDIV>
                        <DSKDIV>
                            <DSKLABEL htmlFor="email">Email</DSKLABEL>
                            <DSKINPUTFIELD type="email" id="email" name="email" required />
                        </DSKDIV>
                    </DSKCONTACTINFO>
                    <DSKDIV>
                        <DSKLABEL htmlFor="message">Mensagem</DSKLABEL>
                        <DSKTEXTAREA id="message" name="message" rows="5" required></DSKTEXTAREA>
                    </DSKDIV>
                    <DSKSUBMITBUTTON type="submit">Enviar</DSKSUBMITBUTTON>
                </DSKFORM>
            }

        </ContainerFormulario>
    );
}

export default Formulario;
