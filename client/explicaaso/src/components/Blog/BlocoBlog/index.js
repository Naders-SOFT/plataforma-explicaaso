import { NavLink as Link } from "react-router-dom";
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
  width: ${({ $isMobile }) => ($isMobile ? '90%' : '70%')};
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }
`;

const TITLEPOST = styled.h3`
  color: #333333;
  font-size: ${({ $isMobile }) => ($isMobile ? '1.8rem' : '2rem')};
  margin: 20px 0;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 600;
  text-align: ${({ $isMobile }) => ($isMobile ? 'center' : 'left')};
`;

const TEXTOPOST = styled.div`
  color: #666666;
  font-size: ${({ $isMobile }) => ($isMobile ? '1rem' : '1.1rem')};
  margin: 5%;
  text-align: ${({ $isMobile }) => ($isMobile ? 'center' : 'justify')};
  line-height: 1.6;
  font-family: 'Helvetica Neue', sans-serif;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
`;

const DIVIMG = styled.div`
  display: flex;
  flex-direction: ${({ $isMobile }) => ($isMobile ? 'column' : 'row')};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const IMG = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  margin: ${({ $isMobile }) => ($isMobile ? '20px 0' : '0 20px')};
  object-fit: cover;

  @media (min-width: 768px) and (max-width: 916px) {
    display: none;
  }
`;

const LINK = styled(Link)`
  width: ${({ $isMobile }) => ($isMobile ? '80%' : '20%')};
  margin: 20px 0;
  padding: 10px 0;
  border: none;
  border-radius: 10px;
  color: #003466;
  font-size: ${({ $isMobile }) => ($isMobile ? '1rem' : '1.5rem')};
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffbf00;
  }
`


function BlocoBlog({ isMobile, editor, imgSrc, imgAlt, titulopost, textopost, autorpost, datapost, idPost }) {
  //Renderiza o texto de acordo com a estilização imposta pelo
  //usuário no editor de texto
  const renderPost = (textopost) => {
    if(textopost){
      return <div dangerouslySetInnerHTML={{__html: textopost}}></div>;
    }
    return <div></div>
  }

  return (
    <BlocoInfo $isMobile={isMobile}>
      <TITLEPOST $isMobile={isMobile}>{titulopost}</TITLEPOST>
      <DIVIMG $isMobile={isMobile}>
        <TEXTOPOST $isMobile={isMobile} className="tiptap">{renderPost(textopost)}</TEXTOPOST>
        <IMG src={imgSrc} alt={imgAlt} />
      </DIVIMG>
    
      <LINK to ={`/pagina-blog/post/${idPost}`}>
        Ler mais
      </LINK>
      
    </BlocoInfo>
  );
}

export default BlocoBlog;
