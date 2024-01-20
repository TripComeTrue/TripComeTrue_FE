import styled from 'styled-components';
import { Rating } from '@mui/material';
import { alignCenter, flexColumn } from '@/styles/common';

export const Container = styled.div`
  ${flexColumn};
  gap: 0.75rem;

  position: relative;

  border: 1px solid ${({ theme }) => theme.brand.primary};
  border-radius: 0.625rem;
  padding: 1.25rem;
  margin: 0 1.25rem;
`;

export const ReviewContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const ImageWrapper = styled.div`
  min-width: 5.8125rem;
  height: 5.8125rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;
export const ReviewImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;

export const ReviewContents = styled.div`
  ${flexColumn};
`;

export const InfoContainer = styled.div`
  ${alignCenter};
`;

export const Divider = styled.div`
  color: ${({ theme }) => theme.brand.gray};
`;

export const RatingContainer = styled.div`
  ${flexColumn}
  align-items: center;
  justify-content: center;
  gap: 0.875rem;
`;

export const RatingCustom = styled(Rating)`
  ${alignCenter};
  justify-content: center;

  > span {
    color: ${({ theme }) => theme.brand.yellow};
  }

  span svg {
    width: 2.25rem;
    height: 2.25rem;
  }
`;

export const BubbleWrapper = styled.div`
  position: absolute;
  right: 7%;
  bottom: 22%;
`;
