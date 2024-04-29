import styled from 'styled-components';
import SideBar from '../SideBar';
import ProfessorList from './Gerenciador';

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