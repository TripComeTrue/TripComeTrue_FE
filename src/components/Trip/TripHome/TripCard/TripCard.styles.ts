import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const Container = styled.div<{ $size: string }>`
  min-width: ${({ $size }) => $size};
`;

export const ImageContainer = styled.div<{ $size: string }>`
  position: relative;

  height: ${({ $size }) => $size};
  border-radius: 1rem;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;

export const BookMarkContainer = styled.div`
  ${alignCenter}
  justify-content: center;
  gap: 0.5rem;

  position: absolute;
  top: 0.5rem;
  left: 0.625rem;
`;

export const Creator = styled.div`
  ${alignCenter};
  gap: 0.25rem;

  position: absolute;
  bottom: 0;
  left: 0;

  border-radius: 0 0.5rem 0 0.625rem;
  background-color: ${({ theme }) => theme.brand.black};
  padding: 0.1875rem 0.625rem;
  line-height: 1rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Comment = styled.div`
  ${alignCenter}
  gap: 0.25rem;
`;
