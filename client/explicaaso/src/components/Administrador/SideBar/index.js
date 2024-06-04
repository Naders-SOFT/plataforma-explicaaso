import styled from "styled-components";

const DSKCONTAINERSIDE = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 20vw;
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
    font-size: 1.5vw;
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
    font-size: 3vw;
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
    return (
        <Container>
            {
                props.isMobile &&
                <MOBLCONTAINERSIDE>
                    <MOBLCONTAINERBOTAO>
                        <MOBLBOTAO>Alunos</MOBLBOTAO>
                        <MOBLBOTAO>Professores</MOBLBOTAO>
                        <MOBLBOTAO>Repositório</MOBLBOTAO>
                    </MOBLCONTAINERBOTAO>
                </MOBLCONTAINERSIDE>
            }
            {
                !props.isMobile &&
                <DSKCONTAINERSIDE>
                    <ConatainerPerfil>
                        <ImgPerfil src={props.imgPerfil}></ImgPerfil>
                        <Nome>Nome</Nome>
                    </ConatainerPerfil>
                    <DSKCONTAINERBOTAO>
                        <DSKBOTAO>Alunos</DSKBOTAO>
                        <DSKBOTAO>Professores</DSKBOTAO>
                        <DSKBOTAO>Repositório</DSKBOTAO>
                    </DSKCONTAINERBOTAO>
                </DSKCONTAINERSIDE>
            }      
        </Container>
    );
}

export default SideBar;