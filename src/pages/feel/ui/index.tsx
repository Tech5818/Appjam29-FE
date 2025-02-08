import { Typography, VStack } from '@shared/ui';
import { BottomNavigationBar } from '@widgets/ui/BottomNavigationBar';
import styled from 'styled-components';

export const FeelPage = () => {
  return (
    <>
      <Container>
        <Content>
          <VStack $gap={'3px'}>
            <Typography
              size="Title1"
              weight={'bold'}
              color="green"
            >
              감정분석
            </Typography>
            <Typography size="Body" weight={'bold'}>
              대화의 긍정과 부정을 나타낸 지표입니다.
            </Typography>
          </VStack>
          <VStack $gap={'3px'}>
            <Typography
              size="Title1"
              weight={'bold'}
              color="green"
            >
              그래프
            </Typography>
            <VStack>
              <Typography size="Body" weight={'bold'}>
                오전과 오후로 나뉘어 발생한 각 대화의 감정
              </Typography>
              <Typography size="Body" weight={'bold'}>
                평균을 표시합니다.
              </Typography>
            </VStack>
          </VStack>
        </Content>
        <BottomNavigationBar />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  flex: 1;
`;
