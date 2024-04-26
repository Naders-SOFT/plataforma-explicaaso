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
const MOBIIMGDIV = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin: 5% 5% 5% 5%;

`

const DSKIMGDIV = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    margin: 5% 5% 5% 5%;

`

const MOBIIMG = styled.img`
    width: 50%;
    border-radius: 8px;
    margin-bottom: 5%;


`


const DSKIMG = styled.img`
    width: 20%;
    border-radius: 8px;
    margin-left: 5%;

`

function BlocoNoticia(props) {
    return(
        <BlocoInfo $isMobile={props.isMobile}>
            {/* Disposição mobile da página */}
    

            {props.isMobile &&
            <MOBLTITLE>{props.titulo}</MOBLTITLE>}
            {props.isMobile &&
            <MOBIIMGDIV>
                <MOBIIMG src={`${props.imgSrc}`} alt={props.imgAlt}/>
                <MOBIIMG src={`${props.imgSrc}`} alt={props.imgAlt}/>
                <MOBIIMG src={`${props.imgSrc}`} alt={props.imgAlt}/>
            </MOBIIMGDIV>}
            


            {/* Disposição desktop da página */}
            {!props.isMobile &&    
            <DSKTITLE>{props.titulo}</DSKTITLE>}
            {!props.isMobile &&    
            <DSKIMGDIV>
                <DSKIMG src={`${props.imgSrc}`} alt={props.imgAlt}/>
                <DSKIMG src={`${props.imgSrc}`} alt={props.imgAlt}/>
                <DSKIMG src={`${props.imgSrc}`} alt={props.imgAlt}/>
            </DSKIMGDIV>}

            
            
            
        </BlocoInfo>
    );
}

export default BlocoNoticia;