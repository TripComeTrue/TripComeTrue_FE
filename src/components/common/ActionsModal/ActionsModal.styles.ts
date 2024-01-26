import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const ToggleBtn = styled.button`
  ${alignCenter}
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.gray};
  cursor: pointer;
`;

export const MenuItem = styled.li`
  ${alignCenter};
  justify-content: center;
  gap: 0.25rem;

  width: 100%;
  padding: 0.25rem 1rem;
  line-height: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #ebebeb;
  }
`;
