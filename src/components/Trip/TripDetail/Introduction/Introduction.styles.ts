import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const Container = styled.div`
  margin: 0 1.25rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CreatorContainer = styled.div`
  ${alignCenter};
  gap: 0.5rem;
`;

export const Mark = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const SaveContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const BookMarkContainer = styled.div`
  ${alignCenter};
  flex-direction: column;
  justify-content: center;
`;
