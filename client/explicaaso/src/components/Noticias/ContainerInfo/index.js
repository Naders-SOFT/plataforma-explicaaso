import styled from 'styled-components';
import BlocoNoticia from "../BlocoNoticia";
import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const ContainerPag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
`;

const TITLEPAG = styled.h2`
  color: #FF6600;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const BTDIV = styled.div`
    width: ${({$isMobile}) => ($isMobile ? '70%' : '90%')};
    display: flex;
    alig-items: center;
    justify-content: flex-end;
`

const BTADICIONAR = styled.button`
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

const ListItem = styled.li`
  list-style: none;
  margin: 10px 0;
`;

const Link = styled.a`
  color: #005bb5;
  text-decoration: none;
  font-size: ${({ $isMobile }) => ($isMobile ? '1rem' : '1.1rem')};
  font-family: 'Helvetica Neue', sans-serif;
  transition: color 0.3s;

  &:hover {
    color: #FF69B4;
    text-decoration: underline;
  }

  &:focus, &:active {
    color: #003366;
    outline: none;
    text-decoration: underline;
  }
`;

function ContainerInfo({isMobile, noticiaPosts}) {
  const [editor, setEditor] = useState('');
  const [renderContent, setRenderContent] = useState(<p>Carregando...</p>)
    
  //Verifica se o usuário está logado e se sim, qual o seu tipo
    useEffect(() => {
        const token = localStorage.getItem('token');
        setEditor(token ? jwtDecode(token).tipoUsuario : '');
        

        window.addEventListener("storage", () => {
            const token = localStorage.getItem('token');
            setEditor(token ? jwtDecode(token).tipoUsuario : '');
        })
    }, [editor]);

    //Se existem posts de notícias na base de dados, eles
    //são mapeados um a um e exibidos dentro de um bloco
    //de notícia em que apenas seus títulos serão exibidos 
    useEffect(() => {
      if(noticiaPosts && noticiaPosts.length > 0) {
        setRenderContent(
          noticiaPosts.map( ( item, index ) => (
            <BlocoNoticia
            key={index}
            isMobile={isMobile}
            titulonoticia={item.titulo}
            idPost={item._id}
            />)
          )
        );
      }

      else{
        setRenderContent(<p>Carregando...</p>);
      }
  }, [noticiaPosts, isMobile]);

  return (
    <ContainerPag>
      <TITLEPAG $isMobile={isMobile}>Notícias</TITLEPAG>
      {(editor == 'administrador' || editor == 'professor') &&
            <BTDIV $isMobile={isMobile}>
                <BTADICIONAR $isMobile={isMobile}>Criar Post</BTADICIONAR>
            </BTDIV>
            }
        {renderContent};
    </ContainerPag>
  );
}

export default ContainerInfo;
