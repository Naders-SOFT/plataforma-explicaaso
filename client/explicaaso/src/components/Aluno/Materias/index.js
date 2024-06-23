import styled from 'styled-components';
import CardMateria from '../CardMateria';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import imgAdicionar from '../../../images/misc/add-button-svgrepo-com.svg'


const MOBLMATERIAS = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    padding: 0px;
    ${'' /* background-color: blue; */}
    margin: 0px;
`
const DSKMATERIAS = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2vw;
    list-style-type: none;
    padding: 0px 2% 0px 0px;
    align-items: flex-start;
    justify-content: center;
    margin: 0px;
    min-height: 100vh;
`

const Container = styled.div`
    width: 100%;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    transition: color 0.3s ease;
    font-family: Inter;
    font-size: 120%;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
`

function ContainerMateria(props) {
    const [user, setUser] = useState('');
    const [materiaLecionada, setMateriaLecionada] = useState('');
    useEffect(() => {
        const token = localStorage.getItem('token');
        setUser(token ? jwtDecode(token).tipoUsuario : '');
      

        window.addEventListener("storage", () => {
            const token = localStorage.getItem('token');
            setUser(token ? jwtDecode(token).tipoUsuario : '');
        })
    }, [user]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setMateriaLecionada(token ? jwtDecode(token).materiaProf : '');
    

        window.addEventListener("storage", () => {
            const token = localStorage.getItem('token');
            setMateriaLecionada(token ? jwtDecode(token).materiaProf : '');
        })
    }, [materiaLecionada]);

    let materias

    if (user !== 'professor') { // usuario é aluno ou adm
        materias = props.materias.map((mat) => (
            <div key={mat.nome}> 
                <StyledLink to={`/pagina-aluno/${mat.nome}`}>
                    <CardMateria imgSrc={mat.imagem} materia={mat.nome} isMobile={props.isMobile} frentes={mat.frentes}/>
                </StyledLink>
            </div>
        ))
    }
    else { 
        materias = 
            props.materias
            .filter(mat => mat.nome === materiaLecionada)
            .map((mat) => (
                <div key={mat.nome}> 
                    <StyledLink to={`/pagina-aluno/${mat.nome}`}>
                        <CardMateria imgSrc={mat.imagem} materia={mat.nome} isMobile={props.isMobile} frentes={mat.frentes}/>
                    </StyledLink>
                </div>
            ))
    }

    const cardAdicionar = 
    <div>
        <StyledLink to={'/pagina-cadastro-materia'}>
            <CardMateria imgSrc={imgAdicionar} materia='Adicionar matéria' isMobile={props.isMobile} frentes={['']}/>
        </StyledLink>
    </div>

    return (
        <Container>
            {props.isMobile &&
                <MOBLMATERIAS>
                    {materias}
                    {cardAdicionar}
                </MOBLMATERIAS>
            }
            {!props.isMobile &&
                <DSKMATERIAS>
                    {materias}
                    {cardAdicionar}
                </DSKMATERIAS>
            }
        </Container>
    );
}

export default ContainerMateria;
