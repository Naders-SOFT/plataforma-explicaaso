import styled from 'styled-components';
import SideBar from '../SideBar';
import { AlunoList } from '../Gerenciador';
import { ProfessorList } from '../Gerenciador';
import React, { useState } from 'react';

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
    // Example usage of the ProfessorList component
    const professors = [
        { name: 'Albert', subject: 'Mathematics', date: 'Dec 5' },
        { name: 'Bart', subject: 'Physics', date: 'Dec 5' },
    ];

    const alunos = [
        { name: 'Isaac', EmailAuthCredential: 'harim@gmail.com', date: 'Dec 5' },
        { name: 'Bart', email: 'Physics@gmail.com', date: 'Dec 5' },
    ];

    const [selectedData, setSelectedData] = useState([]);
    
    const handleSlection = (type) => {
        if (type === 'Professor') {
            setSelectedData(professors);
        }else if( type == 'Aluno'){
            setSelectedData(alunos);
        }
    }
  
    return (
        <Container>
            {
                props.isMobile &&
                <MOBLINFO>
                    <SideBar isMobile={props.isMobile}/>
                    <ProfessorList professors={professors}/>

                </MOBLINFO>
            }
            {
                !props.isMobile &&
                <DSKINFO>
                    <SideBar isMobile={props.isMobile} imgPerfil={props.imgPerfil}/>
                    <ProfessorList professors={professors}/>
                </DSKINFO>
            }

        </Container>
    );
}



export default Informacao;