import { useLocation, useNavigate } from 'react-router-dom'; // 리다이렉트를 위한 useNavigate
import { useEffect } from 'react';
import { Typography } from '@shared/ui';
import { KakaoIcon } from '@shared/ui/KakaoIcon';
import { LoginLogo } from '@shared/ui/LoginLogo';
import styled from 'styled-components';
import axios from 'axios';

export const LoginPage = () => {
  const location = useLocation(); // 현재 URL 정보 가져오기
  const token = localStorage.getItem('token');
  // URL에서 쿼리 파라미터 추출
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get('code');

  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      const url =
        `http://13.124.245.82:8080/auth/login?code=` + code;
      console.log(url);

      const encodedUrl = encodeURI(url);

      console.log(encodedUrl);

      axios
        .get(encodedUrl)
        .then((result) => result.data.data)
        .then((data) => {
          localStorage.setItem('token', data.accessToken);
          navigate('/feel');
        });
    }
    if (token) {
      console.log('token is exist');

      navigate('/feel');
    }
  }, []);

  const kakaoClientId = '52b9fe05dff0fd5f179b68f439827896'; // 카카오 클라이언트 ID
  const redirectUri = 'http://localhost:5173/login'; // 카카오 인증 후 리다이렉트 URI

  const handleLogin = () => {
    // 카카오 OAuth2 인증 URL 생성
    const authUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoClientId}&redirect_uri=${redirectUri}`;
    window.location.href = authUrl; // 리다이렉트
  };

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
        <Button onClick={handleLogin}>
          <KakaoIcon />
          <Typography
            size="SubHeadLine"
            weight={'bold'}
            color="text"
          >
            카카오로 1초만에 시작하기
          </Typography>
        </Button>
        <Test>{window.location.href}</Test>
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

const Test = styled.p`
  font-size: 7px;
`;
