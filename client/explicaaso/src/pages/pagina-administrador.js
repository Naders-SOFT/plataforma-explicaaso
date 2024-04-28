import Header from '../components/Head/Header'
import styled from 'styled-components';
import BarrinhaTurquesa from '../components/Head/BarrinhaTurquesa'
import SideBar from '../components/Administrador/SideBar';
import items from '../components/Administrador/Gerenciador';
import ListaItem from '../components/Administrador/ListaAdmin';
import ContainerAdmin from '../components/Administrador/Gerenciador'
import imgPerfil from '../images/logos/pefil.jpg'

const ContainerAluno = styled.div`
    width: 100vw;
    ${'' /* min-height: 100vh; */}
    height: auto;
    background-color: white;
    display: flex;
    flex-direction: column;
`

const ContainerPag = styled.div`
    width: 100%;
    height: 100%;
`
const H2 = styled.h2`
    color: #FF6600;
    font-size: 50px;
    margin-top: 0;
    width: 500px;
    margin-left: 100px; /* Adiciona um espaçamento de 20 pixels no lado esquerdo */

    @media only screen and (max-width: 768px) {
        font-size: 30px;
        width: 100%;
        text-align: center;
    }
`
const Titulo = styled.div`
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`

const Miolo = styled.div`
    display: grid;
    grid-template-columns: 1fr 7fr;
    flex-wrap: wrap;
    width: 100%;
    ${'' /* height: 100%; */}
`


function PaginaAdmin(props) {
    return (
        <ContainerPag>
            <Header/>
            <BarrinhaTurquesa/>
            <Miolo>
                <SideBar imgPerfil={imgPerfil}></SideBar>
                <H2>Administrador</H2>
            </Miolo>
            <ContainerAdmin>
                <Titulo>Professores</Titulo>
                <ul className="list">
                {items.map((item, index) => (
                    <ListaItem>
                        key={index}
                        name={item.name}
                        subject={item.subject}
                        date={item.date}
                        onRemove={() => console.log(`Removed professor ${item.name}`)}
                    </ListaItem>
                ))}
                </ul>    
            </ContainerAdmin>
        </ContainerPag>

    );
}

export default PaginaAdmin;