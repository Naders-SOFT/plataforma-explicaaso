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
const MOBITEXTOPOST = styled.p`
    font-size: 20px;
    margin: 5% 5% 5% 5%;
    text-align: flex-start;

`

const DSKTEXTOPOST = styled.p`
    font-size: 30px;
    margin: 5% 5% 5% 5%;
    text-align: justify;
`

const DSKDIVIMG = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;

`

const MOBIDIVIMG = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

`

const IMG = styled.img`
    width: 40%;
    border-radius: 8px;
    margin: 5% 5% 5% 5%;
    display: flex;
    justify-content: center;

    @media(min-width: 768px) and (max-width: 1080px){
        display: none;
    }
`

const EDITBUTTON = styled.button`
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
            {/* Disposição mobile da página */}
    

            {/* {props.isMobile &&
            <MOBLTITLE>{props.titulo}</MOBLTITLE>} */}

            {props.isMobile &&
            <MOBTITLEPOST>{props.titulopost}</MOBTITLEPOST>}

            {props.isMobile &&
            <MOBIDIVIMG>
                <MOBITEXTOPOST>{props.textopost}</MOBITEXTOPOST>
                <IMG src={props.imgSrc} alt={props.imgAlt}/>
            </MOBIDIVIMG>
            }

            {/* {props.isMobile &&
            <MOBTITLEPOST>{props.titulosposts[1]}</MOBTITLEPOST>}

            {props.isMobile &&
            <MOBIDIVIMG>
                <MOBITEXTOPOST>{props.textosposts[1]}</MOBITEXTOPOST>
                <IMG src={props.imgSrc} alt={props.imgAlt}/>
            </MOBIDIVIMG>
            } */}

            
            


            {/* Disposição desktop da página */}
            {/* {!props.isMobile &&    
            <DSKTITLE>{props.titulo}</DSKTITLE>} */}

            {!props.isMobile &&
            <DSKTITLEPOST>{props.titulopost}</DSKTITLEPOST>}

            {!props.isMobile &&
            <DSKDIVIMG>
                <DSKTEXTOPOST>{props.textopost}</DSKTEXTOPOST>
                <IMG src={props.imgSrc} alt={props.imgAlt}/>
            </DSKDIVIMG>
            }

            {/* {!props.isMobile &&
            <DSKTITLEPOST>{props.titulosposts[1]}</DSKTITLEPOST>}

            {!props.isMobile &&
            <DSKDIVIMG>
                <DSKTEXTOPOST>{props.textosposts[1]}</DSKTEXTOPOST>
                <IMG src={props.imgSrc} alt={props.imgAlt}/>
            </DSKDIVIMG>
            } */}

            <EDITBUTTON $isMobile={props.isMobile}>Editar</EDITBUTTON>
           
            
            
        </BlocoInfo>
    );
}

export default BlocoBlog;