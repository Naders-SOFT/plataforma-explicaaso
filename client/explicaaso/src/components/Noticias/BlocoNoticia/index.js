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

const MOBLTITLE = styled.h2`
  color: #333333;
  font-size: 1.8rem;
  width: 100%;
  text-align: center;
  margin: 20px 0;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 600;
`;

const DSKTITLE = styled.h2`
  color: black;
  font-size: 2rem;
  text-align: center;
  margin: 20px 0;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 600;
`;

const LISTA = styled.ul`
  color: black;
  margin-bottom: 5%;
`;

const MOBLI = styled.li`
  color: #666666;
  list-style: none;
  font-size: 1.1rem;
  margin: 10px 0;
`;

const DSKLI = styled.li`
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
      {props.isMobile ? (
        <>
          <MOBLTITLE>{props.titulo}</MOBLTITLE>
          <LISTA>
            {props.noticias.map((noticia, index) => (
              <MOBLI key={index}>{noticia}</MOBLI>
            ))}
          </LISTA>
        </>
      ) : (
        <>
          <DSKTITLE>{props.titulo}</DSKTITLE>
          <LISTA>
            {props.noticias.map((noticia, index) => (
              <DSKLI key={index}>{noticia}</DSKLI>
            ))}
          </LISTA>
        </>
      )}
      <BUTTON $isMobile={props.isMobile}>Ler mais</BUTTON>
      {props.editor && <BUTTON $isMobile={props.isMobile}>Editar</BUTTON>}
    </BlocoInfo>
  );
}

export default BlocoNoticia;
