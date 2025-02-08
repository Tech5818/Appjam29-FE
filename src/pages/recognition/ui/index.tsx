import { Typography } from '@shared/ui';
import WordCountList from '@widgets/ui/WordCountList';
import styled from 'styled-components';

export const RecognitionPage = () => {
  return (
    <>
      <Container>
        <TextBox>
          <Typography
            size="Title1"
            weight={'bold'}
            color="green"
          >
            표현 측정
          </Typography>
          <Typography size="Body" weight={'bold'}>
            최근 대화에서 반복적인 단어나 부정적인 단어의
            사용 횟수를 측정하여 보여줍니다.
          </Typography>
        </TextBox>
        <WordCountList />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 25px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
