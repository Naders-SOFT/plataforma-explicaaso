import React from 'react';
import styled from 'styled-components';

const ContainerAdmin = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: auto;
  grid-template-areas:
    "sidebar main"
    "footer footer";
  height: 100vh;
  justify-items: center; /* centraliza horizontalmente o conteúdo de cada célula */
`

const Container = styled.div`
    width: 100%;
`

const MOBLBOTAO = styled.button`
    background-color: #FF6600;
    color: white;
    border-radius: 1vw;
    height: 5vw;
    width: 33%;
    font-size: 100%;
    font-weight: bold;
    border: none;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`

const DSKBotao = styled.button`
  background-color: #FFCC00;
  color: white;
  border-radius: 1vw;
  height: 3vw;
  font-weight: bold;
  font-size: 70%;
  border: none;
  &:hover {
      opacity: 0.5;
      cursor: pointer;
  }
  
`

const ProfessorListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  margin
  grid-template-columns: 1fr 1fr 2fr;
  grid-gap: 5px;
  align-items: center;
`

const ProfessorItem = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-gap: 5px;
  align-items: center;
  padding: 10px;
  justify-content: space-around;
  border-bottom: 1px solid #ccc;
`

const ProfessorFormat = styled.span`
  grid-column: 1 / 2;
  margin-right: 10px;
  justify: center 
`

const ProfessorSub = styled.span`
  grid-column: 2 / 3;
  font-weight: bold;
  margin-right: 10px;
  align-items: center;
`

const ProfessorDate = styled.span`
  grid-column: 3 / 4;
`

// Define the ProfessorList component
export const ProfessorList = ({ professors }) => {
  return (
    <Container>
      <ProfessorListStyled>
        {professors.map((professor, index) => (
          <ProfessorItem key={index} style={{ marginLeft: '5%' }}>
            <ProfessorFormat>{professor.name}</ProfessorFormat>
            <ProfessorSub style={{ marginRight: '20px' }}>{professor.subject}</ProfessorSub>
            <ProfessorDate>{professor.date}</ProfessorDate>
            <DSKBotao style={{ gridColumn: '4 / 4', justifySelf: 'end' }}>Remover</DSKBotao>
          </ProfessorItem>
        ))}
      </ProfessorListStyled>
      <DSKBotao style={{ marginLeft: '5%' }}>Adicionar</DSKBotao>
    </Container>
  );
};
