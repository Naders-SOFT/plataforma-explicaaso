import { IoMdTrash } from "react-icons/io";
import styled from "styled-components";

const StyledButton = styled.button`
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

  &:hover {
    background-color: #c82333;
  }

  svg {
    margin-right: 10px;
  }
`;

function ItemExcluir(props) {
  return (
    <StyledButton onClick={() => props.onDelete(props.idPdf)}>
      <IoMdTrash size={18} />
      Excluir
    </StyledButton>
  );
}

export default ItemExcluir;
