import styled from 'styled-components';
import { Typography } from './Typography';

const DisconnectButton = () => {
  const disconnect = () => {};

  return (
    <>
      <Container
        onClick={() => {
          disconnect();
        }}
      >
        <Typography size="Title3" weight={'bold'}>
          연동 해제
        </Typography>
      </Container>
    </>
  );
};

export default DisconnectButton;

const Container = styled.div`
  width: 100%;
  padding: 15px 0 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
