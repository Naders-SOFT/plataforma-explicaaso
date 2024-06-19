import styled from 'styled-components';
import BlocoBlog from "../BlocoBlog";
import placeholder from "../../../images/sobre_nos/placeholder.png";
import { jwtDecode } from 'jwt-decode';
import { getAttributesFromExtensions } from '@tiptap/react';

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
`

const TitulosPosts = ["A educação no Brasil", "Como estudar para os Vestibulares"]
const TextosPosts = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt rem odit quis quaerat. In dolorem praesentium velit ea esse consequuntur cum fugit sequi voluptas ut possimus voluptatibus deserunt nisi eveniet!Lorem ipsum dolor sit amet, consecteturadipisicing elit. Dolorem voluptates vel dolorum autem ex repudiandae iste quasi. Minima explicabo qui necessitatibus porro nihil aliquid deleniti ullam repudiandae dolores corrupti eaque.",
                     "Oi! Este é um teste de texto do blog. Para ser mais exato, é um teste de como fica a prévia da postagem! Por enquanto, tudo ocorrendo bem. Quero continuar escrevendo até chegar no limite. Lero lero lero, como vai você? Lero lero lero blablabla pipipipopopo ainda nao mas muito legal que foda. Mas e agora, para onde vamos? Ainda temos algumas linhas porque coloquei como limite de 10. Quase em 10, vamos lá time uhuuu não aguento mais isso que saco quando acaba estou quase e agora ja acabou"]

function ContainerInfo({ isMobile, TitulosPosts, TextosPosts }) {
    const token = localStorage.getItem('token');
    const editor = token ? jwtDecode(token).tipoUsuario : false;
    
    return (
        <ContainerPag>
            <TITLEPAG $isMobile={isMobile}>Postagens</TITLEPAG>
            {(editor == 'administrador' || editor == 'professor') &&
            {(editor == 'administrador' || editor == 'professor') &&
            <BTDIV $isMobile={isMobile}>
                <BTADICIONAR $isMobile={isMobile}>Criar Post</BTADICIONAR>
            </BTDIV>
            }
            <BlocoBlog
                isMobile={isMobile}
                imgSrc={placeholder}
                imgAlt="placeholder"
                titulopost = {TitulosPosts[0]}
                textopost = {TextosPosts[0]}
                editor={editor}
             />

            {/* <BlocoBlog
                isMobile={isMobile}
                imgSrc={placeholder}
                imgAlt="placeholder"
                titulopost = {TitulosPosts[1]}
                textopost = {TextosPosts[1]}
                editor={editor}
             /> */}
        </ContainerPag>
    )
}

export default ContainerInfo;
