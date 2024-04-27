import styled from 'styled-components';

const Card = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: black;
    justify-content: center;
    align-items: center;
`

const ImgCard = styled.img`
    width: 40vh;
    height: 27vh;
    border-radius: 2vh;
`

const TituloMateria = styled.h1`
    font-size: 4vh;
`

function CardMateria(props) {
    return (
        <Card>
            <TituloMateria>{props.materia}</TituloMateria> 
            <ImgCard
            src={`${props.imgSrc}`} 
            alt={props.materia}>
            </ImgCard>
        </Card>
    );
}

export default CardMateria;