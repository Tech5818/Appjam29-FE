import { Typography } from '@shared/ui';
import { FeelIcon } from '@shared/ui/FeelIcon';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BottomNavigationBar = () => {
  return (
    <>
      <Container>
        <NavigationButton to={'/feel'}>
          <FeelIcon active />
          <Typography
            size="SubHeadLine"
            weight={'bold'}
            color="green"
          >
            감정
          </Typography>
        </NavigationButton>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 10px 50px 15px 50px;
  border-top: 0.5px solid
    ${({ theme }) => theme.light.color.grey};
  display: flex;
  justify-content: space-between;
  align-items: centerx;
`;

const NavigationButton = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
  gap: 3px;
  justify-content: center;
`;
