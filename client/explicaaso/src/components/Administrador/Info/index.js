import styled from 'styled-components';
import SideBar from '../SideBar';
import PessoaList from '../Gerenciador';
import React, { useState } from 'react' ;


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
    const [selectedType, setSelectedType] = useState("Alunos"); // Estado inicial para o tipo selecionado


    const lista_professors = [
        { name: 'Albert', subject: 'Mathematics', date: 'Dec 5' },
        { name: 'Bart', subject: 'Physics', date: 'Dec 5' },
    ];

    const lista_alunos = [
        { name: 'Isaac', email: 'harim@gmail.com', date: 'Dec 5' },
        { name: 'Bart', email: 'Physics@gmail.com', date: 'Dec 5' },
    ];

    const handleSelectedType = (type) => {
        setSelectedType(type);
    };
    
    const selectedData = selectedType === 'Professores' ? lista_professors : lista_alunos;


    // definindo retorno como side bar e ao lado a lista de pessoas (professores ou alunos)
    return (
        <Container>
            {
                props.isMobile ?
                (
                    <MOBLINFO>
                        <SideBar isMobile={props.isMobile} handleSelectedType={handleSelectedType} />
                        <PessoaList items={selectedData} itemType={selectedType === 'Professores' ? 'professors' : 'alunos'} />
                        </MOBLINFO>
                ) :
                (
                    <DSKINFO>
                        <SideBar isMobile={props.isMobile} imgPerfil={props.imgPerfil}  handleSelectedType={handleSelectedType} />
                        <PessoaList items={selectedData} itemType={selectedType === 'Professores' ? 'professors' : 'alunos'} />
                        </DSKINFO>
                )
            }
        </Container>
    );
}



export default Informacao;