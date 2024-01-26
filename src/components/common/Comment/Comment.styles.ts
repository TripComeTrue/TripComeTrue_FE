import styled from 'styled-components';
import { alignCenter, flexColumn } from '@/styles/common';

export const CommentCard = styled.div`
  ${flexColumn};
  gap: 0.625rem;

  padding: 0.625rem 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.brand.gray};
`;

export const CommentInfo = styled.div`
  ${alignCenter}
  justify-content: space-between;

  width: 100%;
`;

export const Creator = styled.div`
  ${alignCenter};
  gap: 0.5rem;
`;

export const ReplyButton = styled.div`
  ${alignCenter};
  gap: 0.25rem;

  width: max-content;
  cursor: pointer;
`;

export const ReplyCard = styled.div`
  ${flexColumn};
  gap: 0.625rem;

  padding: 0.625rem 1.25rem 0.625rem 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.brand.gray};
  background-color: ${({ theme }) => theme.brand.lightGray};
`;
