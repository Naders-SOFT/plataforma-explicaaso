import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledButton = styled.button`
  background-color: darkcyan;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #002549;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const StyledH1 = styled.h1`
  color: #FF6600;
`;

const StyledItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledContentContainer = styled.div`
  display: flex;
  align-items: center;

  /* Add styles for image */
  & > img {
    width: 200px;
    height: 200px;
    margin-right: 10px;
    border-radius: 50%;
  }
`;

const FrenteButton = ({ frente }) => {
  return (
    <StyledButton>
      <StyledContentContainer>
        <img src={frente.image} alt={frente.name} />
        {frente.name}
      </StyledContentContainer>
    </StyledButton>
  );
};

const Frentes = ({ frentes }) => {
  return (
    <StyledContainer>
      <StyledH1>Frentes</StyledH1>
      <StyledItemContainer>
        {frentes.map((frente, index) => (
          <FrenteButton key={index} frente={frente} />
        ))}
      </StyledItemContainer>
    </StyledContainer>
  );
};

export default Frentes;