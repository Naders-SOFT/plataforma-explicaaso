import styled from 'styled-components';
import BlocoNoticia from "../BlocoNoticia";

const ContainerPag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
`;

const TITLEPAG = styled.h2`
  color: #FF6600;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const BTDIV = styled.div`
    width: ${({$isMobile}) => ($isMobile ? '70%' : '90%')};
    display: flex;
    alig-items: center;
    justify-content: flex-end;
`

const BTADICIONAR = styled.button`
  width: ${({ $isMobile }) => ($isMobile ? '80%' : '20%')};
  margin: 20px 0;
  padding: 10px 0;
  background-color: #FFCC00;
  border: none;
  border-radius: 10px;
  color: #003466;
  font-size: ${({ $isMobile }) => ($isMobile ? '1rem' : '1.2rem')};
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffbf00;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin: 10px 0;
`;

const Link = styled.a`
  color: #005bb5;
  text-decoration: none;
  font-size: ${({ $isMobile }) => ($isMobile ? '1rem' : '1.1rem')};
  font-family: 'Helvetica Neue', sans-serif;
  transition: color 0.3s;

  &:hover {
    color: #FF69B4;
    text-decoration: underline;
  }

  &:focus, &:active {
    color: #003366;
    outline: none;
    text-decoration: underline;
  }
`;

const noticias = [
  <ListItem key="1"><Link href="#">Divulgadas as datas FUVEST 2024</Link></ListItem>,
  <ListItem key="2"><Link href="#">Divulgadas as datas UNICAMP 2024</Link></ListItem>,
  <ListItem key="3"><Link href="#">Inscrições para o Explicaaso começaram</Link></ListItem>,
  <ListItem key="4"><Link href="#">Conheça a nova plataforma do Explicaaso</Link></ListItem>
];

function ContainerInfo(props) {
  let editor = true;

  return (
    <ContainerPag>
      <TITLEPAG $isMobile={props.isMobile}>Notícias</TITLEPAG>
      <BTDIV $isMobile={props.isMobile}>
        <BTADICIONAR $isMobile={props.isMobile}>Criar Notícia</BTADICIONAR>
      </BTDIV>
      <BlocoNoticia
        isMobile={props.isMobile}
        noticias={noticias}
        editor={editor}
      />
    </ContainerPag>
  );
}

export default ContainerInfo;
