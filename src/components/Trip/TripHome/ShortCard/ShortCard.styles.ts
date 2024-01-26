import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const Container = styled.div`
  width: 100%;
`;

export const ImageContainer = styled.div`
  position: relative;

  height: 16.8rem;
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

export const Excerpt = styled.div`
  ${alignCenter}

  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
`;
