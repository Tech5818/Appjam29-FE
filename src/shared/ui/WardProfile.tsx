import styled from 'styled-components';
import { Typography } from './Typography';

const WardProfile = ({
  name,
  age,
  gender,
}: {
  name: string;
  age: string;
  gender: string;
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
              나이
            </Typography>
            <Typography size="Title3" weight={'bold'}>
              {age}
            </Typography>
          </InfoBox>
          <InfoBox>
            <Typography size="Title3" weight={'bold'}>
              성별
            </Typography>
            <Typography size="Title3" weight={'bold'}>
              {gender}
            </Typography>
          </InfoBox>
        </InfoWrapper>
      </Container>
    </>
  );
};

export default WardProfile;

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
