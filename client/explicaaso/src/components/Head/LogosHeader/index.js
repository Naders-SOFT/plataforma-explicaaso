import LogoUsp from '../LogoUsp';
import LogoExpliCaaso from '../LogoExpliCaaso';
import styled from 'styled-components';

const LogosHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: auto;
`

function LogosHeader({isMobile}) {
  return (
    <LogosHeaderContainer>
      {!isMobile && <LogoUsp/>}
      <LogoExpliCaaso/>
    </LogosHeaderContainer>
  );
}

export default LogosHeader;