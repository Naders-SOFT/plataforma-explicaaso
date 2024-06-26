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

    // Função para atualizar o estado com os usuários selecionados
    const handleSelectedUsuarios = (selectedUsuarios) => {
        setSelectedUsuarios(selectedUsuarios);
    };
    

    // Renderiza a barra lateral (SideBar) e a lista de pessoas (PessoaList)
    // Ajusta a disposição conforme o dispositivo é móvel ou desktop
    return (
        <Container>
            {
                props.isMobile ?
                (
                    <MOBLINFO>
                        {/* Passa a propriedade isMobile e a função handleSelectedUsuarios para o SideBar */}
                        <SideBar isMobile={props.isMobile} handleSelectedUsuarios={handleSelectedUsuarios} />
                        {/* Passa a lista de usuários selecionados para o PessoaList */}
                        <PessoaList items={selectedUsuarios}/>
                        </MOBLINFO>
                ) :
                (
                    <DSKINFO>
                        {/*  Passa a propriedade isMobile, faz aparecer a imgPerfil e a função handleSelectedUsuarios para o SideBar */}
                        <SideBar isMobile={props.isMobile} imgPerfil={props.imgPerfil}  handleSelectedUsuarios={handleSelectedUsuarios} />
                        {/* Passa a lista de usuários selecionados para o PessoaList */}
                        <PessoaList items={selectedUsuarios} />
                        </DSKINFO>
                )
            }
        </Container>
    );
}



export default Informacao;