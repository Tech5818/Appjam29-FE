import { ColorKeys } from '@shared/types/theme';
import { Typography } from '@shared/ui';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface SelectRoleProps {
  children: ReactNode;
  color: ColorKeys;
  role: 'guardian' | 'wand';
}

export const SelectRole = ({
  children,
  color,
  role,
}: SelectRoleProps) => {
  return (
    <>
      <Container $color={color}>
        <Typography
          size="Title3"
          color={'text'}
          weight={'bold'}
        >
          {role === 'guardian' ? '보호자' : '피보호자'}
        </Typography>
        <Bottom>
          {children}
          <BottomButton $color={color}>
            <Typography
              size="SubHeadLine"
              color={'white'}
              weight={'bold'}
            >
              {role === 'guardian' ? '로그인' : '등록하기'}
            </Typography>
          </BottomButton>
        </Bottom>
      </Container>
    </>
  );
};

interface ContainerProps {
  $color: SelectRoleProps['color'];
}
const Container = styled.div<ContainerProps>`
  width: 230px;
  border: 1px solid
    ${({ theme, $color }) => theme.light.color[$color]};
  background: ${({ theme }) => theme.light.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  border-radius: 15px;
  overflow: hidden;
  padding-top: 20px;
`;

const Bottom = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

interface BottomButtonProps {
  $color: SelectRoleProps['color'];
}

const BottomButton = styled.div<BottomButtonProps>`
  background: ${({ theme, $color }) =>
    theme.light.color[$color]};
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
