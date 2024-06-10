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
    width: ${({isMobile}) => (isMobile ? '70%' : '90%')};
`

const MOBLTITLE = styled.h2`
    color: #FF6600;
    font-size: 40px;
    width: 100%;
    
    text-align: center;
    margin: 5% 5% 5% 5%;
    bottom: 3%;
`

const DSKTITLE = styled.h2`
    color: #FF6600;
    font-size: 40px;
    text-align: center;
    margin: 3% 5% 0% 5%;
    
`

const LISTA = styled.ul`
    color: white;
    margin-bottom: 5%;
`

const MOBLI = styled.li`
    color: white;
    list-style: none;
    font-size: 25px;

`

const DSKLI = styled.li`
    color: white;
    list-style: none;
    font-size: 35px;

`

function BlocoNoticia(props) {
    return(
        <BlocoInfo $isMobile={props.isMobile}>
            {/* Disposição mobile da página */}
    
            {props.isMobile &&
            <MOBLTITLE>{props.titulo}</MOBLTITLE>}
            {props.isMobile && 
            <LISTA>{props.noticias.map((noticia, index) => (
                <MOBLI key = {index}>{noticia}</MOBLI>
            ))}</LISTA>}


            {/* Disposição desktop da página */}
            {!props.isMobile &&    
            <DSKTITLE>{props.titulo}</DSKTITLE>}

            {!props.isMobile &&
            <LISTA>{props.noticias.map((noticia, index) => (
                <DSKLI key = {index}>{noticia}</DSKLI>
            ))}</LISTA>}
            
            
        </BlocoInfo>
    );
}

export default BlocoNoticia;