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

const TITLEPOST = styled.h3`
  color: #333333;
  font-size: ${({ $isMobile }) => ($isMobile ? '2rem' : '4rem')};
  margin: 20px 0;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 600;
  text-align: ${({ $isMobile }) => ($isMobile ? 'center' : 'left')};
`

const TEXTOPOST = styled.div`
  color: black;
  font-size: ${({ $isMobile }) => ($isMobile ? '1.5rem' : '2rem')};
  margin: 5%;
  text-align: ${({ $isMobile }) => ($isMobile ? 'center' : 'justify')};
  line-height: 1.6;
  font-family: 'Helvetica Neue', sans-serif;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
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




function BlocoPost({ isMobile, titulopost, textopost, autorpost, datapost, idPost, editor}) {
    //Renderiza o texto de acordo com a estilização imposta pelo
    //usuário no editor de texto
    const renderTexto = (textopost) => {
        if(textopost){
            return <TEXTOPOST $isMobile={isMobile} dangerouslySetInnerHTML={{__html:textopost}}></TEXTOPOST>;
        }
    }
    
    return(
        <BlocoInfo $isMobile={isMobile}>
            <TITLEPOST $isMobile={isMobile}>{titulopost}</TITLEPOST>
            <TEXTOPOST $isMobile={isMobile} className="tiptap">{renderTexto(textopost)}</TEXTOPOST>
      
            {(editor == 'administrador' || editor == 'professor') &&
            <EDITBUTTON $isMobile={isMobile}>Editar</EDITBUTTON>
            }
        </BlocoInfo>
    );
}

export default BlocoPost;