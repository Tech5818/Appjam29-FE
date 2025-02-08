import { Typography } from '@shared/ui';
import SummationElement from '@shared/ui/SummationElement';
import styled from 'styled-components';

interface SummationElementType {
  text: string;
  date: string;
  feel: '긍정' | '부정';
}

const SummationList = () => {
  const dummyData: SummationElementType[] = [
    {
      text: '(긍정적인 글 1)',
      date: '2025.02.09',
      feel: '긍정',
    },
    {
      text: '(부정적인 글 2)',
      date: '2025.02.08',
      feel: '부정',
    },
    {
      text: '(긍정적인 글 3)',
      date: '2025.02.07',
      feel: '긍정',
    },
    {
      text: '(부정적인 글 4)',
      date: '2025.02.06',
      feel: '부정',
    },
    {
      text: '(긍정적인 글 5)',
      date: '2025.02.05',
      feel: '긍정',
    },
    {
      text: '(부정적인 글 6)',
      date: '2025.02.04',
      feel: '부정',
    },
    {
      text: '(긍정적인 글 7)',
      date: '2025.02.03',
      feel: '긍정',
    },
    {
      text: '(부정적인 글 8)',
      date: '2025.02.02',
      feel: '부정',
    },
    {
      text: '(긍정적인 글 9)',
      date: '2025.02.01',
      feel: '긍정',
    },
    {
      text: '(부정적인 글 10)',
      date: '2025.01.31',
      feel: '부정',
    },
  ];

  return (
    <>
      <Container>
        <ListHeader>
          <Typography size="Body" weight={'bold'}>
            날짜
          </Typography>
          <div style={{ opacity: '0' }}>fkdosaf</div>
          <Typography size="Body" weight={'bold'}>
            감정
          </Typography>
          <Typography size="Body" weight={'bold'}>
            요약보기
          </Typography>
        </ListHeader>
        {dummyData.map((item, idx) => (
          <SummationElement
            key={idx}
            feel={item.feel}
            text={item.text}
            date={item.date}
          />
        ))}
      </Container>
    </>
  );
};

export default SummationList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 25px 0 25px;
`;

const ListHeader = styled.div`
  display: flex;
  gap: auto;
  border-bottom: 1px solid gray;
  width: 100%;
  justify-content: space-between;
  padding: 0 5px 0 5px;
`;
