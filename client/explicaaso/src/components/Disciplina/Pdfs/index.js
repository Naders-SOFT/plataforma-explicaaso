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

    const listaPdfs = pdfs.map(pdf => (
        <ItemAviso tituloAviso={pdf.titulo} link={pdf.link}></ItemAviso>
    ))

    return (
        <Container>
            {
                props.isMobile &&
                <AvisosPainel>
                    <ItemAdicionar/>
                    <TituloDisciplina tituloDisciplina={props.tituloDisciplina}/>
                    {listaPdfs}
                </AvisosPainel>
            }
            {
                !props.isMobile &&
                <AvisosPainel>
                    <TituloDisciplina tituloDisciplina={props.tituloDisciplina}/>
                    <ItemAdicionar/>
                    {listaPdfs}
                </AvisosPainel>
            }
        </Container>
    );

}

export default Avisos;