import Header from '../Header'
import ContainerMateria from '../ContainerMateria'
import styled from 'styled-components';

const ContainerAluno = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: auto;
    background-color: white;
    display: flex;
    flex-direction: column;
`

const ContainerPag = styled.div`
    width: 100%;
`

function PaginaAluno(props) {
    return (
        <ContainerPag>
            <Header></Header>
            <ContainerMateria>
                <li>lalallala</li>
                <p>lalaskdadhuady8gad7</p>
            </ContainerMateria>
        </ContainerPag>
    );
}

export default PaginaAluno;