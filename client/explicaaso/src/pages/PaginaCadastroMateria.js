import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { IoAddCircle, IoRemoveCircle } from "react-icons/io5";
import { MdLibraryAdd } from "react-icons/md";
import { authAxios } from '../App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0;
  margin: 5%;
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
  border: 1px solid #ddd;
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
  gap: 10px;
  width: 100%;
  margin-top: 20px;
`;

const Botao = styled.button`
  width: ${({ $isAdicionarMateria }) =>
    $isAdicionarMateria ? '100%' : '60%'};
  padding: 12px 0;
  background-color: #ffcc00;
  border: none;
  border-radius: 10px;
  color: #003466;
  font-size: ${({ $isMobile }) => ($isMobile ? '1rem' : '1.2rem')};
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

const MateriaSection = styled.div`
  margin-bottom: 20px;
`;

const FrenteSection = styled.div`
  margin-bottom: 20px;
  background-color: #004080;
  padding: 20px;
  border-radius: 8px;
  position: relative;
`;

const RemoverButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
`;

const PaginaCadastroMateria = (props) => {
  const [nomeMateria, setNomeMateria] = useState('');
  const [imagemLogo, setImagemLogo] = useState('');
  const [frentes, setFrentes] = useState([{ nome: '', imagemLogo: '' }]);
  const [feedbackErro, setFeedbackErro] = useState('');
  const [feedbackSucesso, setFeedbackSucesso] = useState('');
  const navigate = useNavigate()

  const handleFrenteChange = (index, field, value) => {
    const newFrentes = [...frentes];
    newFrentes[index][field] = value;
    setFrentes(newFrentes);
  };

  const handleAdicionarFrente = () => {
    setFrentes([...frentes, { nome: '', imagemLogo: '' }]);
  };

  const handleRemoverFrente = (index) => {
    const newFrentes = frentes.filter((_, i) => i !== index);
    setFrentes(newFrentes);
  };

  const handleAdicionarMateria = async (e) => {
    e.preventDefault();
    setFeedbackErro('');
    setFeedbackSucesso('');
  
    try {
      const frentesFormatadas = frentes.map((frente) => ({
        nomeFrente: frente.nome,
        imgFrente: frente.imagemLogo
      }));
  
      const response = await axios.post(
        'http://localhost:3003/materias/create',
        {
          nome: nomeMateria,
          imagem: imagemLogo,
          frentes: frentesFormatadas,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        setNomeMateria('');
        setImagemLogo('');
        setFrentes([{ nome: '', imagemLogo: '' }]);
        setFeedbackSucesso('Matéria adicionada com sucesso!');
        navigate('/pagina-aluno')
      } else {
        setFeedbackErro(response.error || 'Erro ao adicionar frente.');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      setFeedbackErro(error.response.data.message);
    }
  };

  return (
    <FormContainer>
      <Formulario onSubmit={handleAdicionarMateria}>
        <CadastroTitulo>Cadastro de Matéria</CadastroTitulo>

        <MateriaSection>
          <Label htmlFor="nomeMateria">Nome da Matéria:</Label>
          <Input
            type="text"
            id="nomeMateria"
            value={nomeMateria}
            onChange={(e) => setNomeMateria(e.target.value)}
            required
          />
        </MateriaSection>

        <MateriaSection>
          <Label htmlFor="imagemLogo">Imagem da Matéria:</Label>
          <Input
            type="text"
            id="imagemLogo"
            value={imagemLogo}
            onChange={(e) => setImagemLogo(e.target.value)}
            required
          />
        </MateriaSection>

        {frentes.map((frente, index) => (
          <FrenteSection key={index}>
            <Label htmlFor={`nomeFrente-${index}`}>Nome da Frente:</Label>
            <Input
              type="text"
              id={`nomeFrente-${index}`}
              value={frentes[index].nome}
              onChange={(e) => handleFrenteChange(index, 'nome', e.target.value)}
              required
            />
            <Label htmlFor={`imagemLogoFrente-${index}`}>Imagem da Frente:</Label>
            <Input
              type="text"
              id={`imagemLogoFrente-${index}`}
              value={frentes[index].imagemLogo}
              onChange={(e) => handleFrenteChange(index, 'imagemLogo', e.target.value)}
              required
            />
            <RemoverButton type="button" onClick={() => handleRemoverFrente(index)}>
              <IoRemoveCircle />
            </RemoverButton>
          </FrenteSection>
        ))}

        <ButtonContainer>
          <Botao type="button" onClick={handleAdicionarFrente}>
            <MdLibraryAdd />
            Adicionar Frente
          </Botao>

          <Botao type="submit" $isAdicionarMateria={true}>
            <IoAddCircle />
            Adicionar Matéria
          </Botao>
        </ButtonContainer>

        {feedbackErro && <MensagemErro>{feedbackErro}</MensagemErro>}
        {feedbackSucesso && <MensagemSucesso>{feedbackSucesso}</MensagemSucesso>}
      </Formulario>
    </FormContainer>
  );
};

export default PaginaCadastroMateria;
