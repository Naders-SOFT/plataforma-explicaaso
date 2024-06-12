import styled from 'styled-components';
import BlocoBlog from "../BlocoBlog";
import placeholder from "../../../images/sobre_nos/placeholder.png"

const ContainerPag = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`

const TITLEPAG = styled.h2`
    color: #FF6600;
    font-size: 40px;
    width: 100%;
    
    text-align: center;
    margin: ${($isMobile) => $isMobile ? "5%" : "3% 5% 0% 5%"};
    bottom: ${($isMobile) => $isMobile ? "3%" : "auto"};
`

const BTDIV = styled.div`
    width: ${({$isMobile}) => ($isMobile ? '70%' : '90%')};
    display: flex;
    alig-items: center;
    justify-content: flex-end;
`

const BTADICIONAR = styled.button`
    width: 25%;
    margin: 0 1%;
    padding: ${({$isMobile}) => $isMobile ? "1% 0" : "1% 0"};
    background-color: #FFCC00;
    border: none;
    border-radius: 10px;
    color: #003466;
    font-size: ${({$isMobile}) => $isMobile ? "20px" : "30px"};
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
`

const TitulosPosts = ["A educação no Brasil", "Como estudar para os Vestibulares"]
const TextosPosts = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt rem odit quis quaerat. In dolorem praesentium velit ea esse consequuntur cum fugit sequi voluptas ut possimus voluptatibus deserunt nisi eveniet!Lorem ipsum dolor sit amet, consecteturadipisicing elit. Dolorem voluptates vel dolorum autem ex repudiandae iste quasi. Minima explicabo qui necessitatibus porro nihil aliquid deleniti ullam repudiandae dolores corrupti eaque.",
                     "Oi! Este é um teste de texto do blog. Para ser mais exato, é um teste de como fica a prévia da postagem! Por enquanto, tudo ocorrendo bem. Quero continuar escrevendo até chegar no limite. Lero lero lero, como vai você? Lero lero lero blablabla pipipipopopo ainda nao mas muito legal que foda. Mas e agora, para onde vamos? Ainda temos algumas linhas porque coloquei como limite de 10. Quase em 10, vamos lá time uhuuu não aguento mais isso que saco quando acaba estou quase e agora ja acabou"]

function ContainerInfo(props) {
    let editor = true;

    return (
        <ContainerPag>
            <TITLEPAG $isMobile={props.isMobile}>Postagens</TITLEPAG>
            {editor &&
            <BTDIV $isMobile={props.isMobile}>
                <BTADICIONAR $isMobile={props.isMobile}>Criar Post</BTADICIONAR>
            </BTDIV>
            }
            <BlocoBlog
                isMobile={props.isMobile}
                imgSrc={placeholder}
                imgAlt="placeholder"
                titulopost = {TitulosPosts[0]}
                textopost = {TextosPosts[0]}
                editor={editor}
             />

            <BlocoBlog
                isMobile={props.isMobile}
                imgSrc={placeholder}
                imgAlt="placeholder"
                titulopost = {TitulosPosts[1]}
                textopost = {TextosPosts[1]}
                editor={editor}
             />
        </ContainerPag>
    )
}

export default ContainerInfo;