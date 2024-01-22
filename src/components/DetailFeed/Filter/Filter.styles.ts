import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  padding: 0 1.25rem;
  height: 2.5rem;

  img {
    height: 0.6rem;
  }
`;

export const FilterBox = styled.div`
  ${alignCenter}
  gap: 0.5rem;
`;
