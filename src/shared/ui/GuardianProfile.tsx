import styled from 'styled-components';
import { Typography } from './Typography';

const GuardianProfile = ({
  name,
  email,
}: {
  name: string;
  email: string;
}) => {
  return (
    <>
      <Container>
        <Typography
          size="Title3"
          weight={'bold'}
          color="green"
        >
          보호자 정보
        </Typography>
        <InfoWrapper>
          <InfoBox>
            <Typography size="Title3" weight={'bold'}>
              이름
            </Typography>
            <Typography size="Title3" weight={'bold'}>
              {name}
            </Typography>
          </InfoBox>
          <InfoBox>
            <Typography size="Title3" weight={'bold'}>
              이메일
            </Typography>
            <Typography size="Title3" weight={'bold'}>
              {email}
            </Typography>
          </InfoBox>
        </InfoWrapper>
      </Container>
    </>
  );
};

export default GuardianProfile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoBox = styled.div`
  display: flex;
  gap: 10px;
`;

const InfoWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
