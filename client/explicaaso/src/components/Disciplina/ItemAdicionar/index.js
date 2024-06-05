import styled from "styled-components";
import axios from 'axios'
import { useState } from 'react'

const ItemContainer = styled.li`
    width: 100%;
    display: flex;
    color: black;
    gap: 2%;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: #f0f0f0;
    border-radius: 1rem;
    margin: 1rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Formulario = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 1rem;
    margin: 1rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const EscolherArqLabel = styled.label`
    cursor: pointer;
    color: darkcyan;
    transition: color 0.3s ease, cursor 0.3s ease;
    width: 15%;
    
    &:hover {
        color: #002549;
        cursor: pointer;
    }
`;

const EscolherArq = styled.input`
    display: none;
`;

const Botao = styled.button`
    padding: 0.5rem 1rem;
    background-color: darkcyan;
    color: white;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #002549;
    }
`;

function ItemAdicionar(props) {
    const [file, setFile] = useState(null);
  
    const submit = async event => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append("arq-pdf", file);
        formData.append("disciplina", props.tituloDisciplina);
        formData.append("frente", props.tituloFrente);

        try {
            await axios.post("http://localhost:3003/pdf/posts", formData);
            window.location.reload();
        }
        catch(error) {
            console.error(error.response.data);
        }
    };
  
    return (
       <Formulario onSubmit={submit}>
            <EscolherArqLabel htmlFor="fileInput">Escolher Arquivo</EscolherArqLabel>
            <EscolherArq id="fileInput" onChange={e => setFile(e.target.files[0])} type="file" />
            <Botao type="submit">Enviar</Botao>
       </Formulario>
    );
}

export default ItemAdicionar;
