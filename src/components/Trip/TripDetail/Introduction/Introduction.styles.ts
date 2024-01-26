import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 1.25rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CreatorContainer = styled.div`
  ${alignCenter};
  gap: 0.5rem;
`;

export const Mark = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const SaveContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const BookMarkContainer = styled.div`
  ${alignCenter};
  flex-direction: column;
  justify-content: center;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const RatingAndExpense = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.brand.lightGray};
  padding: 0.625rem;
`;

export const Item = styled.div`
  ${alignCenter}
  gap: 0.375rem;
`;

export const ItemTitle = styled.div`
  padding: 0 0.25rem;
  background-color: #b4f34c4d;
`;

export const AverageContainer = styled.div`
  ${alignCenter};
  gap: 0.25rem;
`;

export const HashTagList = styled.div`
  ${alignCenter}
  gap: 0.375rem;
`;
