import styled from 'styled-components';
import placeholder from '../../images/aprovados/placeholder.png'


const ContainerPag = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content:center;
    width: 100%;
`


const BlocoAzulContainer = styled.section`
    align-items: center;
    background-color: #003466;
    border-radius: 4vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2%;
    width: 90%;

`
const H2 = styled.h2`
    color: #FF6600;
    font-size: 200%;
    margin-top: 10px;
    margin-bottom: 4px;
    width: 50%;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 250%;
    }
`

const LI = styled.li`
    color: white;
    font-size: 180%;
    padding-right: 10%;
    padding-bottom: 10%;

    @media (min-width: 768px) {
        font-size: 240%;
        display: flex;
        justify-content: flex-start;
        padding-right: 1%;
        padding-bottom: 8%;
    }
`
const IMG = styled.img`
    width: 200px;
    height: 200px;
    padding: 20px;

    @media (min-width: 768px) {
        width: 500px;
        height: 500px;
        padding: 20px;
        display: grid;
        margin: auto;
    }

    
`

function BlocoAzul() {
    return (
        <ContainerPag>
            <BlocoAzulContainer>
                <H2>Noticias</H2>
                <ul>
                    <LI><b>20/03</b>: Datas da Fuvest 2025 foram divulgadas</LI>
                    <LI><b>19/03</b>: Datas da Unicamp 2025 foram divulgadas</LI>
                    <LI><b>10/03</b>: Venha fazer parte do Explicaaso!</LI>
                </ul>
            </BlocoAzulContainer>

            <BlocoAzulContainer>
                <H2>Nossos <br/> Aprovados</H2>
                <IMG src = {placeholder} alt="placeholder"></IMG>
                <IMG src = {placeholder} alt="placeholder"></IMG>
            </BlocoAzulContainer>
        </ContainerPag>

        
    )
}

export default BlocoAzul;
