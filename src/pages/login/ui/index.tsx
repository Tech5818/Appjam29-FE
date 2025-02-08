import { Typography } from '@shared/ui';
import { KakaoIcon } from '@shared/ui/KakaoIcon';
import { LoginLogo } from '@shared/ui/LoginLogo';
import styled from 'styled-components';

export const LoginPage = () => {
  return (
    <>
      <Container>
        <Content>
          <LoginLogo />
          <Typography
            size="LargeTitle"
            weight={'bold'}
            color="green"
          >
            보호자 로그인
          </Typography>
        </Content>
        <Button>
          <KakaoIcon />
          <Typography
            size="SubHeadLine"
            weight={'bold'}
            color="text"
          >
            카카오로 1초만에 시작하기
          </Typography>
        </Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.light.color.yellow};
  border-radius: 12px;
`;
