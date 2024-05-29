import styled from "styled-components";


const BlocoInfo = styled.div`
    align-items: center;
    background-color: #003466;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 50px;
    width: 100%;
`

const MOBLTITLE = styled.h2`
    color: #FF6600;
    font-size: 40px;
    width: 100%;   
    text-align: center;
    margin: 5% 5% 2% 5%;
`

const DSKTITLE = styled.h2`
    color: #FF6600;
    font-size: 60px;
    width: 100%;
    text-align: center;
    margin: 5% 5% 2% 5%;
    
`

const MOBTITLEPOST = styled.h3`
    color: white;
    font-size: 25px;
`
const DSKTITLEPOST = styled.h3`
    color: white;
    font-size: 40px;
`
const MOBITEXT = styled.p`
    color: white;
    font-size: 20px;
    margin: 5% 5% 5% 5%;

`

const DSKTEXT = styled.p`
    color: white;
    font-size: 35px;
    margin: 1% 3% 3% 3%;

`

const DSKDIVIMG = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`

const MOBIDIVIMG = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

`

const MOBIIMG = styled.img`
    border-radius: 8px;
    margin: 5% 5% 5% 5%;
    width: 90%;
`

const DSKIMG = styled.img`
    border-radius: 8px;
    margin: 0% 5% 5% 5%;
    width: 40%;

`



function BlocoPost(props) {
    return(
        <BlocoInfo $isMobile={props.isMobile}>
            {/* Disposição mobile da página */}
    

            {props.isMobile &&    
            <MOBLTITLE>{props.titulopost}</MOBLTITLE>}

            {props.isMobile &&
                <MOBIIMG src={props.imgSrc} alt={props.imgAlt}/>
            }

            {props.isMobile &&    
                <MOBITEXT>{props.textopost}</MOBITEXT>
            }
            
            {!props.isMobile &&    
            <DSKTITLE>{props.titulopost}</DSKTITLE>}

            {!props.isMobile &&
                <DSKIMG src={props.imgSrc} alt={props.imgAlt}/>
            }

            {!props.isMobile &&    
            <DSKTEXT>{props.textopost}</DSKTEXT>}
        </BlocoInfo>
    );
}

export default BlocoPost;