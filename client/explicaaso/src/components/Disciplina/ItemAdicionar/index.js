import { IoIosSend } from "react-icons/io";
import styled from "styled-components";
import axios from 'axios';
import { useState } from 'react';

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
    width: fit-content;
    padding: 0.5rem 1rem;
    background-color: #f0f0f0;
    border: 1px solid darkcyan;
    border-radius: 0.5rem;
    text-align: center;
    
    &:hover {
        color: #002549;
        border-color: #002549;
    }
`;

const EscolherArq = styled.input`
    display: none;
`;

const BotaoEnviar = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
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
    const [novoNome, setNovoNome] = useState("")
  
    const submit = async event => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append("arq-pdf", file);
        formData.append("disciplina", props.tituloDisciplina);
        formData.append("frente", props.tituloFrente);
        formData.append('novoNome', novoNome)

        try {
            await axios.post("http://localhost:3003/pdf/posts", formData,
            { headers: {'Content-Type': 'multipart/form-data'}});
            window.location.reload();
        }
        catch(error) {
            console.error(error.response.data);
        }
    };
  
    return (
       <ItemContainer>
           <Formulario onSubmit={submit}>
                <EscolherArqLabel htmlFor="fileInput">Escolher Arquivo</EscolherArqLabel>
                <EscolherArq id="fileInput" onChange={e => setFile(e.target.files[0])} type="file" />
                 <input value={novoNome} onChange={e => setNovoNome(e.target.value)} type="text" placeholder='Deseja renomear o arquivo ?'></input>
                <BotaoEnviar type="submit"><IoIosSend size={20} /> Enviar</BotaoEnviar>
           </Formulario>
       </ItemContainer>
    );
}

export default ItemAdicionar;
