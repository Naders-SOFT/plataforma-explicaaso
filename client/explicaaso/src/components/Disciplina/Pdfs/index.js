import styled from 'styled-components'
import ItemAviso from '../ItemAviso';
import TituloDisciplina from '../Titulo';
import ItemAdicionar from '../ItemAdicionar';
import axios from 'axios'
import { useEffect, useState } from 'react'
import Frentes from '../Frentes/index';
import gramatica from '../../../images/frentes/gra.jpeg';
import literatura from '../../../images/frentes/lit.jpeg';
import interpretacao from '../../../images/frentes/int.jpeg';
import ingles from '../../../images/frentes/ing.jpeg';
import redacao from '../../../images/frentes/red.jpeg';
import his1 from '../../../images/frentes/his1.jpeg';
import his2 from '../../../images/frentes/his2.jpeg';
import geo1 from '../../../images/frentes/geo1.jpeg';
import geo2 from '../../../images/frentes/geo2.jpeg';
import fil from '../../../images/frentes/fil.jpeg';
import soc from '../../../images/frentes/soc.jpeg';
import bio1 from '../../../images/frentes/bio1.jpeg';
import bio2 from '../../../images/frentes/bio2.jpeg';
import bio3 from '../../../images/frentes/bio3.jpeg';
import fis1 from '../../../images/frentes/fis1.jpeg';
import fis2 from '../../../images/frentes/fis2.jpeg';
import fis3 from '../../../images/frentes/fis3.jpeg';
import qui1 from '../../../images/frentes/qui1.jpeg';
import qui2 from '../../../images/frentes/qui2.jpeg';
import qui3 from '../../../images/frentes/qui3.jpeg';
import mat1 from '../../../images/frentes/mat1.jpeg';
import mat2 from '../../../images/frentes/mat2.jpeg';
import mat3 from '../../../images/frentes/mat3.jpeg';

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

const frentes = [
        { name: 'gramatica', image: gramatica },
        { name: 'literatura', image: literatura },
        { name: 'interpretacao', image: interpretacao },
        { name: 'ingles', image: ingles },
        { name: 'redacao', image: redacao },
        { name: 'his1', image: his1 },
        { name: 'his2', image: his2 },
        { name: 'geo1', image: geo1 },
        { name: 'geo2', image: geo2 },
        { name: 'fil', image: fil },
        { name: 'soc', image: soc },
        { name: 'bio1', image: bio1 },
        { name: 'bio2', image: bio2 },
        { name: 'bio3', image: bio3 },
        { name: 'fis1', image: fis1 },
        { name: 'fis2', image: fis2 },
        { name: 'fis3', image: fis3 },
        { name: 'qui1', image: qui1 },
        { name: 'qui2', image: qui2 },
        { name: 'qui3', image: qui3 },
        { name: 'mat1', image: mat1 },
        { name: 'mat2', image: mat2 },
        { name: 'mat3', image: mat3 },
    ];

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

    const listaPdfs = pdfs.map(pdf => (
            <ItemAviso tituloAviso={pdf.titulo} link={pdf.link} idPdf={pdf._id.toString()} onDelete={handleDelete}></ItemAviso>

    ))

    return (
        <Container>
            {
                props.isMobile &&
                <AvisosPainel>
                    <TituloDisciplina tituloDisciplina={props.tituloDisciplina}/>
                    <ItemAdicionar/>
                    {listaPdfs}
                    <Frentes frentes={frentes} />
                </AvisosPainel>
            }
            {
                !props.isMobile &&
                <AvisosPainel>
                    <TituloDisciplina tituloDisciplina={props.tituloDisciplina}/>
                    <ItemAdicionar/>
                    {listaPdfs}
                    <Frentes frentes={frentes} />
                </AvisosPainel>
            }
        </Container>
    );

}

export default Avisos;
