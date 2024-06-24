import './postPlaceholder.css'

import { useState } from "react";
import RichText from "../components/EditorTexto/RichText";
import styled from "styled-components";
import { useEditor } from "@tiptap/react";
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const ContainerPag = styled.div`
    width: 1 vw;
    margin: ${({$isMobile}) => ($isMobile ? '0 5%' : '0 15%')};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Titulo = styled.input`
    width: 100%;
    margin: 1% 0;
    border: 1px solid gray;
    border-radius: 4px;
    background: whitesmoke;
    font-size: 28px;
    display: flex;
    padding: 2% 0;
    text-indent: 0.7%;
`

const ContainerBotao = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Botao = styled.button`
    width: ${({$isMobile}) => ($isMobile ? '40%' : '20%')};
    border: none;
    border-radius: 8px;
    background-color: #FF6600;
    font-size: 28px;
    font-weight: 600;
    color: #994107;
    height: 50px;
    margin: 1% 0;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease; 

    &:hover {
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
        color: #FFEFD5;
        cursor: pointer;
    }
`

function PaginaEditarPost(props) {
    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const navigate = useNavigate();
    const editor = useEditor({
        extensions:[
          StarterKit,
          Underline,
          Placeholder.configure({
            emptyEditorClass: 'is-editor-empty',
            placeholder: 'Estou pensando em...'
          })
        ],

        onUpdate: ({editor}) => {
          const html = editor.getHTML();
          setTexto(html);
          console.log(texto);
        }
      }
    );
  
    const criarPost = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const autor = jwtDecode(token).nome + ' ' + jwtDecode(token).sobrenome;

      await axios.post('http://localhost:3003/noticias/post',
        {
          titulo: titulo,
          texto: texto,
          autor: autor,
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then(() => {
          console.log('Feito o envio');
          navigate('/pagina-noticias');
        })
        .catch((error) => {
          console.error('Error submitting post', error);
        });
    }
  
    return(
        <ContainerPag $isMobile={props.isMobile}>
          <Titulo placeholder="Título da Notícia" onChange={(e) => {setTitulo(e.target.value);}}/>
            <RichText isMobile={props.isMobile} editor={editor}/>
            <ContainerBotao>
                <Botao $isMobile={props.isMobile} onClick={criarPost}>Postar</Botao>
            </ContainerBotao>
        </ContainerPag>
    );
}

export default PaginaEditarPost;