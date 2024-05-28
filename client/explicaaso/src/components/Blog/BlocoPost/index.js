import styled from "styled-components";


const BlocoInfo = styled.div`
    align-items: center;
    background-color: #003466;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 50px;
    width: ${({isMobile}) => (isMobile ? '100%' : '100%')};
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

const MOBTITLEPOST = styled.h3`
    color: white;
    font-size: 25px;

`
const DSKTITLEPOST = styled.h3`
    color: white;
    font-size: 40px;
    margin-bottom: 0;

`
const MOBITEXT = styled.p`
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
    color: white;

`

const MOBIDIVIMG = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

`

const IMG = styled.img`
    border-radius: 8px;
    margin: 5% 5% 5% 5%;
    width: 90%;
`



function BlocoPost(props) {
    return(
        <BlocoInfo $isMobile={props.isMobile}>
            {/* Disposição mobile da página */}
    

            {props.isMobile &&    
            <MOBLTITLE>{props.titulopost}</MOBLTITLE>}

            {props.isMobile &&
            <DSKDIVIMG>
                <IMG src={props.imgSrc} alt={props.imgAlt}/>
            </DSKDIVIMG>
            }

            {props.isMobile &&    
            <MOBITEXT>{props.textopost}</MOBITEXT>}

            {/* {props.isMobile &&
            <MOBTITLEPOST>{props.titulosposts[0]}</MOBTITLEPOST>}

            {props.isMobile &&
            <MOBIDIVIMG>
                <MOBITEXTOPOST>{props.textosposts[0]}</MOBITEXTOPOST>
                <IMG src={props.imgSrc} alt={props.imgAlt}/>
            </MOBIDIVIMG>
            }

            {props.isMobile &&
            <MOBTITLEPOST>{props.titulosposts[1]}</MOBTITLEPOST>}

            {props.isMobile &&
            <MOBIDIVIMG>
                <MOBITEXTOPOST>{props.textosposts[1]}</MOBITEXTOPOST>
                <IMG src={props.imgSrc} alt={props.imgAlt}/>
            </MOBIDIVIMG>
            } */}

            
            {!props.isMobile &&    
            <DSKTITLE>{props.titulopost}</DSKTITLE>}

            {!props.isMobile &&
            <DSKDIVIMG>
                <IMG src={props.imgSrc} alt={props.imgAlt}/>
            </DSKDIVIMG>
            }

            {!props.isMobile &&    
            <DSKTEXT>{props.textopost}</DSKTEXT>}

            {/* Disposição desktop da página
            {/* {!props.isMobile &&    
            <DSKTITLE>{props.titulo}</DSKTITLE>}

            {!props.isMobile &&
            <DSKTITLEPOST>{props.titulosposts[0]}</DSKTITLEPOST>}

            {!props.isMobile &&
            <DSKDIVIMG>
                <DSKTEXTOPOST>{props.textosposts[0]}</DSKTEXTOPOST>
                <IMG src={props.imgSrc} alt={props.imgAlt}/>
            </DSKDIVIMG>
            }

            {!props.isMobile &&
            <DSKTITLEPOST>{props.titulosposts[1]}</DSKTITLEPOST>}

            {!props.isMobile &&
            <DSKDIVIMG>
                <DSKTEXTOPOST>{props.textosposts[1]}</DSKTEXTOPOST>
                <IMG src={props.imgSrc} alt={props.imgAlt}/>
            </DSKDIVIMG>
            }

           
             */}
             
        </BlocoInfo>
    );
}

export default BlocoPost;