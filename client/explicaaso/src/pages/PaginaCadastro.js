import styled, { css } from "styled-components"
import React, { useState } from 'react'
import axios from "axios"

const ContainerPag = styled.div`
    width: 100%;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 10%;
`;


const Formulario = styled.form`
  background-color: #fff;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;
  background-color: #f5f5f5;

  h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
  }
`;

const inputStyles = css`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  ${inputStyles}
`;

const Select = styled.select`
  ${inputStyles}
`;

const Botao = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0069d9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

function PaginaCadastro(props) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [tipo, setTipo] = useState('');
    const [message, setMessage] = useState(null); // For success/error messages

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3003/user/signup', 
            {
                nome: nome,
                sobrenome: sobrenome,
                tipo: tipo,
                senha: senha,
                email: email
            },
            {
                headers: {
                    'Content-Type': 'application/json' 
                },
            });

            if (response.ok) {
                setMessage(response.message); // Display success message
                setNome('');
                setSobrenome('');
                setEmail(''); 
                setSenha('')
                setTipo('')
            } else {
                setMessage(response.error); // Display error message
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <FormContainer>
 
            <Formulario onSubmit={handleSubmit}>
                <h2>Enter Your InFormularioation</h2>
                {message && <div>{message}</div>} 
                <div>
                    <Label htmlFor="name">Name:</Label>
                    <Select
                        type="text"
                        id="name"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor="surname">Surname:</Label>
                    <Select
                        type="text"
                        id="surname"
                        value={sobrenome}
                        onChange={(e) => setSobrenome(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor="email">Email:</Label>
                    <Select
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor="tipo">Tipo:</Label>
                    <Select
                        type="text"
                        id="tipo"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor="senha">Senha:</Label>
                    <Select
                        type="text"
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </Formulario>
        </FormContainer>
    );
}

export default PaginaCadastro