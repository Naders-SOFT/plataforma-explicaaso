import { IoIosSend } from "react-icons/io";
import styled from "styled-components";
import axios from 'axios';
import { useState } from 'react';

// estiliza o container do item
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

// estiliza o formulário
const Formulario = styled.form`
    width: 80%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2.5rem;
    background-color: #ffffff;
    border-radius: 1.5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

// estiliza o label para escolher arquivo
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

// estiliza o input para escolher arquivo
const EscolherArq = styled.input`
    display: none;
`;

// estiliza o input de texto
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

// estiliza o botão de enviar
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

// estiliza o nome do arquivo
const NomeArquivo = styled.p`
    margin-top: -1rem;
    color: #555;
    font-size: 0.9rem;
    text-align: center;
`;

function ItemAdicionar(props) {
    const [file, setFile] = useState(null); // estado para armazenar o arquivo
    const [novoNome, setNovoNome] = useState(""); // estado para armazenar o novo nome do arquivo
  
    // função para lidar com o submit do formulário
    const submit = async event => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append("arq-pdf", file); // adiciona o arquivo ao FormData
        formData.append("disciplina", props.tituloDisciplina); // adiciona a disciplina ao FormData
        formData.append("frente", props.tituloFrente); // adiciona a frente ao FormData
        formData.append('novoNome', novoNome); // adiciona o novo nome ao FormData

        try {
            await axios.post("http://localhost:3003/pdf/posts", formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            });
            window.location.reload(); // recarrega a página após enviar o formulário
        } catch (error) {
            console.error(error.response.data); // exibe erro no console
        }
    };

    return (
        <ItemContainer>
            <Formulario onSubmit={submit}>
                <EscolherArqLabel htmlFor="fileInput">Escolher Arquivo</EscolherArqLabel>
                <EscolherArq 
                    id="fileInput" 
                    onChange={e => setFile(e.target.files[0])} 
                    type="file" 
                />
                {file && <NomeArquivo>Arquivo selecionado: {file.name}</NomeArquivo>}
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
