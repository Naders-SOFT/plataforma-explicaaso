import styled, { css } from 'styled-components';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../App';


const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 70px 0 50px 0;
  padding: 0;
`;

const CadastroTitulo = styled.h1`
  color: white;
  font-size: 36px;
`;

const Formulario = styled.form`
  display: flex;
  background-color: #003466;
  width: ${({$isMobile}) => ($isMobile ? '80%' : '500px')};
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  margin: 70px 0 50px 0;
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 15px 0 40px 0;
`;

const inputStyles = css`
  width: 98.5%;
  padding: 0;
  border: none;
  border-radius: 4px;
  margin: 10px 0 0 0;
  height: 40px;
  font-size: 16px;
  background-color: #265a9b;
  opacity: 100%;
  color: white;
  padding-left: 10px;
  outline: none;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  }
`;

const selectStyles = css`
  margin: 10px 0 0 0;
  width: 100%;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  background-color: #265a9b;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  }
`;

const Label = styled.label`
  color: white;
  font-size: 28px;
  font-weight: 600;
`;

const Input = styled.input`
  ${inputStyles}
`;

const Select = styled.select`
  ${selectStyles}
`;

const Botao = styled.button`
  width: 30%;
  border: none;
  border-radius: 8px;
  background-color: #ffcc00;
  font-size: 20px;
  font-weight: 600;
  color: #003466;
  height: 40px;
  margin: 0 0 40px 0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    color: #ffefd5;
    cursor: pointer;
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

function PaginaCadastro(props) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('aluno');
  const [materiaProf, setMateriaProf] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [feedbackErro, setFeedbackErro] = useState('');
  const [feedbackSucesso, setFeedbackSucesso] = useState('');
  const [senhaSugerida, setSenhaSugerida] = useState('');
  const authAxios = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedbackErro('');
    setFeedbackSucesso('');

    if (senha !== confirmarSenha) {
      setFeedbackErro('A senha e a confirmação de senha não coincidem');
      return;
    }

    try {
      const response = await authAxios.post(
        'http://localhost:3003/user/signup',
        {
          nome: nome,
          sobrenome: sobrenome,
          tipo: tipoUsuario,
          senha: senha,
          email: email,
          senhaConfirmada: confirmarSenha,
          materiaProf: materiaProf
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        setFeedbackSucesso('Cadastro realizado com sucesso');
        setNome('');
        setSobrenome('');
        setEmail('');
        setSenha('');
        setTipoUsuario('aluno');
        setConfirmarSenha('');
        setMateriaProf('');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      setFeedbackErro(error.response.data.message);
    }
  };

  const [materia, setMateria] = useState([])
  useEffect(() => {
      axios.get('http://localhost:3003/materias/listMat')
      .then(response => {
          setMateria(response.data)
      })
      .catch(err => {
          console.error(err.message)
      })
  }, [])
  const opcoesMaterias = materia.map((mat) =>
    <option value={mat.nome}>{mat.nome}</option>
  )

  return (
    <FormContainer>
      <Formulario $isMobile={props.isMobile} onSubmit={handleSubmit}>
        <CadastroTitulo>Cadastro de Usuário</CadastroTitulo>

        <ContainerInput>
          <Label htmlFor="tipo">Tipo de Usuário:</Label>
          <Select id="tipo" value={tipoUsuario} onChange={(e) => setTipoUsuario(e.target.value)}>
            <option value="aluno">Aluno</option>
            <option value="professor">Professor</option>
            <option value="administrador">Administrador</option>
          </Select>
        </ContainerInput>

        {tipoUsuario === 'professor' && <ContainerInput>
          <Label htmlFor="materia">Matéria lecionada:</Label>
          <Select id="materia" value={materiaProf} onChange={(e) => setMateriaProf(e.target.value)}>
            <option value="">Nenhuma</option>
            {opcoesMaterias}
          </Select>
        </ContainerInput>}
        
        <ContainerInput>
          <Label htmlFor="nome">Nome:</Label>
          <Input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </ContainerInput>

        <ContainerInput>
          <Label htmlFor="sobrenome">Sobrenome:</Label>
          <Input type="text" id="sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} required />
        </ContainerInput>

        <ContainerInput>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </ContainerInput>

        <ContainerInput>
          <Label htmlFor="senha">Senha:</Label>
          <Input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        </ContainerInput>

        <ContainerInput>
          <Label htmlFor="confirmar-senha">Confirmar Senha:</Label>
          <Input
            type="password"
            id="confirmar-senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />
          {feedbackErro && <MensagemErro>{feedbackErro}</MensagemErro>}
          {feedbackSucesso && <MensagemSucesso>{feedbackSucesso}</MensagemSucesso>}
        </ContainerInput>

        <Botao type="submit">Cadastrar</Botao>
      </Formulario>
    </FormContainer>
  );
}

export default PaginaCadastro;
