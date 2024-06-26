import styled from "styled-components";
import '../../EditorTexto/RichText/styles.css'
import { useNavigate, NavLink as Link } from "react-router-dom";
// import axios from "axios";

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

const IMG = styled.img`
  width: 100%;
  max-width: 700px;
  border-radius: 12px;
  margin: ${({ $isMobile }) => ($isMobile ? '20px 0' : '0 20px')};
  object-fit: cover;

  @media (min-width: 768px) and (max-width: 916px) {
    display: none;
  }
`

// const BTDIV = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
// `


function BlocoPost({ isMobile, editor, titulopost, imgSrc, imgAlt, textopost, autorpost, datapost, idPost}) {
  // const navigate = useNavigate();

  //O post retirado do banco de dados está em formato de string e, dentro dele, 
  //possui as tags HTML relativas à seu estilo. Queremos aqui transformar essa string
  //em html, para que o texto seja renderizado corretamente na tela.
    const renderTexto = (textopost) => {
        if(textopost){
            return <TEXTOPOST $isMobile={isMobile} dangerouslySetInnerHTML={{__html:textopost}}></TEXTOPOST>;
        }
    }
    
    // const handleDelete = (id) => {
    //     // Requisicao de DELETE
    //     axios.delete('http://localhost:3003/blog/delete/'+id)
    //     .then(() => {
    //         console.log('Blog post deletado com sucesso');

    //         // Removendo o pdf que foi deletado
    //         navigate('/pagina-blog');
    //     })
    //     .catch(error => {
    //         console.error('Error deleting Blog post:', error);
    //     })
    // }
    
    return(
        <BlocoInfo $isMobile={isMobile}>
            {(editor == 'administrador' || editor == 'professor') &&
            <BTDIV>
            <Link to={`/pagina-blog/editar-post/${idPost}`} style={{ textDecoration: 'none' }}>
              <EDITBUTTON $isMobile={isMobile}>Editar</EDITBUTTON>
            </Link>
            {/* <EDITBUTTON $isMobile={isMobile} onClick={handleDelete(idPost)}>Deletar</EDITBUTTON> */}
            </BTDIV>
            }
            <TITLEPOST $isMobile={isMobile}>{titulopost}</TITLEPOST>
            <IMG src={imgSrc} alt={imgAlt}/>
            <TEXTOPOST $isMobile={isMobile} className="tiptap">{renderTexto(textopost)}</TEXTOPOST>

        </BlocoInfo>
    );
}

export default BlocoPost;