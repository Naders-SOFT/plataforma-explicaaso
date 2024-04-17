import styled from 'styled-components';

const Card = styled.li`
    width: 100%;
    background-color: blue;
    display: block;
    flex-wrap: wrap;
`

const ImgCard = styled.img`
    width: 50%;
    height: 50%;
`

function CardMateria(props) {
    return (
        <Card>
            <h1>
                {props.materia}
            </h1> 
            <ImgCard
            src={`${props.imgSrc}`} 
            alt={props.materia}>
            </ImgCard>
        </Card>
    );
}

export default CardMateria;