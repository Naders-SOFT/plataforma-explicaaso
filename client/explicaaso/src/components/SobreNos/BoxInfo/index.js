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

const IMGDIV = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  position: relative;
  margin-top: 20px;
`;

const IMG = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 20px;
  object-fit: cover;
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
  color: #333333;
  font-size: 2rem;
  text-align: left;
  margin-bottom: 20px;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 600;
`;

const CORPO = styled.p`
  color: #666666;
  font-size: ${({ $isMobile }) => ($isMobile ? '1rem' : '1.1rem')};
  text-align: ${({ $isMobile }) => ($isMobile ? 'center' : 'left')};
  line-height: 1.6;
  margin-top: ${({ $isMobile }) => ($isMobile ? '20px' : '0')};
  font-family: 'Helvetica Neue', sans-serif;
`;

function BoxInfo(props) {
  return (
    <BlocoInfo $isMobile={props.isMobile}>
      {/* Disposição mobile da página */}
      {props.isMobile ? (
        <>
          <IMGDIV>
            <IMG src={props.imgSrc} alt={props.imgAlt} $isMobile={props.isMobile} />
          </IMGDIV>
          <MOBLTITLE>{props.titulo}</MOBLTITLE>
          <CORPO $isMobile={props.isMobile}>{props.texto}</CORPO>
        </>
      ) : (
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <IMG src={props.imgSrc} alt={props.imgAlt} $isMobile={props.isMobile} style={{ width: '40%', marginRight: '20px' }} />
          <div style={{ flex: 1 }}>
            <DSKTITLE>{props.titulo}</DSKTITLE>
            <CORPO $isMobile={props.isMobile}>{props.texto}</CORPO>
          </div>
        </div>
      )}
    </BlocoInfo>
  );
}

export default BoxInfo;
