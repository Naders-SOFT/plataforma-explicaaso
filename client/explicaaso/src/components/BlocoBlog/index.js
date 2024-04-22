import styled from 'styled-components';

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
    
`
const H2 = styled.h2`
    color: #FF6600;
    font-size: 200%;
    margin-top: 10px;
    margin-bottom: 4px;
    width: 500vw;
    text-align: center;

`

const TituloPost = styled.h3`
    color: white;
    margin-bottom: 0%;
    padding: 0;
    text-decoration: underline;

`


const Postagem = styled.section`
    font-size: 100%;
    color: white;
    margin-top: 0%;
    text-align: left;

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
                

            </Postagem>


            </BlocoContainer>

        </ContainerPag>


    )
}

export default BlocoBlog