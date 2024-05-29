import styled from "styled-components";

/**
 * Container das informações do cursinho.
 */
const BlocoInfo = styled.div`
    align-items: center;
    background-color: #003466;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 50px;
    width: ${({$isMobile}) => ($isMobile ? '70%' : '90%')};
`

/**
 * Container pra imagem e para o título.
 * Necessário para poder ajustar a posição do
 * título para que ele sobreponha a imagem.
 */
const IMGDIV = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 3%;
    padding: 0;
    width: 90%;
    position: relative;
`

const TXTDIV = styled.div`
    align-items: center;
    justify-content: center;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-column-gap: 1%;
    grid-template-areas: 
    'img titulo'
    'img corpo';
    margin: 3%;

    @media(min-width: 768px) and (max-width: 1080px){
        grid-template-columns: 100%;
        grid-template-areas:
        'titulo'
        'corpo';
    }
`

const IMG = styled.img`
    width: 100%;
    border-radius: 8px;
    grid-area: img;

    @media(min-width: 768px) and (max-width: 1080px){
        display: none;
    }
`

/**
 * Posição absoluta do título para que ele sobreponha
 * a imagem de capa.
 */
const MOBLTITLE = styled.h2`
    color: #FF6600;
    font-size: 40px;
    width: 100%;
    text-align: flex-start;
    margin: 0 0 0 3%;
    bottom: 3%;
    position: absolute;
`

const DSKTITLE = styled.h2`
    color: #FF6600;
    font-size: 40px;
    text-align: flex-start;
    margin: 5% 5% 5% 5%;
    grid-area: titulo;
`

const CORPO = styled.p`
    color: white;
    font-size: ${({$isMobile}) => ($isMobile ? '20px' : '30px')};
    margin: 5% 5% 5% 5%;
    grid-area: corpo;
    text-align: ${({$isMobile}) => ($isMobile ? 'flex-start' : 'justify')};
`

function BoxInfo(props) {
    return(
        <BlocoInfo $isMobile={props.isMobile}>
            {/* Disposição mobile da página */}
            {props.isMobile && 
            <IMGDIV>
                <IMG src={`${props.imgSrc}`} alt={props.imgAlt}/>
                <MOBLTITLE>{props.titulo}</MOBLTITLE>
            </IMGDIV>}
            {props.isMobile && 
            <CORPO $isMobile={props.isMobile}>{props.texto}</CORPO>}


            {/* Disposição desktop da página */}
            {!props.isMobile &&
            <TXTDIV>
                <IMG src={`${props.imgSrc}`} alt={props.imgAlt}/>
                <DSKTITLE>{props.titulo}</DSKTITLE>
                <CORPO $isMobile={props.isMobile}>{props.texto}</CORPO>
            </TXTDIV>}
        </BlocoInfo>
    );
}

export default BoxInfo;