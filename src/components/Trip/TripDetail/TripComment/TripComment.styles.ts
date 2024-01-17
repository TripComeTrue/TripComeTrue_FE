import styled from 'styled-components';
import { alignCenter, flexColumn } from '@/styles/common';

export const Container = styled.div`
  ${flexColumn}
  gap: 1.5rem;
`;

export const InputWrapper = styled.div`
  margin: 0 1.25rem;
`;

export const CommentInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.brand.lightGray};
  color: ${({ theme }) => theme.text.gray};
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 0.5rem;
`;

export const TotalComments = styled.div`
  margin: 0 1.25rem 1rem;
`;

export const CommentList = styled.ul``;

export const CommentItem = styled.li``;

export const CommentCard = styled.div`
  ${flexColumn};
  gap: 0.625rem;

  padding: 0.625rem 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.brand.gray};
`;

export const CommentInfo = styled.div`
  ${alignCenter}
  justify-content: space-between;
`;

export const Creator = styled.div`
  ${alignCenter};
  gap: 0.5rem;
`;

export const ReplyContainer = styled.div`
  ${alignCenter};
  gap: 0.25rem;

  width: max-content;
  cursor: pointer;
`;

export const ReplyList = styled.ul``;

export const ReplyItem = styled.li``;

export const ReplyCard = styled.div`
  ${flexColumn};
  gap: 0.625rem;

  padding: 0.625rem 1.25rem 0.625rem 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.brand.gray};
  background-color: ${({ theme }) => theme.brand.lightGray};
`;
