import { Typography, VStack } from '@shared/ui';
import { BottomNavigationBar } from '@widgets/ui/BottomNavigationBar';
import SummationList from '@widgets/ui/SummationList';
import styled from 'styled-components';

export const SummationPage = () => {
  return (
    <>
      <Container>
        <Content>
          <TitleWrapper>
            <Typography
              size="Title1"
              weight={'bold'}
              color="green"
            >
              요약
            </Typography>
            <VStack>
              <Typography size="Body" weight={'bold'}>
                날짜별로 대화한 내용을 요약하여 대화의
              </Typography>
              <Typography size="Body" weight={'bold'}>
                내용을 보여줍니다.
              </Typography>
            </VStack>
          </TitleWrapper>
          <SummationList />
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

const TitleWrapper = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
`;
