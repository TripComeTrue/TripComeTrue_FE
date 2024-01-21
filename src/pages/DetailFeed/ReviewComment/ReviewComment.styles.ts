import styled from 'styled-components';
import { alignCenter, flexColumn } from '@/styles/common';

export const NavWrap = styled.div`
  ${alignCenter};
  justify-content: space-between;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.brand.white};
  padding: 0 1.25rem;
  margin-bottom: 2rem;
`;

export const NavBackBtn = styled.div`
  width: 1.25rem;
  cursor: pointer;
  img {
    margin-top: 0.5rem;
  }
`;

export const NavTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
`;

export const WriteBtnWrapper = styled.div`
  position: relative;

  width: 1.25rem;

  img {
    margin-top: 0.5rem;
  }
`;

export const WriteBtn = styled.img`
  cursor: pointer;
`;

export const BubbleWrapper = styled.div`
  position: absolute;
  right: -60%;
`;

export const Container = styled.div`
  /* margin: 0 1.25rem; */
`;

export const ReviewContainer = styled.div`
  ${flexColumn};
  gap: 0.625rem;

  padding: 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.brand.lightGray};
`;

export const ReviewInfo = styled.div`
  ${alignCenter};
  justify-content: space-between;
`;

export const ReviewImage = styled.img`
  width: 100%;
  height: 11.25rem;
  border-radius: 0.625rem;

  object-fit: cover;
  object-position: center;
`;

export const Creator = styled.div`
  ${alignCenter};
  gap: 0.5rem;
`;

export const InteractionButtons = styled.div`
  ${alignCenter};
  gap: 1.125rem;
`;
export const LikeButton = styled.div`
  ${alignCenter};
  gap: 0.25rem;

  padding: 0.125rem 0.375rem;
  border-radius: 1.875rem;
  background-color: ${({ theme }) => theme.brand.lightGray};
  cursor: pointer;
`;
export const CommentButton = styled.div`
  ${alignCenter};
  gap: 0.25rem;
`;

export const CommentContainer = styled.div`
  ${flexColumn};
  gap: 0.5rem;

  padding: 0.75rem 0;
`;

export const CommentTitle = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.gray};
  padding: 0 1.25rem;
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

export const ReplyButton = styled.div`
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

export const EmptyComment = styled.div`
  ${alignCenter};
  justify-content: center;
`;

export const EmptyText = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: #bebebe;
`;

export const InputWrapper = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  max-width: 22.5rem;
  padding: 1rem 1.25rem;
  border-top: 1px solid ${({ theme }) => theme.brand.lightGray};

  @media screen and (max-width: 30rem) {
    max-width: none;
  }
`;

export const CommentInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.brand.lightGray};
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 0.5rem;
`;
