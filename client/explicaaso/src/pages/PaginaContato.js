import Formulario from '../components/Contato/Formulario';
import Mapa from '../components/Contato/Mapa';
import styled from 'styled-components';

const CONTAINERCONTATO = styled.div`
    height: 100%;
    width: 100%;
`;

const CONTATO = styled.div`
  display: flex;
  flex-direction: ${({$isMobile}) => ($isMobile ? 'column' : 'row')};
  gap: ${({$isMobile}) => ($isMobile ? '10%' : '6.25vw')};
  width: ${({$isMobile}) => ($isMobile ? '60%' : '60vw')};
  align-items: ${({$isMobile}) => ($isMobile ? 'center' : 'flex-start')};
  margin-left: ${({$isMobile}) => ($isMobile ? '15%' : '0')};
  padding: ${({$isMobile}) => ($isMobile ? '5%' : '0')};
`;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0vh;
  text-align: ${({$isMobile}) => ($isMobile ? 'center' : 'left')};
`;

const H2 = styled.h2`
  color: #FF6600;
  font-size: ${({$isMobile}) => ($isMobile ? '50px' : '5vw')};
  width: ${({$isMobile}) => ($isMobile ? '100%' : '45vw')};
  text-align: ${({$isMobile}) => ($isMobile ? 'center' : 'left')};
  margin-top: 0;
`;

const H3 = styled.h3`
  color: #FF6600;
  font-size: ${({$isMobile}) => ($isMobile ? '30px' : '3vw')};
  width: ${({$isMobile}) => ($isMobile ? '100%' : '40vw')};
  text-align: ${({$isMobile}) => ($isMobile ? 'center' : 'left')};
  margin-top: 0;
  margin-bottom: 0;
`;

const P = styled.p`
  color: #828282;
  width: ${({$isMobile}) => ($isMobile ? '100%' : '40vw')};
  text-align: center;
`;

const STYLCONTACTFORM = styled.div`
  margin: ${({$isMobile}) => ($isMobile ? '0' : '5vh')};
  padding: ${({$isMobile}) => ($isMobile ? '5%' : '0')};
  width: 100%;
  max-width: 100%;
  align-items: center;
`;

function PaginaContato(props) {
    return (
        <CONTAINERCONTATO>
            <CONTATO $isMobile={props.isMobile}>
                <STYLCONTACTFORM $isMobile={props.isMobile}>
                    <H2 $isMobile={props.isMobile}>Entre em contato</H2>
                    <P $isMobile={props.isMobile}>
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
                    <Formulario isMobile={props.isMobile}/>
                </STYLCONTACTFORM>
                <DIV $isMobile={props.isMobile}>
                    <Mapa isMobile={props.isMobile}/>
                    <H3 $isMobile={props.isMobile}>Endereço</H3>
                    <P $isMobile={props.isMobile}>Av. Trab. São Carlense, 400 - Parque Arnold Schimidt, 13566-590</P>
                </DIV>
            </CONTATO>
        </CONTAINERCONTATO>
    );
}

export default PaginaContato;
