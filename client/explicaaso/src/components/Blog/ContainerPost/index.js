import styled from 'styled-components';
import BlocoPost from "../BlocoPost";
import placeholder from "../../../images/sobre_nos/placeholder.png"

const ContainerPag = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

`

function ContainerPost(props) {
    return (
        <ContainerPag>
            <BlocoPost
            isMobile={props.isMobile}
            imgSrc={placeholder}
            imgAlt="placeholder"
            titulopost = "Titulo Postagem" 
            textopost = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac felis nulla. Maecenas convallis eget nisi commodo sollicitudin. Quisque ac nunc metus. Ut fermentum luctus accumsan. Integer consectetur porttitor lectus. Morbi malesuada accumsan augue, eget dapibus sapien aliquet sit amet. Quisque vehicula nulla volutpat elit tempus, vitae hendrerit libero mattis. Suspendisse potenti. Vestibulum velit elit, posuere at hendrerit ultrices, varius vitae ligula.Integer lacinia aliquam nibh, non fermentum ante. Quisque porta turpis eu suscipit faucibus. Mauris faucibus turpis ac lacus blandit, ac tristique ipsum aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus vitae nisl nec justo sagittis mollis. Vestibulum consequat lacinia lacus vitae tincidunt. Quisque libero odio, placerat vitae sem non, gravida laoreet erat."/>
        </ContainerPag>
    )
}

export default ContainerPost;