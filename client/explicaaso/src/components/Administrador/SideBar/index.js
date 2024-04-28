import styled from "styled-components";

const DSKCONTAINERSIDE = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 40vh;
    align-items: center;
    justify-content: flex-start;
    float: left;
    color: white;
    padding: 2vh;
`

const MOBLCONTAINERSIDE = styled.div`
    width: 100%;
`

const DSKBOTAO = styled.button`
    background-color: #FF6600;
    color: white;
    border-radius: 2vh;
    height: 6vh;
    font-weight: bold;
`

const MOBLBOTAO = styled.button`
    background-color: #FF6600;
    color: white;
    border-radius: 2vh;
    height: 5vh;
    width: 33%;
    font-weight: bold;
`

const DSKCONTAINERBOTAO = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: strech;
    justify-content: space-evenly;
    gap: 10vh;
    flex-direction: column;
    width: 100%;
`

const MOBLCONTAINERBOTAO = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 3vh;
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
    padding: 2vh;
    
`

const Nome = styled.h1`
    color: black;
    font-size: 4vh;
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
                        <Nome>Administrador</Nome>
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