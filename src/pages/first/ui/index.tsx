import { FirstLogo } from '@shared/ui/FirstLogo';
import { SelectRolesWidget } from '@widgets/ui/SelectRoles';
import styled from 'styled-components';

export const FirstPage = () => {
  return (
    <>
      <Container>
        <FirstLogo />
        <SelectRolesWidget />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  height: 100vh;
`;
