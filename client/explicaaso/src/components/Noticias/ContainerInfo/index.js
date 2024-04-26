import styled from 'styled-components';
import BlocoNoticia from "../BlocoNoticia";
import BlocoGaleria from "../BlocoGaleria";
import placeholder from "../../../images/sobre_nos/placeholder.png"

const ContainerPag = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

`

const noticias = ["Divulgadas as datas FUVEST 2024", "Divulgadas as datas UNICAMP 2024",
                  "Inscrições para o Explicaaso começaram!"]

function ContainerInfo(props) {
    return (
        <ContainerPag>
            <BlocoNoticia
            isMobile={props.isMobile}
            // imgSrc={placeholder}
            // imgAlt="placeholder"
            titulo="Notícias"
            noticias = {noticias}
             />

            <BlocoGaleria
            isMobile={props.isMobile}
            imgSrc={placeholder}
            imgAlt="placeholder"
            titulo="Galeria de Aprovados"
            />

        </ContainerPag>
    )
}

export default ContainerInfo;