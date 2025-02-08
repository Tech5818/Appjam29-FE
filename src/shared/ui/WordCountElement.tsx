import styled from 'styled-components';
import { Typography } from './Typography';
import { ColorKeys } from '@shared/types/theme';

const WordCountElement = ({
  word,
  count,
  isLast,
  color,
}: {
  word: string;
  count: number;
  isLast: boolean;
  color: ColorKeys;
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
          <Typography
            size="Body"
            weight={'bold'}
            color={color}
          >
            {word}
          </Typography>
          <Typography
            size="Body"
            weight={'bold'}
            color={color}
          >
            {`${count}회`}
          </Typography>
        </div>
        <Bar $color={color} />
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

interface BarProps {
  $color: ColorKeys;
}

const Bar = styled.div<BarProps>`
  display: flex;
  flex: 1;
  background: ${({ theme, $color }) =>
    theme.light.color[$color]};
  height: 8px;
  border-radius: 3px;
`;
