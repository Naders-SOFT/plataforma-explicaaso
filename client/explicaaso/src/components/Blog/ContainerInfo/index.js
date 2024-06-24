import styled from 'styled-components';
import BlocoBlog from "../BlocoBlog";
import placeholder from "../../../images/sobre_nos/placeholder.png"
import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { NavLink as Link } from "react-router-dom";

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

// const BTDIV = styled.Link`
//     width: ${({$isMobile}) => ($isMobile ? '70%' : '90%')};
//     display: flex;
//     alig-items: center;
//     justify-content: flex-end;
//     text-decoration: none;
// `

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
`

function ContainerInfo({ isMobile, blogPosts }) {
    const token = localStorage.getItem('token');
    const [editor, setEditor] = useState(token ? jwtDecode(token).tipoUsuario : '');
    const [renderContent, setRenderContent] = useState(<p>Carregando...</p>) //Exibe um texto padrão enquanto a requisição não está completa
    
    //Verifica permissão de usuário para renderizar botões específicos
    useEffect(() => {

        window.addEventListener("storage", () => {
            const token = localStorage.getItem('token');
            setEditor(token ? jwtDecode(token).tipoUsuario : '');
        })
    }, [editor]);
    
    //Cada post do array é mapeado para um bloco específico do blog
    useEffect(() => {
        if(blogPosts && blogPosts.length > 0) {
          setRenderContent(
            blogPosts.map( ( item, index ) => (
              <BlocoBlog
              key={index}
              isMobile={isMobile}
              imgSrc={placeholder}
              imgAlt="placeholder"
              editor={editor}
              titulopost={item.titulo}
              textopost={item.texto}
              autorpost={item.autor}
              datapost={item.data}
              idPost={item._id}
              />)
            )
          );
        }

        else{
          setRenderContent(<p>Carregando...</p>);
        }
    }, [blogPosts, isMobile]);


    
    return (
        <ContainerPag>
            <TITLEPAG $isMobile={isMobile}>Postagens</TITLEPAG>
            {(editor == 'administrador' || editor == 'professor') &&
            <Link to='/pagina-blog/criar-post' style={{ textDecoration: 'none' }}>
                <BTADICIONAR $isMobile={isMobile}>Criar Post</BTADICIONAR>
            </Link>
            }
            {renderContent}
        </ContainerPag>
    )
}

export default ContainerInfo;
