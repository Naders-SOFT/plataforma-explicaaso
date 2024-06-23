import styled from "styled-components";

/**
 * Container das informações do cursinho.
 */
const BlocoInfo = styled.div`
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px;
  width: ${({ isMobile }) => (isMobile ? '90%' : '70%')};
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const LISTA = styled.ul`
  color: black;
  margin-bottom: 5%;
`;

const LI = styled.li`
  color: #666666;
  font-size: ${({ $isMobile }) => ($isMobile ? '1rem' : '1.1rem')};
  text-align: ${({ $isMobile }) => ($isMobile ? 'center' : 'justify')};
  list-style: none;
  font-size: 1.4rem;
  margin: 10px 0;
    color: black;
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

function BlocoNoticia(props) {
  return (
    <BlocoInfo $isMobile={props.isMobile}>
    <LISTA $isMobile={props.isMobile}>
      {props.noticias.map((noticia, index) => (
        <LI key={index}>{noticia}</LI>
      ))}
    </LISTA>
    </BlocoInfo>
  );
}

export default BlocoNoticia;
