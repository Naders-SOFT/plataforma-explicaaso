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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
`;



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
    <div>
    <Container>
      <FundoVale>
        <svg
          width="1553"
          height="605"
          viewBox="0 0 1553 605"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: 'auto' }}
        >
          <path
            d="M-19 20.0596C-19 9.18741 -10.3148 0.306583 0.554719 0.0645227L1532.26 -34.0461C1553.53 -34.5198 1560.74 -5.86558 1541.77 3.77653L1045.74 256L972 298L915 336L863 369L794 422.5L692.007 497.5L602.185 554.5L562.5 572.5L527.5 583.5L504.724 591.402C503.577 591.8 502.396 592.092 501.196 592.276L447.5 600.5L399.691 604.363C398.566 604.454 397.435 604.45 396.31 604.35L354.98 600.676C353.663 600.559 352.361 600.312 351.094 599.938L315.502 589.443C314.502 589.148 313.527 588.775 312.585 588.328L279.229 572.5L130.367 497.5L-9.29978 413.59C-15.3183 409.975 -19 403.468 -19 396.447V333.188V20.0596Z"
            fill="#5CA8A3"
          />
        <foreignObject x="-20%" y="40%" width="60%" height="60%">
          <div xmlns="http://www.w3.org/1999/xhtml" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <p style={{color: 'white', fontSize: '30px'}}>Cursinho Popular</p>
            <p style={{color: 'white', fontSize: '30px'}}>ExpliCasso</p>
          </div>
        </foreignObject>
        </svg>
      </FundoVale>
      {/* <Titulos>
        Cusinho ExpliCaasoaaaaaaaaa
      </Titulos> */}
    </Container>
    <img src={}>
    </img>
    {/* <ApresentacaoContainer>
      <LogoExpliCaaso size="180px" />
    </ApresentacaoContainer> */}
    </div>
  );
}

export default Apresentacao;
