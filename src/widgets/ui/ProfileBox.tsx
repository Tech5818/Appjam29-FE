import GuardianProfile from '@shared/ui/GuardianProfile';
import WardProfile from '@shared/ui/WardProfile';
import styled from 'styled-components';

const ProfileBox = () => {
  return (
    <>
      <Container>
        <GuardianProfile
          name="김옥자"
          email="example123@gmail.com"
        />
        <WardProfile name="박병춘" age="82" gender="남성" />
      </Container>
    </>
  );
};

export default ProfileBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
