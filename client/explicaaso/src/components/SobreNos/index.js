import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const BlocoInfo = styled.div`
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px auto; // Centraliza horizontalmente
  width: ${({ $isMobile }) => ($isMobile ? '95%' : '90%')};
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }
`;

const TituloSecao = styled.h2`
  color: #333333;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 600;
`;

const DesenvolvedoresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Desenvolvedor = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 20px;
  width: ${({ $isMobile }) => ($isMobile ? '100%' : '45%')};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
`;

const IMGDIV = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
`;

const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Nome = styled.h3`
  color: #333333;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 10px;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 600;
`;

const Descricao = styled.p`
  color: #666666;
  font-size: 1rem;
  text-align: center;
  line-height: 1.6;
  font-family: 'Helvetica Neue', sans-serif;
`;

const GithubLink = styled.a`
  display: flex;
  align-items: center;
  color: #333;
  font-size: 1.2rem;
  margin-top: 10px;
  text-decoration: none;

  &:hover {
    color: #555;
  }
`;

const GithubIcon = styled(FaGithub)`
  margin-right: 5px;
`;

function Desenvolvedores({ isMobile }) {
    const [desenvolvedores, setDesenvolvedores] = useState([]);
  
    useEffect(() => {
      const usuariosGithub = [
        'IsaacHaRR',
        'LeonardoIshida',
        'RafaelCGConrado',
        'AmaralVh',
        'joaophamata',
        'buzzo-cancri',
      ];
  
      const buscarDadosDosDesenvolvedores = async () => {
        try {
          const promises = usuariosGithub.map(usuario =>
            fetch(`https://api.github.com/users/${usuario}`)
              .then(res => res.json())
          );
          const resultados = await Promise.all(promises);
  
          setDesenvolvedores(resultados);
        } catch (erro) {
          console.error('Erro ao buscar dados dos desenvolvedores:', erro);
        }
      };
  
      buscarDadosDosDesenvolvedores();
    }, []);
  
    return (
      <BlocoInfo $isMobile={isMobile}>
        <TituloSecao>Desenvolvedores</TituloSecao>
        <DesenvolvedoresContainer>
          {desenvolvedores.map(desenvolvedor => (
            <Desenvolvedor key={desenvolvedor.id} $isMobile={isMobile}>
              <IMGDIV>
                <IMG src={desenvolvedor.avatar_url} alt={desenvolvedor.login} />
              </IMGDIV>
              <Nome>{desenvolvedor.name || desenvolvedor.login}</Nome>
              <Descricao>{desenvolvedor.bio || 'Sem bio disponível.'}</Descricao>
              <GithubLink href={desenvolvedor.html_url} target="_blank" rel="noopener noreferrer">
                <GithubIcon /> GitHub
              </GithubLink>
            </Desenvolvedor>
          ))}
        </DesenvolvedoresContainer>
      </BlocoInfo>
    );
  }
  
  export default Desenvolvedores;