import styled from "styled-components"

const ConfirmacaoContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #003466;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  color: white;
`;

const ConfirmacaoTitulo = styled.h2`
  color: #ffcc00;
  margin-bottom: 10px;
`;

const ConfirmacaoBotoes = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const BotaoConfirmacao = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  color: ${props => !props.cancelar ? 'white' : '#003466'}; 
  background-color: ${props => !props.cancelar ? '#dc3545' : '#ffcc00'}; 

  &:hover {
    background-color: ${props => !props.cancelar ? '#c82333' : '#ffbf00'}; 
  }
`;

function CardConfirmacao(props) {
    return (
        <ConfirmacaoContainer>
            <ConfirmacaoTitulo>Confirmar Exclusão</ConfirmacaoTitulo>
            <p>Tem certeza de que deseja excluir este PDF?</p>
            <ConfirmacaoBotoes>
                <BotaoConfirmacao>
                Cancelar
                </BotaoConfirmacao>
                <BotaoConfirmacao>
                Excluir
                </BotaoConfirmacao>
            </ConfirmacaoBotoes>
        </ConfirmacaoContainer>
    )
}

export default CardConfirmacao