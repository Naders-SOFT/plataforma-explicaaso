import LogoUsp from '../LogoUsp';
import LogoExpliCaaso from '../LogoExpliCaaso';
import styled from 'styled-components';

const LogosHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

function LogosHeader() {
  return (
    <LogosHeaderContainer>
      <LogoUsp/>
      <LogoExpliCaaso/>
    </LogosHeaderContainer>
  );
}

export default LogosHeader;