import React, { useState, useEffect } from 'react';
import imagemFundo from '../../../images/background/fundoEESC.png';
import LogoExpliCaaso from '../../Head/LogoExpliCaaso';
import styled from 'styled-components';
import svg from '../../../images/background/svgviewer-png-output.png'
import background from '../../../images/background/fundoEESC-upscalled.png'
import { useNavigate } from 'react-router-dom';

const ApresentacaoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


const Titulos = styled.div`
  text-align: center;
  z-index: 2;

`;

const TextoDinamico = styled.h1`
  color: ${props => props.cor};
  font-size: ${props => props.tamanho};
  margin: ${props => props.margem};
  font-family: ${props => props.fonte};
  font-weight: ${props => props.peso};
`;

const FundoVale = styled.svg`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  position: relative;
  display: inline-block;
  background-image: url(${background});
  background-size: cover; 
  background-position: center; 
`;

const ImgSvd = styled.img`
  width: 80%;
`

const TextOverImage = styled.div`
  position: absolute;
  top: 33%;
  left: 23%;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 3vw;
  font-family: "Crete Round";
  cursor: default;
`;

const TextOverImage2 = styled.div`
  position: absolute;
  top: 48%;
  left: 23%;
  transform: translate(-50%, -50%);
  color: #DDB411;
  font-size: 4.5vw;
  font-family: "Mochiy Pop One";
  cursor: default;
`;

const ImageWithTextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  position: absolute;
  top: 70%;
  left: 22%;
  width: 10vw;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  font-size: 1vw;
  color: black;
  font-weight: 400;
  background-color: #FFCC00;
  border: none;
  border-radius: 30%;
  cursor: pointer;
  font-family: "Crete Round";

  &:hover {
    color: white;
  }
`;

const BlurredDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-size: cover;
  filter: blur(5px);
  z-index: 0;
`;

const TituloMobile = styled.p`
  color: white;
  font-size: 300%;
  font-family: "Crete Round";
  z-index: 2;
`

function Apresentacao(props) {
  const textos = [
    {
      texto: "CURSINHO POPULAR",
      cor: "#FFCC00",
      tamanho: "52px",
      margem: "2px 0",
      fonte: "'Crete Round', serif",
      peso: 200,
    },
    {
      texto: "ExpliCaaso",
      cor: "white",
      tamanho: "80px",
      margem: "0 0 2px 0",
      fonte: "'Carrois Gothic', sans-serif",
      peso: 300,
    },
  ];

  const [texto1, setTexto1] = useState('');
  const [texto2, setTexto2] = useState('');
  const [indiceTexto, setIndiceTexto] = useState(0);
  const [indiceLetra, setIndiceLetra] = useState(0);

  useEffect(() => {
    const digitar = () => {
      const textoCompleto = textos[indiceTexto].texto;

      if (indiceLetra < textoCompleto.length) {
        if (indiceTexto === 0) {
          setTexto1(textoCompleto.slice(0, indiceLetra + 1));
        } else {
          setTexto2(textoCompleto.slice(0, indiceLetra + 1));
        }
        setIndiceLetra(indiceLetra + 1);
      } else {
        setTimeout(() => {
          if (indiceTexto === textos.length - 1) {
            setIndiceTexto(0);
            setTexto1('');
            setTexto2('');
          } else {
            setIndiceTexto(indiceTexto + 1);
          }
          setIndiceLetra(0);
        }, 2000); // 2 segundos
      }
    };

    const intervalo = setTimeout(digitar, indiceLetra === 0 ? 0 : 100);

    return () => clearTimeout(intervalo);
  }, [indiceLetra, indiceTexto]);

  const navigate = useNavigate()
  const botaoNavegacao = () => {
    navigate('/pagina-sobre-nos')
  }

  return (
    <div>
    {!props.isMobile && (
      <Container>
        <ImageWithTextContainer>
          <ImgSvd src={svg} alt='naosei'/>
          <TextOverImage>Cursinho Popular</TextOverImage>
          <TextOverImage2>Explicaaso</TextOverImage2>
          <StyledButton onClick={botaoNavegacao}>Saiba mais</StyledButton>
        </ImageWithTextContainer>
      </Container>
    )}
    {props.isMobile && (
      <ApresentacaoContainer>
        <BlurredDiv/>
        <Titulos>
          <TituloMobile>Cursinho Popular</TituloMobile>
          <TituloMobile>Explicaaso</TituloMobile>
        </Titulos>
        <LogoExpliCaaso size='180px'/>
      </ApresentacaoContainer>
      )}
    </div>
  )
}

export default Apresentacao;
