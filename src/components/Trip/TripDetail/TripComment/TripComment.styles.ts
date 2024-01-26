import styled from 'styled-components';
import { alignCenter, flexColumn } from '@/styles/common';

export const Container = styled.div`
  ${flexColumn}
  gap: 1.5rem;
`;

export const CommentHeader = styled.div`
  width: 100%;
  padding: 0 1.25rem;
`;

export const InputWrapper = styled.div`
  margin: 0 1.25rem;
`;

export const TotalComments = styled.div`
  margin: 0 1.25rem 1rem;
`;

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

export const CommentWriteContainer = styled.div`
  ${alignCenter};

  width: 100%;
  background-color: ${({ theme }) => theme.brand.lightGray};
  border-radius: 0.5rem;
`;

export const CommentInput = styled.input`
  width: 100%;
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 700;
`;

export const CommentSubmit = styled.button`
  ${alignCenter};

  color: ${({ theme }) => theme.brand.primary};
  margin-right: 0.625rem;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  cursor: pointer;
`;

export const CommentMoreBtn = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  text-decoration: underline;
  cursor: pointer;
`;
