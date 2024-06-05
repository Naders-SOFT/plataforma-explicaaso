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
    width: 20%;
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
const TextosPosts = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id pharetra odio, et dictum lectus. Curabitur mollis ex sit amet erat condimentum commodo. Nunc ac tellus lectus. Duis a nisl.",
                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id pharetra odio, et dictum lectus. Curabitur mollis ex sit amet erat condimentum commodo. Nunc ac tellus lectus. Duis a nisl."]

function ContainerInfo(props) {
    let editor = true;

    return (
        <ContainerPag>
            <TITLEPAG $isMobile={props.isMobile}>Blog</TITLEPAG>
            <BTDIV>
                <BTADICIONAR $isMobile={props.isMobile}>Criar Post</BTADICIONAR>
            </BTDIV>
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