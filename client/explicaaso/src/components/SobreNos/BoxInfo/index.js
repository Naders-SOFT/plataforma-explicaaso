import styled from "styled-components";

const BlocoInfo = styled.div`
    align-items: center;
    background-color: #003466;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 50px;
    width: 70%;
`

const IMGDIV = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 3%;
    padding: 0;
    width: 90%;
    position: relative;
`

const IMG = styled.img`
    width: 100%;
`

const H2 = styled.h2`
    color: #FF6600;
    font-size: 40px;
    width: 100%;
    text-align: flex-start;
    margin: 0 0 0 3%;
    bottom: 3%;
    position: absolute;
`

const CORPO = styled.p`
    color: white;
    font-size: 30px;
    margin: 5% 5% 5% 5%;
`

function BoxInfo(props) {
    return(
        <BlocoInfo>
            <IMGDIV>
                <IMG src={`${props.imgSrc}`} alt={props.imgAlt}></IMG>
                <H2>{props.titulo}</H2>
            </IMGDIV>
            <CORPO>{props.texto}</CORPO>
        </BlocoInfo>
    );
}

export default BoxInfo;