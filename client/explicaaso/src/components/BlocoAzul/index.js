import styled from 'styled-components';

const ContainerPag = styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
`


const BlocoAzulContainer = styled.section`
    background-color: #003466;
    border-radius: 8px;
    width: 70%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 50px;

`
const H2 = styled.h2`
    color: #FF6600;
    font-size: 40px;
    margin-top: 0;
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
            </BlocoAzulContainer>


        </ContainerPag>

        
    )
}

export default BlocoAzul;
