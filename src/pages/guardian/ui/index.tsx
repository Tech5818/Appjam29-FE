import { Typography, VStack } from '@shared/ui';
import { LoginLogo } from '@shared/ui/LoginLogo';
import styled from 'styled-components';

export const GuardianPage = () => {
  return (
    <>
      <Container>
        <LoginLogo />
        <VStack $alignItems="center" $gap={5}>
          <VStack $alignItems="center" $gap={10}>
            <Typography
              size="LargeTitle"
              weight={'bold'}
              color="green"
            >
              홍길동 보호자님 코드
            </Typography>
            <Typography
              size="LargeTitle"
              weight={'bold'}
              color="green"
            >
              123456
            </Typography>
          </VStack>
          <Typography
            size="Body"
            weight={'bold'}
            color="text"
          >
            해당 코드를 피보호자 등록에 적어주세요
          </Typography>
        </VStack>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
