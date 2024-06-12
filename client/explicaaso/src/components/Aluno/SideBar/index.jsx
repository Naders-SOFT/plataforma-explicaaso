import styled from "styled-components";

const DSKCONTAINERSIDE = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: flex-start;
    float: left;
    color: white;
    padding: 1vw;
`

const MOBLCONTAINERSIDE = styled.div`
    width: 100%;
`

const DSKBOTAO = styled.button`
    background-color: #FF6600;
    color: white;
    border-radius: 1vw;
    height: 3vw;
    font-weight: bold;
    font-size: 100%;
    border: none;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`

const MOBLBOTAO = styled.button`
    background-color: #FF6600;
    color: white;
    border-radius: 1vw;
    height: 5vw;
    width: 33%;
    font-size: 100%;
    font-weight: bold;
    border: none;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`

const DSKCONTAINERBOTAO = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: strech;
    justify-content: space-evenly;
    gap: 5vw;
    flex-direction: column;
    width: 100%;
`

const MOBLCONTAINERBOTAO = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 2vw;
`

const ImgPerfil = styled.img`
    width: 7vw;
    height: 7vw;
    border-radius: 50%;
`

const ConatainerPerfil = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 2vh;
    
`

const Nome = styled.h1`
    color: black;
    font-size: 2vw;
`

const Container = styled.div`
    width: 100%;
`

function SideBar(props) {
    const listaBotoesMobile = props.botoes?.map((botao, index) => (
        <MOBLBOTAO key={index}>{botao.titulo}</MOBLBOTAO>
    ))

    const listaBotoesDesk = props.botoes?.map((botao, index) => (
        <DSKBOTAO key={index}>{botao.titulo}</DSKBOTAO>
    ))

    return (
        <Container>
            {
                props.isMobile &&
                <MOBLCONTAINERSIDE>
                    <MOBLCONTAINERBOTAO>
                    {listaBotoesMobile}
                    </MOBLCONTAINERBOTAO>
                </MOBLCONTAINERSIDE>
            }
            {
                !props.isMobile &&
                <DSKCONTAINERSIDE>
                    <ConatainerPerfil>
                        <ImgPerfil src={props.imgPerfil}></ImgPerfil>
                        <Nome>Fulano</Nome>
                    </ConatainerPerfil>
                    <DSKCONTAINERBOTAO>
                        {listaBotoesDesk}
                    </DSKCONTAINERBOTAO>
                </DSKCONTAINERSIDE>
            }      
        </Container>
    );
}

export default SideBar;