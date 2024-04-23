import imagemFundo from '../../../images/background/fundoEESC.png';
import styled from 'styled-components';


const ImagemFundoContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-image: url(${imagemFundo});
  background-size: cover;
  background-position: center;
  filter: blur(6px);
`

const ImagemFundoIMG = styled.img`
  display: flex;
  justify-content: center;
  height: 100%;
  object-fit: contain;
`


function ImagemFundo() {
  return (
    <ImagemFundoContainer>
      {/* <ImagemFundoIMG
        src={imagemFundo}
      /> */}
    </ImagemFundoContainer>
  );
}

export default ImagemFundo;