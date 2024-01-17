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

export const Container = styled.div`
  padding: 0 1.25rem;
`;

export const WriteBtn = styled.button`
  width: 1.25rem;
  cursor: pointer;
  img {
    margin-top: 0.5rem;
  }
`;

export const BubbleWrapper = styled.div``;

export const Header = styled.div`
  ${alignCenter};
  justify-content: space-between;
`;

export const CheckBoxContainer = styled.div`
  ${alignCenter};
  gap: 0.1875rem;
`;

export const FilterToggle = styled.div`
  position: relative;
`;

export const ToggleBtn = styled.button`
  cursor: pointer;
`;

export const FilterModal = styled.div`
  ${flexColumn};

  position: absolute;
  top: 120%;
  right: 0;

  width: 9.375rem;
  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.brand.white};
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
`;

export const Option = styled.div`
  ${alignCenter};
  gap: 0.25rem;

  width: 100%;
  padding: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #ebebeb;
  }
`;

export const ReviewList = styled.ul``;

export const ReviewItem = styled.li`
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
