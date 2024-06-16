import { IoIosSend } from "react-icons/io";
import styled from "styled-components";
import axios from 'axios';
import { useState } from 'react';

const ItemContainer = styled.li`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 1.5rem;
    margin: 1.5rem 0;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const Formulario = styled.form`
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2.5rem;
    background-color: #ffffff;
    border-radius: 1.5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const EscolherArqLabel = styled.label`
    cursor: pointer;
    color: darkcyan;
    transition: color 0.3s ease, background-color 0.3s ease;
    padding: 1rem 1.5rem;
    background-color: #e6f7ff;
    border: 2px solid darkcyan;
    border-radius: 0.75rem;
    text-align: center;
    
    &:hover {
        color: #002549;
        background-color: #cceeff;
    }
`;

const EscolherArq = styled.input`
    display: none;
`;

const InputText = styled.input`
    padding: 1rem;
    border: 2px solid #ddd;
    border-radius: 0.75rem;
    font-size: 1rem;
    color: #002549;
    width: 100%;
    box-sizing: border-box;
    
    &:focus {
        border-color: #002549;
        outline: none;
    }
`;

const BotaoEnviar = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem 1.5rem;
    background-color: darkcyan;
    color: #fff;
    border: none;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    
    &:hover {
        background-color: #002549;
    }
`;

function ItemAdicionar(props) {
    const [file, setFile] = useState(null);
    const [novoNome, setNovoNome] = useState("");
  
    const submit = async event => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append("arq-pdf", file);
        formData.append("disciplina", props.tituloDisciplina);
        formData.append("frente", props.tituloFrente);
        formData.append('novoNome', novoNome);

        try {
            await axios.post("http://localhost:3003/pdf/posts", formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            });
            window.location.reload();
        } catch (error) {
            console.error(error.response.data);
        }
    };
  
    return (
        <ItemContainer>
            <Formulario onSubmit={submit}>
                <EscolherArqLabel htmlFor="fileInput">Escolher Arquivo</EscolherArqLabel>
                <EscolherArq id="fileInput" onChange={e => setFile(e.target.files[0])} type="file" />
                <InputText 
                    value={novoNome} 
                    onChange={e => setNovoNome(e.target.value)} 
                    type="text" 
                    placeholder="Deseja renomear o arquivo?" 
                />
                <BotaoEnviar type="submit">
                    <IoIosSend size={20} /> Enviar
                </BotaoEnviar>
            </Formulario>
        </ItemContainer>
    );
}

export default ItemAdicionar;
