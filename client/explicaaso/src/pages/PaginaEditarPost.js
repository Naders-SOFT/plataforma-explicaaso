import { useState } from "react";
import RichText from "../components/EditorTexto/RichText";
import styled from "styled-components";
import { EditorProvider } from "@tiptap/react";
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import { useNavigate } from "react-router-dom";
import MenuBar from "../components/EditorTexto/RichText/MenuBar";

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

const extensions = [
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
  ]
  
  const content = `
  <h2>
    Hi there,
  </h2>
  <p>
    this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
  </p>
  <ul>
    <li>
      That’s a bullet list with one …
    </li>
    <li>
      … or two list items.
    </li>
  </ul>
  <p>
    Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
  </p>
  <pre><code class="language-css">body {
  display: none;
  }</code></pre>
  <p>
    I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
  </p>
  <blockquote>
    Wow, that’s amazing. Good work, boy! 👏
    <br />
    — Mom
  </blockquote>
  `
const content2 = `<p>Auihfuiehiucnie</p>`

function PaginaEditarPost(props) {
    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const navigate = useNavigate();
  
    const criarPost = async () => {


      /* Comunicação com o BD */
      navigate("/pagina-blog");
    }

    /**Esse console log demonstra a orde de renderização dos componentes */
    // console.log(texto);
  
    return(
        <ContainerPag $isMobile={props.isMobile}>
          <Titulo placeholder="Título do Post" onChange={(e) => {setTitulo(e.target.value);}}/>
            <EditorProvider extensions={extensions} content={content} slotBefore={<MenuBar isMobile={props.isMobile}/>}>
            
            
                <RichText isMobile={props.isMobile} setValu/>
            
            
            {/* <pre>
            { texto != null && texto }
            </pre> */}
            </EditorProvider>
            <ContainerBotao>
                <Botao $isMobile={props.isMobile} onClick={criarPost}>Postar</Botao>
            </ContainerBotao>
        </ContainerPag>
    );
}

export default PaginaEditarPost;