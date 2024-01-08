import styled from 'styled-components';

export const AvatarContainer = styled.div<{ $size: string; $margin: string }>`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  margin: ${({ $margin }) => $margin};
  border-radius: 50%;
  overflow: hidden;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
