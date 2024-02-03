import styled from 'styled-components';
import { alignCenter, flexColumn } from '@/styles/common';

export const CommentContainer = styled.div`
  ${flexColumn};
  gap: 0.5rem;

  margin-bottom: 4.625rem;
  padding: 0.75rem 0;
`;

export const CommentTitle = styled.div`
  font-size: 0.75rem;
  font-weight: 700;

  color: ${({ theme }) => theme.text.gray};
  padding: 0 1.25rem;
`;

export const Header = styled.div`
  ${alignCenter}
`;

export const EmptyComment = styled.div`
  ${alignCenter};
  justify-content: center;
`;

export const EmptyText = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: #bebebe;
`;
