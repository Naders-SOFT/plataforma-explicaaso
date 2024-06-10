import styled from 'styled-components';
import BlocoNoticia from "../BlocoNoticia";
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

const noticias = ["Divulgadas as datas FUVEST 2024", "Divulgadas as datas UNICAMP 2024",
                  "Inscrições para o Explicaaso começaram!"]

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
            noticias = {noticias}
            editor = {editor}
             />

        </ContainerPag>
    )
}

export default ContainerInfo;