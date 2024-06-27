import './postPlaceholder.css'

import { useEffect, useState, useContext } from "react";
import RichText from "../components/EditorTexto/RichText";
import styled from "styled-components";
import { useEditor } from "@tiptap/react";
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { AuthContext } from '../App';

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
    const [autorUpdate, setAutor] = useState('');
    const [loaded, setLoaded] = useState(false); //Garantia de requisição única
    const navigate = useNavigate();
    const authAxios = useContext(AuthContext);
    
    //Editor do Tiptap. Utilizamos extensões pré configuradas
    //para habilitar opções de edição no input de texto
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

        //Quando o texto interno do editor é alterado, alteramos
        //o State texto
        onUpdate: ({editor}) => {
          const html = editor.getHTML();
          setTexto(html);
        }
      }
    );

    //Nesse Effect queremos fazer a requisição do post uma única vez e
    //colocar o conteúdo em texto da base de dados no editor. Se o ID
    //do post não existe ou o conteúdo já foi carregado, não fazemos
    //a requisição.
    useEffect(() => {
      if(idPost && !loaded){
        authAxios.get('http://localhost:3003/blog/list/'+idPost)
        .then( response => {
            setTitulo(response.data.titulo);
            setTexto(response.data.texto);
            setAutor(response.data.autor);
        })
        .catch( error => {
            console.error('Error fetching data', error);
        })
      }

      if(texto && !loaded){
        setLoaded(true);
        editor.chain().setContent(texto).run();
      }
    }, [idPost, editor, texto]);
  
    //Função que faz a requisição para criar um post na base de dados
    const criarPost = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      const autor = jwtDecode(token).nome + ' ' + jwtDecode(token).sobrenome;

      await authAxios.post('http://localhost:3003/blog/post',
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

    //Função que faz a requisição para atualizar o post da base de dados,
    //sendo o post já carregado anteriormente no Effect
    const updatePost = async (e) => {
      e.preventDefault();

      await authAxios.patch(`http://localhost:3003/blog/update/${idPost}`,
        {
          titulo: titulo,
          texto: texto,
          autor: autorUpdate,
          imagem: ''
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then(() => {
          console.log('Feito o update');
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
                <Botao $isMobile={props.isMobile} onClick={idPost ? updatePost : criarPost}>Postar</Botao>
            </ContainerBotao>
        </ContainerPag>
    );
}

export default PaginaEditarPost;