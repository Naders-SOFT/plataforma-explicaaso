import Formulario from '../components/Contato/Formulario';
import Mapa from '../components/Contato/Mapa';
import styled from 'styled-components';

const CONTAINERCONTATO = styled.div`
    height: 100%;
    width: 100%;
`;

const DSKCONTATO = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5vw;
    width: 60vw;
`;

const DSKDIV = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0vh;
`;

const DSKH2 = styled.h2`
    color: #FF6600;
    font-size: 5vw;
    width: 45vw;
`;

const DSKH3 = styled.h3`
    color: #FF6600;
    font-size: 3vw;
    width: 40vw;
`;

const DSKP = styled.p`
    color: #828282;
    width: 40vw;
`;

const DSKSTYLCONTACTFORM = styled.div`
    margin: 5vh;
`;

const MOBCONTATO = styled.div`
    display: flex;
    gap: 10%;
    padding: 5%;
    width: 60%;
    flex-direction: column;
    align-items: center;
    margin-left: 15%;
`;

const MOBDIV = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const MOBH2 = styled.h2`
    color: #FF6600;
    font-size: 50px;
    margin-top: 0;
    width: 100%;
    text-align: center;
`;

const MOBH3 = styled.h3`
    color: #FF6600;
    margin-top: 0;
    font-size: 30px;
    width: 100%;
    text-align: center;
`;

const MOBP = styled.p`
    color: #828282;
    text-align: center;
`;

const MOBSTYLCONTACTFORM = styled.div`
    padding: 5%;
    width: 100%;
    max-width: 100%;
    align-items: center;
`;

function PaginaContato(props) {
    return (
        <CONTAINERCONTATO>
            {/* Disposição mobile da página */}
            {props.isMobile &&
            <MOBCONTATO>
                <MOBSTYLCONTACTFORM>
                    <MOBH2>Entre em contato</MOBH2>
                        <MOBP>
                            Ficamos felizes em ouvir de você!
                            <br />
                            Se você tem alguma dúvida, sugestão ou  apenas quer dizer "olá",
                            <br />
                            não hesite em nos contatar.
                            <br />
                            Preencha o formulário abaixo
                            <br />
                            e entraremos em contato o mais breve possível.
                        </MOBP>
                        <Formulario isMobile={props.isMobile}/>
                </MOBSTYLCONTACTFORM>
                    <MOBDIV>
                        <Mapa isMobile={props.isMobile}/>
                        <MOBH3>Endereço</MOBH3>
                        <MOBP>
                            Av. Trab. São Carlense
                            <br />
                            400 - Parque Arnold Schimidt
                            <br />
                            13566-590
                            <br />
                            </MOBP>
                    </MOBDIV>
            </MOBCONTATO>
            }

            {/* Disposição desktop da página */}
            {!props.isMobile &&
            <DSKCONTATO>
                <DSKSTYLCONTACTFORM>
                    <DSKH2>Entre em contato</DSKH2>
                    <DSKP>
                        Ficamos felizes em ouvir de você!
                        <br />
                        Se você tem alguma dúvida, sugestão ou  apenas quer dizer "olá",
                        <br />
                        não hesite em nos contatar.
                        <br />
                        Preencha o formulário abaixo
                        <br />
                        e entraremos em contato o mais breve possível.
                    </DSKP>
                    <Formulario isMobile={props.isMobile}/>
                </DSKSTYLCONTACTFORM>
                <DSKDIV>
                    <Mapa isMobile={props.isMobile}/>
                    <DSKH3>Endereço</DSKH3>
                    <DSKP>Av. Trab. São Carlense, 400 - Parque Arnold Schimidt, 13566-590</DSKP>
                </DSKDIV>
            </DSKCONTATO>
            }

        </CONTAINERCONTATO>
    );
}

export default PaginaContato;
