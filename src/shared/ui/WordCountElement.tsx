import styled from 'styled-components';
import { Typography } from './Typography';

const WordCountElement = ({
  word,
  count,
  isLast,
}: {
  word: string;
  count: number;
  isLast: boolean;
}) => {
  return (
    <>
      <Container isLast={isLast}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '90px',
          }}
        >
          <Typography size="Body" weight={'bold'}>
            {word}
          </Typography>
          <Typography size="Body" weight={'bold'}>
            {`${count}회`}
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            flex: '1',
            backgroundColor: 'green',
            height: '8px',
            borderRadius: '3px',
          }}
        />
      </Container>
    </>
  );
};

export default WordCountElement;

const Container = styled.div<{ isLast: boolean }>`
  padding: 15px;
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  border-bottom: ${({ isLast }) =>
    isLast ? 'none' : '1px solid #d3d3d3'};
`;
