import styled from 'styled-components';


const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 15px 0 40px 0;
`

const Label = styled.label`
  color: white;
  font-size: 28px;
  font-weight: 600;
`

const Input = styled.input`
  width: 98.5%;
  padding: 0;
  border: none;
  border-radius: 4px;
  margin: 10px 0 0 0;
  height: 30px;
  background-color: #265a9b;
  opacity: 100%;
  color: white;
  padding-left: 10px;
  outline: none;
`

function InputComponent(props) {
  return (
    <InputContainer>
      <Label>{props.label}</Label>
      <Input
        type={props.type}
      ></Input>
    </InputContainer>
  );
}

export default InputComponent;