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
    width: 50%;
    height: 50%;
    border-radius: 2vh;
`

function CardMateria(props) {
    return (
        <Card>
            <h1>{props.materia}</h1> 
            <ImgCard
            src={`${props.imgSrc}`} 
            alt={props.materia}>
            </ImgCard>
        </Card>
    );
}

export default CardMateria;