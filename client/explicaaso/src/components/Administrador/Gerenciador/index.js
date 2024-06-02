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
    background-color: #FFCC00;
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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  align-items: center;
`

const ProfessorItem = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(30px, auto);
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`

const ProfessorFormat = styled.span`
  grid-column: 1;
  margin-right: 10px;
  justify: center 

  @media (max-width: 600px) {
    font-size: 10px;
  }
`

const ProfessorSub = styled.span`
  grid-column: 2;
  font-weight: bold;
  margin-right: 10px;
`

const ProfessorDate = styled.span`
  grid-column: 3;
  text-align: right;
`

// Define the ProfessorList component
export const ProfessorList = ({ professors }) => {
  return (
    <Container>
      <ProfessorListStyled>
        {professors.map((professor, index) => (
          <ProfessorItem key={index} style={{ marginLeft: '5%' }}>
            <ProfessorFormat>{professor.name}</ProfessorFormat>
            <ProfessorSub style={{marginRight: '30px' }}>{professor.subject}</ProfessorSub>
            <ProfessorDate style={{ marginRight: '30px' }}>{professor.date}</ProfessorDate>
            <DSKBotao style={{ gridColumn: '4 / 4', justifySelf: 'end' }}>Remover</DSKBotao>
          </ProfessorItem>
        ))}
      </ProfessorListStyled>
      <DSKBotao style={{ marginTop: '10px' ,marginLeft: '5%' }}>Adicionar</DSKBotao>
    </Container>
  );
};