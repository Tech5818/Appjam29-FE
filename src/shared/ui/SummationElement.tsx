import { useState } from 'react';
import styled from 'styled-components';
import { Typography } from './Typography';
import { Icon } from './Icon';
import { ArrowIcon } from './ArrowIcon';

const SummationElement = ({
  feel,
  text,
  date,
}: {
  feel: '긍정' | '부정';
  text: string;
  date: string;
}) => {
  const [isFolded, setIsFolded] = useState<boolean>(true);

  return (
    <>
      <Container>
        <InfoWrapper>
          <Typography size="Body" weight={'bold'}>
            {date}
          </Typography>
          {feel === '긍정' ? (
            <Typography
              size="Body"
              weight={'bold'}
              color="green"
            >
              긍정
            </Typography>
          ) : (
            <Typography
              size="Body"
              weight={'bold'}
              color="red"
            >
              부정
            </Typography>
          )}
          <ArrowButton
            onClick={() => setIsFolded(!isFolded)}
            isFolded={isFolded}
          >
            <ArrowIcon />
          </ArrowButton>
        </InfoWrapper>
        {!isFolded && (
          <SummationTextWrapper>
            <Typography size="Body" weight={'bold'}>
              요약
            </Typography>
            <Typography
              size="SubHeadLine"
              weight={'normal'}
            >
              {text}
            </Typography>
          </SummationTextWrapper>
        )}
      </Container>
    </>
  );
};

export default SummationElement;

const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 5px;
  padding-left: 5px;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 100%;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ArrowButton = styled.button<{ isFolded: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    transition: transform 0.3s ease;
    transform: ${({ isFolded }) =>
      isFolded ? 'rotate(0deg)' : 'rotate(180deg)'};
  }
`;

const SummationTextWrapper = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
`;
