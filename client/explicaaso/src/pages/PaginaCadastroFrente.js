import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { IoAddCircle } from "react-icons/io5";
import { authAxios } from '../App'; 

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0;
  margin: 10%;
`;

const CadastroTitulo = styled.h1`
  color: #ffcc00;
  font-size: 36px;
`;

const Formulario = styled.form`
  background-color: #003466;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 90%;

  h2 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
  }
`;

const inputStyles = css`
  width: 93.5%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  color: white;
  margin-bottom: 20px;
  font-size: 16px;
  background-color: #265a9b;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  }
`;

const Label = styled.label`
  color: white;
  font-size: 20px;
  font-weight: 600;
`;

const Input = styled.input`
  ${inputStyles}
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

const Botao = styled.button`
  width: 100%;
  padding: 12px 0;
  background-color: #ffcc00;
  border: none;
  border-radius: 10px;
  color: #003466;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffbf00;
  }
`;

const MensagemErro = styled.p`
  color: #ffcc00;
  font-size: 14px;
  margin-top: -10px;
`;

const MensagemSucesso = styled.p`
  color: #ffcc00;
  font-size: 14px;
  margin-top: -10px;
`;

const PaginaCadastroFrente = () => {
  const [nomeFrente, setNomeFrente] = useState('');
  const [imagemLogo, setImagemLogo] = useState('');
  const [materiaId, setMateriaId] = useState('');
  const [feedbackErro, setFeedbackErro] = useState('');
  const [feedbackSucesso, setFeedbackSucesso] = useState('');

  const handleAdicionarFrente = async (e) => {
    e.preventDefault();
    setFeedbackErro('');
    setFeedbackSucesso('');

    try {
        const url = `http://localhost:3003/createFrente/${encodeURIComponent(materiaId)}`;
        console.log("URL codificada:", url); // Verifica a URL no console
  
        const response = await authAxios.post(
          url,
          {
            nomeFrente: nomeFrente,
            imgFrente: imagemLogo,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

      if (response.status === 201) {
        setNomeFrente('');
        setImagemLogo('');
        setMateriaId('');
        setFeedbackSucesso('Frente adicionada com sucesso!');
      } else {
        const errorData = await response.json();
        setFeedbackErro(errorData.error || 'Erro ao adicionar frente.');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      setFeedbackErro(error.response.data.message);
    }
  };

  return (
    <FormContainer>
      <Formulario onSubmit={handleAdicionarFrente}>
        <CadastroTitulo>Cadastro de Frente</CadastroTitulo>

        <Label htmlFor="nomeFrente">Nome da Frente:</Label>
        <Input
          type="text"
          id="nomeFrente"
          value={nomeFrente}
          onChange={(e) => setNomeFrente(e.target.value)}
          required
        />

        <Label htmlFor="imagemLogo">Imagem da Frente:</Label>
        <Input
          type="text"
          id="imagemLogo"
          value={imagemLogo}
          onChange={(e) => setImagemLogo(e.target.value)}
          required
        />

        <Label htmlFor="materiaId">ID da Matéria:</Label>
        <Input
          type="text"
          id="materiaId"
          value={materiaId}
          onChange={(e) => setMateriaId(e.target.value)}
          required
        />

        <ButtonContainer>
          <Botao type="submit">
            <IoAddCircle />
            Adicionar Frente
          </Botao>
        </ButtonContainer>

        {feedbackErro && <MensagemErro>{feedbackErro}</MensagemErro>}
        {feedbackSucesso && <MensagemSucesso>{feedbackSucesso}</MensagemSucesso>}
      </Formulario>
    </FormContainer>
  );
};

export default PaginaCadastroFrente;