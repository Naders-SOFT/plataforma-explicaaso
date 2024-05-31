import axios from 'axios'
import { useState } from 'react'
import styled from 'styled-components'
import addImg from '../../../images/disciplina/add-add-plus-sign.svg'


const Formulario = styled.form`
    width: 100%;
    display: flex;
    color: black;
    gap: 2%;
    justify-content: center;
    align-items: center;
    padding: 1vw;
    background-color: rgba(0, 52, 102, 0.5);
    background-opacity: 0.5;
    border-radius: 1rem;
    margin: 1%;

    ${'' /* &:hover {
        opacity: 0.5;
        cursor: pointer;
    } */}
`

const EscolherArq = styled.input`
  ${'' /* display: none; */}
  ${'' /* opacity: 0; */}
  ${'' /* background-color: black; */}
`

const ImgAdd = styled.img`
    width: 4%;
    height: 4%;
`

export default function NewGet(props) {  
    const [file, setFile] = useState(null)
  
    const submit = async event => {
      event.preventDefault()
  
      try {
        await axios.get("http://localhost:3003/pdf/list")
      }
      catch(error) {
        console.error(error.response.data);
      }
    }
  
    return (
       <Formulario onSubmit={submit}>
        {/* <ImgAdd src={addImg}/> */}
         <EscolherArq onChange={e => setFile(e.target.files[0])} type="file"></EscolherArq>
         <button type="submit">Submit</button>
       </Formulario>
    )
  }