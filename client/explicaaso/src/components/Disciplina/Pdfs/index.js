import styled from 'styled-components'
import ItemAviso from '../ItemAviso';
import TituloDisciplina from '../Titulo';
import ItemAdicionar from '../ItemAdicionar';
import axios from 'axios'
import { useEffect, useState } from 'react'

const AvisosPainel = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0px;
    ${'' /* flex-direction: column; */}
    align-items: center;
    justify-content: flex-start;
    margin: 0px;
`

const Container = styled.div`
    width: 100%;
`

function Avisos(props) {
    // Utilizando useState para alterar o valor da lista de pdfs apos req GET
    const [pdfs, setPdfs] = useState([])
    useEffect(() => {
      axios.get("http://localhost:3003/pdf/list")
      .then(response => {
        setPdfs(response.data)
      })
      .catch(err => {
        console.error(err.message)
      })
    }, [])

    // Funcao de deletar, passado por props
    const handleDelete = (id) => {
        // Requisicao de DELETE
        axios.delete('http://localhost:3003/pdf/delete/'+id)
        .then(response => {
            console.log('User deleted successfully');

            // Removendo o pdf que foi deletado
            setPdfs(pdfs.filter(pdf => pdf._id.toString() !== id));
        })
        .catch(error => {
            console.error('Error deleting user aaaa:', error);
        })
    }

    // Renderizando a lista de pdfs 
    const listaPdfs = pdfs.map(pdf => (
        <ItemAviso tituloAviso={pdf.titulo} link={pdf.link} idPdf={pdf._id.toString()} onDelete={handleDelete}></ItemAviso>
    ))

    return (
        <Container>
            {
                props.isMobile &&
                <AvisosPainel>
                    <ItemAdicionar tituloDisciplina={props.tituloDisciplina} tituloFrente='nao sei'/>
                    <TituloDisciplina tituloDisciplina={props.tituloDisciplina}/>
                    {listaPdfs}
                </AvisosPainel>
            }
            {
                !props.isMobile &&
                <AvisosPainel>
                    <TituloDisciplina tituloDisciplina={props.tituloDisciplina}/>
                    <ItemAdicionar tituloDisciplina={props.tituloDisciplina} tituloFrente='nao sei'/>
                    {listaPdfs}
                </AvisosPainel>
            }
        </Container>
    );

}

export default Avisos;