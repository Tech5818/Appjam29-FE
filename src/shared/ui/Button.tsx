import { ColorKeys } from '@shared/types/theme';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  color: ColorKeys;
  bk: ColorKeys;
  size: string;
  radius: number;
}

export const Button = ({
  text = '',
  color,
  bk,
  size,
  radius,
}: ButtonProps) => {
  return (
    <>
      <Container
        $color={color}
        $bk={bk}
        $size={size}
        $radius={radius}
      >
        {text}
      </Container>
    </>
  );
};

interface ContainerProps {
  $color: ButtonProps['color'];
  $bk: ButtonProps['bk'];
  $size: ButtonProps['size'];
  $radius: ButtonProps['radius'];
}

const Container = styled.div<ContainerProps>`
  color: ${({ theme, $color }) =>
    theme.light.color[$color]};
  background-color: ${({ theme, $bk }) =>
    theme.light.color[$bk]};
  border-radius: ${({ $radius }) => `${$radius}px`};
`;
