import styled from 'styled-components';
import { alignCenter, flexColumn } from '@/styles/common';

export const ReviewItem = styled.div`
  ${flexColumn};
  gap: 0.625rem;

  padding: 1.25rem 0;
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

export const PlaceCreator = styled.div`
  ${alignCenter};
  gap: 0.5rem;
`;

export const MyPageCreator = styled.div`
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
