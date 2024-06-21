import styled from "styled-components";
import '../../EditorTexto/RichText/styles.css'


const BlocoInfo = styled.div`
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px;
  width: ${({ $isMobile }) => ($isMobile ? '95%' : '95%')};
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }
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
    color: black;
    font-size: 25px;
    margin: 5% 5% 5% 5%;

`

const DSKTEXT = styled.p`
    color: black;
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




function BlocoPost({ isMobile, editor, imgSrc, imgAlt, titulopost, textopost, autorpost}) {
    const renderTexto = (textopost) => {
        if(textopost){
            return <MOBITEXT $isMobile={isMobile} dangerouslySetInnerHTML={{__html:textopost}}></MOBITEXT>;
        }
    }
    
    return(
        <BlocoInfo $isMobile={isMobile}>
            {/* Disposição mobile da página */}
    

            {isMobile &&    
            <MOBLTITLE>{titulopost}</MOBLTITLE>}

            {isMobile &&
                <MOBIIMG src={imgSrc} alt={imgAlt}/>
            }

            {isMobile &&    
                renderTexto(textopost)
            }
            
            {!isMobile &&    
            <DSKTITLE>{titulopost}</DSKTITLE>}

            {!isMobile &&
                <DSKIMG src={imgSrc} alt={imgAlt}/>
            }

            {!isMobile &&    
            <DSKTEXT>{textopost}</DSKTEXT>}

            {(editor == 'administrador' || editor == 'professor') &&
            <EDITBUTTON $isMobile={isMobile}>Editar</EDITBUTTON>
            }
        </BlocoInfo>
    );
}

export default BlocoPost;