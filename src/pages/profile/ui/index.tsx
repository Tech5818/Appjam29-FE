import DisconnectButton from '@shared/ui/DisconnectButton';
import ProfileBox from '@widgets/ui/ProfileBox';
import styled from 'styled-components';

export const ProfilePage = () => {
  return (
    <>
      <Container>
        <ProfileBox />
        <DisconnectButton />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
