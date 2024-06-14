import styled from 'styled-components';
import instaIcon from '../../../images/redes_sociais/instagram-icon.png';

const FooterContainer = styled.div`
  height: 80px;
  width: auto;
  background-color: white;
  display: grid;
  margin: 22px 40px 30px 40px;
  column-gap: 20%;
`

const TituloFooter = styled.h3`
  color: #319190;
  font-size: 24px;
  font-weight: 400;
`

const Instagram = styled.img`
  grid-column: ${({$isMobile}) => ($isMobile ? '2' : '1')};
  grid-row: ${({$isMobile}) => ($isMobile ? '1' : '2')};
  margin: 24px 0 0 0;
  padding: 0;
  cursor: pointer;
`

const ContatoEmail = styled.div`
  grid-row: ${({$isMobile}) => ($isMobile ? '2' : '1')};
  grid-column: ${({$isMobile}) => ($isMobile ? '1' : '2')};
`

const ContatoTel = styled.div`
  grid-row: ${({$isMobile}) => ($isMobile ? '2' : '1')};
  grid-column: ${({$isMobile}) => ($isMobile ? '2' : '3')};
`

const LabelContato = styled.h3`
  color: #319190;
  font-size: 16px;
`

const DadoContato = styled.p`
  color: #454545;
  font-size: 16px;
`


function Footer(props) {

  return (
    <FooterContainer>
      <TituloFooter>ExpliCaaso</TituloFooter>
      {/* <Instagram src={instaIcon} $isMobile={props.isMobile}/> */}
      <ContatoEmail $isMobile={props.isMobile}>
        <LabelContato>Email</LabelContato>
        <DadoContato>explicaaso@gmail.com</DadoContato>
      </ContatoEmail>
      <ContatoTel $isMobile={props.isMobile}>
        <LabelContato>Telefone</LabelContato>
        <DadoContato>(16) 90000-0000</DadoContato>
      </ContatoTel>
    </FooterContainer>
  );
}

export default Footer;
