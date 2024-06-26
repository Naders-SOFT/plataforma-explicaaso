import styled from "styled-components";
import '../../EditorTexto/RichText/styles.css'
import { useNavigate, NavLink as Link } from "react-router-dom";
import axios from "axios";


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
    width: 100%;
    height: 50px;
    background-color: #FFCC00;
    border: none;
    border-radius: 10px;
    color: #003466;
    font-size: ${({$isMobile}) => $isMobile ? "20px" : "30px"};
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
`

const DELETEBUTTON = styled.button`
    width: 20%;
    margin: ${({$isMobile}) => $isMobile ? "3% 0" : "3% 0"};
    padding: ${({$isMobile}) => $isMobile ? "1% 0" : "1% 0"};
    height: 50px;
    background-color: #FFCC00;
    border: none;
    border-radius: 10px;
    color: #003466;
    font-size: ${({$isMobile}) => $isMobile ? "20px" : "30px"};
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
`

const BTDIV = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const LINK = styled(Link)`
  width: ${({ $isMobile }) => ($isMobile ? '80%' : '20%')};
  margin: 3% 0;
  padding: 1% 0;
  border: none;
  border-radius: 10px;
  color: #003466;
  font-size: ${({ $isMobile }) => ($isMobile ? '1rem' : '1.5rem')};
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
`



function BlocoPost({ isMobile, titulopost, textopost, autorpost, datapost, idPost, editor}) {
    
  const navigate = useNavigate();
  //Renderiza o texto de acordo com a estilização imposta pelo
    //usuário no editor de texto
    const renderTexto = (textopost) => {
        if(textopost){
            return <TEXTOPOST $isMobile={isMobile} dangerouslySetInnerHTML={{__html:textopost}}></TEXTOPOST>;
        }
    }

    const handleDelete = (id) => {
      // Requisicao de DELETE
      axios.delete('http://localhost:3003/noticia/delete/'+id)
      .then(() => {
          console.log('Noticia post deletado com sucesso');

          // Removendo o post que foi deletado
          navigate('/pagina-noticias');
      })
      .catch(error => {
          console.error('Error deleting Noticia post:', error);
      })
  }
    
    return(
        <BlocoInfo $isMobile={isMobile}>
            {(editor == 'administrador' || editor == 'professor') &&
            <BTDIV>
            <LINK to={`/pagina-noticias/editar-post/${idPost}`} style={{ textDecoration: 'none' }}>
              <EDITBUTTON $isMobile={isMobile}>Editar</EDITBUTTON>
            </LINK>
            <DELETEBUTTON $isMobile={isMobile} onClick={() => {
              axios.delete('http://localhost:3003/noticia/delete/'+idPost)
        .then(() => {
            console.log('Noticia post deletado com sucesso');

            // Removendo o pdf que foi deletado
            navigate('/pagina-noticias');
        })
        .catch(error => {
            console.error('Error deleting noticia post:', error);
        })
            }}>Deletar</DELETEBUTTON>
            </BTDIV>
            }
            
            <TITLEPOST $isMobile={isMobile}>{titulopost}</TITLEPOST>
            <TEXTOPOST $isMobile={isMobile} className="tiptap">{renderTexto(textopost)}</TEXTOPOST>
        </BlocoInfo>
    );
}

export default BlocoPost;