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
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px;
    width: 70%;

`
const H2 = styled.h2`
    color: #FF6600;
    font-size: 40px;
    margin-top: 10px;
    margin-bottom: 4px;;
    width: 500px;
    text-align: center;
`

const LI = styled.li`
    color: white;
    font-size: 30px;
    padding-right: 20px;
    padding-bottom: 20px;
`
const IMG = styled.img`
    width: 200px;
    height: 200px;
    padding: 20px;
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
            </BlocoAzulContainer>
        </ContainerPag>

        
    )
}

export default BlocoAzul;
