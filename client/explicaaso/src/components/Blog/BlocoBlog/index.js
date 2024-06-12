import styled from "styled-components";

/**
 * Container das informações do cursinho.
 */
const BlocoInfo = styled.div`
    align-items: center;
    background-color: #003466;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 50px;
    width: ${({$isMobile}) => ($isMobile ? '70%' : '90%')};
`

const TITLEPOST = styled.h3`
    margin: 3% 5%;
    color: white;
    font-size: ${({$isMobile}) => $isMobile ? "25px" : "40px"};
    margin-bottom: ${({$isMobile}) => $isMobile ? "auto" : "0"};
`

const TEXTOPOST = styled.p`
    font-size: ${({$isMobile}) => $isMobile ? "20px" : "30px"};
    margin: 5%;
    text-align: ${({$isMobile}) => $isMobile ? "flex-start" : "justify"};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;

`


const DIVIMG = styled.div`
    display: flex;
    flex-direction: ${({$isMobile}) => $isMobile ? "column" : "row"};
    align-items: center;
    color: white;
`

const IMG = styled.img`
    width: 40%;
    border-radius: 8px;
    margin: 5% 5% 5% 5%;
    display: flex;
    justify-content: center;

    @media(min-width: 768px) and (max-width: 916px){
        display: none;
    }
`

const LERMAIS = styled.a`
    color: white;
    font-size: ${({$isMobile}) => $isMobile ? "30px" : "40px"};
    margin: 2%;
    text-align: ${({$isMobile}) => $isMobile ? "flex-start" : "justify"};

    &:link {
        color: white;
    }

    &:visited {
        color: white;
    }

    &:hover {
      background-color: #FFCC00;
    }

   
`

const BUTTON = styled.button`
    width: 20%;
    margin: ${({$isMobile}) => $isMobile ? "3% 0" : "3% 0"};
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


function BlocoBlog(props) {
    return(
        <BlocoInfo $isMobile={props.isMobile}>
            <TITLEPOST $isMobile={props.isMobile}>{props.titulopost}</TITLEPOST>
            <DIVIMG $isMobile={props.isMobile}>
                <TEXTOPOST $isMobile={props.isMobile}>{props.textopost}</TEXTOPOST>
                <IMG src={props.imgSrc} alt={props.imgAlt}/>
            </DIVIMG>
            <BUTTON $isMobile={props.isMobile}>Ler mais</BUTTON>
            {props.editor && 
            <BUTTON $isMobile={props.isMobile}>Editar</BUTTON>
            }
        </BlocoInfo>
    );
}

export default BlocoBlog;