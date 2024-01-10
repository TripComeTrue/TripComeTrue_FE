import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const Container = styled.div`
  ${alignCenter}
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 21.5rem;
  padding: 3.4375rem 1.25rem 12.25rem;

  background-image: url('https://source.unsplash.com/random');
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Title = styled.img``;

export const SearchButton = styled.button`
  ${alignCenter};
  justify-content: flex-start;
  gap: 0.5rem;

  color: ${({ theme }) => theme.brand.white};
  background-color: rgba(255, 255, 255, 0.6);

  border: 1px solid ${({ theme }) => theme.brand.white};
  border-radius: 1.875rem;

  width: 100%;
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  cursor: pointer;
`;
