import styled from 'styled-components'
import ItemAviso from '../ItemAviso';
import TituloDisciplina from '../Titulo';
import ItemAdicionar from '../ItemAdicionar';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);



const AvisosPainel = styled.ul`
    display: flex;
    width: 100%;
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
      axios.get(`http://localhost:3003/pdf/list/${props.tituloFrente}`)
      .then(response => {
        setPdfs(response.data)
      })
      .catch(err => {
        console.error(err.message)
      })
    }, [props.tituloFrente])

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

    const listaPdfs = pdfs.map((pdf, index) => (
            <ItemAviso key={index} tituloAviso={pdf.titulo} link={pdf.link} idPdf={pdf._id.toString()} onDelete={handleDelete}></ItemAviso>
    ))

    const tipoUsr = localStorage.getItem("tipoUsuario")

    return (
        <Container>
            {
                props.isMobile &&
                <AvisosPainel>
                    <TituloDisciplina tituloDisciplina={props.tituloFrente}/>
                    {tipoUsr !== "aluno" && <ItemAdicionar tituloDisciplina={props.tituloDisciplina} tituloFrente={props.tituloFrente}/>}
                    {listaPdfs}
                </AvisosPainel>
            }
            {
                !props.isMobile &&
                <AvisosPainel>
                    <TituloDisciplina tituloDisciplina={props.tituloFrente}/>
                    {tipoUsr !== "aluno" && <ItemAdicionar tituloDisciplina={props.tituloDisciplina} tituloFrente={props.tituloFrente}/>}
                    {listaPdfs}
                </AvisosPainel>
            }
        </Container>
    );

}

export default Avisos;
