import styled from 'styled-components';
import SideBar from '../SideBar';
import PessoaList from '../Gerenciador';
import React, { useState } from 'react' ;
import Axios from 'axios';


const MOBLINFO = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
`

const DSKINFO = styled.div`
    display: grid;
    grid-template-columns: 1fr 8fr;
    flex-wrap: wrap;
    gap: 1vw;
`
const Container = styled.div`
    width: 100%;
`


function Informacao(props) {
    const [selectedUsuarios, setSelectedUsuarios] = useState([]); // Estado inicial para o tipo selecionado


    // Função para buscar os dados dos professores e alunos


    const handleSelectedUsuarios = (selectedUsuarios) => {
        setSelectedUsuarios(selectedUsuarios);
    };
    

    // definindo retorno como side bar e ao lado a lista de pessoas (professores ou alunos)
    return (
        <Container>
            {
                props.isMobile ?
                (
                    <MOBLINFO>
                        <SideBar isMobile={props.isMobile} handleSelectedUsuarios={handleSelectedUsuarios} />
                        <PessoaList items={selectedUsuarios}/>
                        </MOBLINFO>
                ) :
                (
                    <DSKINFO>
                        <SideBar isMobile={props.isMobile} imgPerfil={props.imgPerfil}  handleSelectedUsuarios={handleSelectedUsuarios} />
                        <PessoaList items={selectedUsuarios} />
                        </DSKINFO>
                )
            }
        </Container>
    );
}



export default Informacao;