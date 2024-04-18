import styled from "styled-components";

const ContainerSide = styled.div`
    ${'' /* display: grid; */}
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: center;
    ${'' /* flex-wrap: wrap; */}
    ${'' /* flex-direction: column; */}
    ${'' /* width: 30%; */}
    ${'' /* grid-template-column: 100%; */}
    ${'' /* grid-template-rows: 10%, 90%; */}
    background-color: black;
`

const Botao = styled.button`
    background-color: #FF6600;
    color: white;
    border-radius: 2vh;
`

const ContainerBotao = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: strech;
    justify-content: space-evenly;
    flex-direction: column;
    background-color: blue;
    height: 70vh;
    width: 100%;
`

const ImgPerfil = styled.img`
    width: 100%;
    height: 30vh
`

function SideBar(props) {
    return (
        <ContainerSide>
            <ImgPerfil src={props.imgPerfil}></ImgPerfil>
            <ContainerBotao>
                <h1>Fulano</h1>
                <Botao>Provas</Botao>
                <Botao>Calendário</Botao>
                <Botao>Simulados</Botao>
            </ContainerBotao>
        </ContainerSide>
    );
}

export default SideBar;