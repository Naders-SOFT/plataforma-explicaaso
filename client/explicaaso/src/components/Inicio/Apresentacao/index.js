import React, { useState, useEffect } from 'react';
import imagemFundo from '../../../images/background/fundoEESC.png';
import LogoExpliCaaso from '../../Head/LogoExpliCaaso';
import styled from 'styled-components';
import imgFundo2 from '../../../images/background/eesc-sub2.jpg'
import logo from '../../../images/logos/logo-explicaaso (1).jpeg'

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
  width: 100%;
  height: 100%;

  ${'' /* background-image: url(${imagemFundo}); */}
  background-image: url(${imgFundo2});
  background-size: contain;
  background-size: cover; // cover the entire container while maintaining aspect ratio
  background-position: center; // center the image in the container
  background-repeat: no-repeat;

`;

const BlurOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  left: 60%;
  width: 40%; // set to 30% to cover the left 30% of the screen
  height: 100%;
  backdrop-filter: blur(4px); // apply the blur effect
  ${'' /* background: inherit; // inherit the background from the parent div */}
`;

const Titulos = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const TextoDinamico = styled.h1`
  color: ${props => props.cor};
  font-size: ${props => props.tamanho};
  margin: ${props => props.margem};
  font-family: ${props => props.fonte};
  font-weight: ${props => props.peso};
`;

const LogoExpliCaasoContainer = styled.div`
    width: auto;
    margin: 0 15px;
    z-index: 1;
`

const LogoExpliCaasoImg = styled.img`
    width: 50%;
    height: 50%;
`

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
      fonte: "'Aclonica', sans-serif",
      peso: 550,
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
    <ApresentacaoContainer>
      <Fundo>
      <BlurOverlay/>
      </Fundo>
      <Titulos>
        <TextoDinamico
          cor={textos[0].cor}
          tamanho={textos[0].tamanho}
          margem={textos[0].margem}
          fonte={textos[0].fonte}
          peso={textos[0].peso}
        >
          {texto1}
        </TextoDinamico>
        <TextoDinamico
          cor={textos[1].cor}
          tamanho={textos[1].tamanho}
          margem={textos[1].margem}
          fonte={textos[1].fonte}
          peso={textos[1].peso}
        >
          {texto2}
        </TextoDinamico>
      </Titulos>
      {/* <LogoExpliCaaso size="180px" /> */}
      
      <LogoExpliCaasoContainer>
        <LogoExpliCaasoImg
          src={logo}
          alt='logo'
        />
      </LogoExpliCaasoContainer>
    </ApresentacaoContainer>
  );
}

export default Apresentacao;
