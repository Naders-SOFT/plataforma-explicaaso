import styled from "styled-components";


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

const TEXTOPOST = styled.p`
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

const BUTTON = styled.button`
  width: ${({ $isMobile }) => ($isMobile ? '80%' : '20%')};
  margin: 20px 0;
  padding: 10px 0;
  background-color: #FFCC00;
  border: none;
  border-radius: 10px;
  color: #003466;
  font-size: ${({ $isMobile }) => ($isMobile ? '1rem' : '1.2rem')};
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffbf00;
  }
`;

const LERMAIS = styled.a`
  color: #003466;
  font-size: ${({ $isMobile }) => ($isMobile ? '1rem' : '1.2rem')};
  margin: 2%;
  text-align: ${({ $isMobile }) => ($isMobile ? 'center' : 'justify')};
  cursor: pointer;
  text-decoration: none;

  &:link, &:visited {
    color: #003466;
  }

  &:hover {
    color: #FFCC00;
  }
`;

function BlocoBlog({ isMobile, editor, titulopost, textopost, imgSrc, imgAlt }) {
  return (
    <BlocoInfo $isMobile={isMobile}>
      <TITLEPOST $isMobile={isMobile}>{titulopost}</TITLEPOST>
      <DIVIMG $isMobile={isMobile}>
        <TEXTOPOST $isMobile={isMobile}>{textopost}</TEXTOPOST>
        <IMG src={imgSrc} alt={imgAlt} />
      </DIVIMG>
      <BUTTON $isMobile={isMobile}>Ler mais</BUTTON>
      {(editor == 'administrador' || editor == 'professor') && 
        <BUTTON $isMobile={isMobile}>Editar</BUTTON>
      }
    </BlocoInfo>
  );
}

export default BlocoBlog;
