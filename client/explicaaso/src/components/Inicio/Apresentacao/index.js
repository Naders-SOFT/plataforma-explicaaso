import React, { useState, useEffect } from 'react';
import imagemFundo from '../../../images/background/fundoEESC.png';
import LogoExpliCaaso from '../../Head/LogoExpliCaaso';
import styled from 'styled-components';
import svg from '../../../images/background/svgviewer-png-output.png'

const ApresentacaoContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const Fundo = styled.div`
  position: absolute;
  margin: 2px 0 0 0;
  top: 95px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${imagemFundo});
  background-size: cover;
  filter: blur(4px);
  opacity: 0.7;
`;

const Titulos = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
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
`;

const ImgSvd = styled.img`
  width: 80%;
`

const TextOverImage = styled.div`
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  color: green;
  font-size: 24px;
`;

const ImageWithTextContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ImageWithText = ({ src, alt, children }) => (
  <ImageWithTextContainer>
    <ImgSvd src={src} alt={alt} />
    <TextOverImage>{children}</TextOverImage>
  </ImageWithTextContainer>
);



function Apresentacao() {
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

  return (
    <Container>
      <ImageWithText src={svg}>
        Your text here
      </ImageWithText>
    </Container>
  )
}

export default Apresentacao;
