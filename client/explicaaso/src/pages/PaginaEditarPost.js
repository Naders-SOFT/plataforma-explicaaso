import './postPlaceholder.css'

import { useEffect, useState } from "react";
import RichText from "../components/EditorTexto/RichText";
import styled from "styled-components";
import { useEditor } from "@tiptap/react";
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import { useNavigate, useParams } from "react-router-dom";
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
    const { idPost } = useParams();
    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const navigate = useNavigate();
    const editor = useEditor({
        extensions:[
          StarterKit.configure({
            bulletList: {
              keepMarks: true,
              keepAttributes: false, 
            },
            orderedList: {
              keepMarks: true,
              keepAttributes: false, 
            },
          }),
          Underline,
          Placeholder.configure({
            emptyEditorClass: 'is-editor-empty',
            placeholder: 'Estou pensando em...'
          })
        ],

        onUpdate: ({editor}) => {
          const html = editor.getHTML();
          setTexto(html);
        }
      }
    );

    useEffect(() => {
      console.log(idPost)
      if(idPost){
        axios.get('http://localhost:3003/blog/list/'+idPost)
        .then( response => {
            setTitulo(response.data.titulo);
            setTexto(response.data.texto);
        })
        .catch( error => {
            console.error('Error fetching data', error);
        })

        editor.commands.insertContent(texto);
      }
    }, [idPost]);
  
    const criarPost = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const autor = jwtDecode(token).nome + ' ' + jwtDecode(token).sobrenome;

      await axios.post('http://localhost:3003/blog/post',
        {
          titulo: titulo,
          texto: texto,
          autor: autor,
          imagem: ''
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then(() => {
          console.log('Feito o envio');
          navigate('/pagina-blog');
        })
        .catch((error) => {
          console.error('Error submitting post', error);
        });
    }
  
    return(
        <ContainerPag $isMobile={props.isMobile}>
          <Titulo placeholder="Título do Post" defaultValue={titulo} onChange={(e) => {setTitulo(e.target.value);}}>
          </Titulo>
            <RichText isMobile={props.isMobile} editor={editor}/>
            <ContainerBotao>
                <Botao $isMobile={props.isMobile} onClick={criarPost}>Postar</Botao>
            </ContainerBotao>
        </ContainerPag>
    );
}

export default PaginaEditarPost;