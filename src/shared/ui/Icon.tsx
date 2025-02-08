import styled from 'styled-components';

interface IconProps {
  src: string;
}

export const Icon = ({ src }: IconProps) => {
  return (
    <>
      <Container src={src} />
    </>
  );
};

const Container = styled.img``;
