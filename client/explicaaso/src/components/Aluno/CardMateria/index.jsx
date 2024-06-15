import styled from 'styled-components';

const TituloMateria = styled.h1`
    font-size: 150%;
`

function CardMateria(props) {
    const Card = styled.li`
        width: ${props => props.isMobile ? '60%' : '100%'};
        height: ${props => props.isMobile ? '50%' : '100%'};
        display: flex;
        flex-direction: column;
        color: black;
        justify-content: center;
        align-items: center;
        background-color: #f8f8f8;
        border-radius: 8%;
        text-rendering: optimizeLegibility;
        box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
        transition: transform 0.5s;
        -webkit-transition: transform 0.5s;

        &:hover {
        cursor: pointer;
        transform: scale(1.1);
        -webkit-transform: scale(1.1);
        }
    `

    const ImgCard = styled.img`
        width: 100%;
        height: ${props => props.isMobile ? '50%' : '100%'};
        border-radius: 6px 6px 0px 0px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 6px 6px 0px 0px;
        opacity: 0.91;
    `

    return (
        <Card isMobile={props.isMobile}>
            <TituloMateria>{props.materia}</TituloMateria> 
            <ImgCard
                src={`${props.imgSrc}`} 
                alt={props.materia}
                isMobile={props.isMobile}>
            </ImgCard>
        </Card>
    );
}

export default CardMateria;
