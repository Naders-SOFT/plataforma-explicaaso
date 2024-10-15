import styled from 'styled-components';

const ContainerPag = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PerfilContainer = styled.div`
  display: flex;
  background-color: #003466;
  width: ${({$isMobile}) => ($isMobile ? '80%' : '500px')};
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  margin: 70px 0 50px 0;
`

function PaginaPerfil() {
  return (
    <ContainerPag>
      <PerfilContainer>
        <h1>Teste</h1>
      </PerfilContainer>
    </ContainerPag>
  );
}

export default PaginaPerfil;