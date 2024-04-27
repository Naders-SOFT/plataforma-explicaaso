import styled from "styled-components";

const ContainerSide = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 40vh;
    align-items: center;
    justify-content: flex-start;
    float: left;
    color: white;
`

const Botao = styled.button`
    background-color: #FF6600;
    color: white;
    border-radius: 2vh;
    height: 5vh;
    font-weight: bold;
`

const ContainerBotao = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: strech;
    justify-content: space-evenly;
    gap: 12vh;
    flex-direction: column;
    width: 100%;
`

const ImgPerfil = styled.img`
    width: 15vh;
    height: 15vh;
    border-radius: 50%;
`

const ConatainerPerfil = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const Nome = styled.h1`
    color: black;
    font-size: 4vh;
`

function SideBar(props) {
    return (
        <ContainerSide>
            <ConatainerPerfil>
                <ImgPerfil src={props.imgPerfil}></ImgPerfil>
                <Nome>Fulano</Nome>
            </ConatainerPerfil>
            <ContainerBotao>
                <Botao>Provas</Botao>
                <Botao>Calendário</Botao>
                <Botao>Simulados</Botao>
            </ContainerBotao>
        </ContainerSide>
    );
}

export default SideBar;