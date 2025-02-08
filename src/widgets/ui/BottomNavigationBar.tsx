import { Typography } from '@shared/ui';
import { FeelIcon } from '@shared/ui/FeelIcon';
import { ProfileIcon } from '@shared/ui/ProfileIcon';
import { RecognitionIcon } from '@shared/ui/RecognitionIcon';
import { SummationIcon } from '@shared/ui/SummationIcon';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const BottomNavigationBar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <Container>
        <NavigationButton to={'/feel'}>
          <FeelIcon
            active={pathname === '/feel' ? true : false}
          />
          <Typography
            size="SubHeadLine"
            weight={
              pathname === '/feel' ? 'bold' : 'normal'
            }
            color={pathname === '/feel' ? 'green' : 'grey'}
          >
            감정
          </Typography>
        </NavigationButton>
        <NavigationButton to={'/summation'}>
          <SummationIcon
            active={
              pathname === '/summation' ? true : false
            }
          />
          <Typography
            size="SubHeadLine"
            weight={
              pathname === '/summation' ? 'bold' : 'normal'
            }
            color={
              pathname === '/summation' ? 'green' : 'grey'
            }
          >
            요약
          </Typography>
        </NavigationButton>
        <NavigationButton to={'/recognition'}>
          <RecognitionIcon
            active={
              pathname === '/recognition' ? true : false
            }
          />
          <Typography
            size="SubHeadLine"
            weight={
              pathname === '/recognition'
                ? 'bold'
                : 'normal'
            }
            color={
              pathname === '/recognition' ? 'green' : 'grey'
            }
          >
            인지
          </Typography>
        </NavigationButton>
        <NavigationButton to={'/profile'}>
          <ProfileIcon
            active={pathname === '/profile' ? true : false}
          />
          <Typography
            size="SubHeadLine"
            weight={
              pathname === '/profile' ? 'bold' : 'normal'
            }
            color={
              pathname === '/profile' ? 'green' : 'grey'
            }
          >
            프로필
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
