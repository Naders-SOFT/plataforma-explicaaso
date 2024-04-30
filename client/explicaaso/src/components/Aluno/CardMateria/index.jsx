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
    width: 22vw;
    height: 12vw;
    border-radius: 2vw;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`

const TituloMateria = styled.h1`
    font-size: 150%;
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