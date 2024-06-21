import styled from 'styled-components';
import BlocoPost from "../BlocoPost";
import placeholder from "../../../images/sobre_nos/placeholder.png"
import { useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';

const ContainerPag = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

`

const BTDIV = styled.div`
    width: ${({$isMobile}) => ($isMobile ? '70%' : '90%')};
    display: flex;
    alig-items: center;
    justify-content: flex-end;
`

const BTADICIONAR = styled.button`
    width: 25%;
    margin: 0 1%;
    padding: ${({$isMobile}) => $isMobile ? "1% 0" : "1% 0"};
    background-color: #FFCC00;
    border: none;
    border-radius: 10px;
    color: #003466;
    font-size: ${({$isMobile}) => $isMobile ? "20px" : "30px"};
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
`

function ContainerPost(props) {
    const [editor, setEditor] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        setEditor(token ? jwtDecode(token).tipoUsuario : '');
        

        window.addEventListener("storage", () => {
            const token = localStorage.getItem('token');
            setEditor(token ? jwtDecode(token).tipoUsuario : '');
        })
    }, [editor]);
    

    return (
        <ContainerPag>
            <BlocoPost
            isMobile={props.isMobile}
            imgSrc={placeholder}
            imgAlt="placeholder"
            titulopost = "Titulo Postagem" 
            textopost = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac placerat dolor, eget mollis justo. Pellentesque at nunc consectetur, dignissim dui non, commodo justo. Vestibulum non dui ut massa posuere porta ut non sem. Vestibulum vulputate velit libero. Morbi eu accumsan est, at sagittis ligula. Sed consectetur tempor lectus, fermentum consequat lorem feugiat nec. Maecenas laoreet nulla sit amet lectus tincidunt, et viverra augue imperdiet. Duis id sodales nulla, nec sollicitudin eros. Quisque id rhoncus nisi. Sed elit tellus, pulvinar ut eleifend ut, euismod ac dolor. Donec varius purus eget lectus porta lobortis. Fusce vitae mi tempus, pharetra dolor non, congue sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque dapibus interdum sollicitudin. Quisque eu sem libero. Fusce metus orci, fermentum quis orci faucibus, pulvinar iaculis justo. Ut tempor mauris nibh, aliquet faucibus nisl imperdiet nec. Praesent in lectus metus. Nam interdum massa nulla, ullamcorper blandit est rutrum at. Ut volutpat velit ut molestie finibus. Sed vel interdum mi, id porta mauris. Curabitur hendrerit condimentum nisl, vel eleifend est malesuada a. Fusce feugiat ipsum eget elit pretium pretium. Fusce auctor tempor dolor, quis vehicula sem commodo blandit. Aliquam ultrices aliquam libero, ut euismod justo cursus vitae. Duis nec diam sit amet leo molestie semper. Vivamus risus nibh, consectetur sit amet neque quis, pretium lobortis urna. Donec lacus urna, auctor ac molestie et, tristique a purus. Suspendisse accumsan id risus eu condimentum. Ut eleifend suscipit congue. Duis a mi sit amet neque aliquet posuere in in nisl. Maecenas malesuada mattis justo vulputate fringilla. Etiam diam felis, pretium vitae commodo sed, pretium sit amet risus. Nullam dignissim sit amet arcu in feugiat. Sed elementum elementum hendrerit. Integer porta tellus neque, quis fermentum diam pellentesque nec. Vestibulum vel tortor vel enim hendrerit pellentesque.Morbi feugiat urna libero. Maecenas venenatis hendrerit leo et hendrerit. Aenean in efficitur elit. Nulla interdum interdum ullamcorper. Mauris volutpat libero sit amet est maximus cursus. Curabitur interdum ex ac iaculis tristique. Morbi molestie odio et justo varius luctus. In dignissim id metus ac pharetra. Nam mollis metus vel ante pharetra mollis. Integer porttitor est at libero varius facilisis. Pellentesque vel velit urna. In aliquam rhoncus dictum. Nullam eleifend congue nisi, ut blandit mi tincidunt quis. Cras non laoreet justo, id euismod erat. Nulla ut erat eu est euismod blandit sed non turpis. Nunc elit lacus, iaculis at purus at, posuere tincidunt mauris. Integer varius sem neque, vel efficitur odio venenatis ut. Morbi vehicula, enim vel pulvinar sagittis, lacus arcu hendrerit velit, vitae pulvinar ex dui id massa. Morbi feugiat eros sit amet interdum laoreet. Nullam auctor ex quis leo consequat semper et in est. Suspendisse egestas suscipit purus, in consectetur eros varius eu. Praesent euismod, libero et feugiat dapibus, enim mi commodo justo, at mollis nibh arcu nec dolor. Sed a leo at augue ornare hendrerit. Morbi tempor eleifend lacus, et egestas eros lacinia et. Phasellus ac ligula congue, ultrices lectus placerat, fringilla lectus. Donec congue eleifend arcu ac sagittis. Vestibulum ante ipsum primis."
            editor={editor}/>
        </ContainerPag>
    )
}

export default ContainerPost;