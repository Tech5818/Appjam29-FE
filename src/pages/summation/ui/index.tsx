import { Typography } from '@shared/ui';
import SummationList from '@widgets/ui/SummationList';
import styled from 'styled-components';

export const SummationPage = () => {
  return (
    <>
      <Container>
        <TitleWrapper>
          <Typography
            size="Title1"
            weight={'bold'}
            color="green"
          >
            요약
          </Typography>
          <Typography size="Body" weight={'bold'}>
            날짜별로 대화한 내용을 요약하여 대화의 내용을
            보여줍니다.
          </Typography>
        </TitleWrapper>
        <SummationList />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TitleWrapper = styled.div`
  padding: 0 25px 0 25px;
  display: flex;
  flex-direction: column;
`;
