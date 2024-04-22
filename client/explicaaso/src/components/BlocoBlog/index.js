import styled from 'styled-components';
import placeholder from '../../images/aprovados/placeholder.png'


const ContainerPag = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

`

const BlocoContainer = styled.section`
    align-items: center;
    background-color: #003466;
    border-radius: 4vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5%;
    width: 90%;

`

const H1 = styled.h1`
    color: white;

    @media (min-width: 768px) {
        font-size: 220%;
    }
    
`
const H2 = styled.h2`
    color: #FF6600;
    font-size: 200%;
    margin-top: 10px;
    margin-bottom: 4px;
    width: 500vw;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 250%;
    }

`

const TituloPost = styled.h3`
    color: white;
    margin-bottom: 0%;
    padding: 0;
    text-decoration: underline;

    @media (min-width: 768px) {
        font-size: 200%;
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
        display: block;
        margin: auto;
    }
`

const Postagem = styled.section`
    font-size: 100%;
    color: white;
    margin-top: 0%;
    display: flex;
    padding-left: 5%;
    padding-right: 5%;

    @media (min-width: 768px) {
        font-size: 150%;
        flex-direction: column
    }

`

function BlocoBlog() {
    return(
        <ContainerPag>
            <BlocoContainer>
            <H2>Blog</H2>
            <H1>Postagens mais recentes:</H1>
            <br/>

            <TituloPost>A educação no Brasil</TituloPost>
            <Postagem>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper neque eget mi ullamcorper, eget lacinia mauris pretium. Mauris fringilla efficitur arcu, ac eleifend quam...</p>
                <IMG src = {placeholder} alt="placeholder"></IMG>
            </Postagem>

            <TituloPost>A importância dos cursinhos populares</TituloPost>
            <Postagem>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper neque eget mi ullamcorper, eget lacinia mauris pretium. Mauris fringilla efficitur arcu, ac eleifend quam...</p>
                <IMG src = {placeholder} alt="placeholder"></IMG>
            </Postagem>

            <TituloPost>Como estudar para o vestibular</TituloPost>
            <Postagem>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper neque eget mi ullamcorper, eget lacinia mauris pretium. Mauris fringilla efficitur arcu, ac eleifend quam...</p>
                <IMG src = {placeholder} alt="placeholder"></IMG>
            </Postagem>


            </BlocoContainer>

        </ContainerPag>


    )
}

export default BlocoBlog