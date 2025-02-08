import { Typography } from '@shared/ui';
import WordCountElement from '@shared/ui/WordCountElement';
import styled from 'styled-components';

const WordCountList = () => {
  const dummyDataSet1 = [
    { word: '단어1', count: 11 },
    { word: '단어2', count: 9 },
    { word: '단어3', count: 7 },
    { word: '단어4', count: 5 },
    { word: '단어5', count: 3 },
  ];

  const dummyDataSet2 = [
    { word: '단어6', count: 11 },
    { word: '단어7', count: 9 },
    { word: '단어8', count: 7 },
    { word: '단어9', count: 5 },
    { word: '단어10', count: 3 },
  ];

  return (
    <>
      <Container>
        <ListWrapper>
          <Typography
            size="Title3"
            weight={'bold'}
            color="green"
          >
            반복적인 단어
          </Typography>
          <ListBox>
            {dummyDataSet1.map((item, idx) => (
              <WordCountElement
                color="green"
                key={idx}
                word={item.word}
                count={item.count}
                isLast={idx === 4}
              />
            ))}
          </ListBox>
        </ListWrapper>
        <ListWrapper>
          <Typography
            size="Title3"
            weight={'bold'}
            color="red"
          >
            부정적인 단어
          </Typography>
          <ListBox>
            {dummyDataSet2.map((item, idx) => (
              <WordCountElement
                color="red"
                key={idx}
                word={item.word}
                count={item.count}
                isLast={idx === 4}
              />
            ))}
          </ListBox>
        </ListWrapper>
      </Container>
    </>
  );
};

export default WordCountList;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ListBox = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
