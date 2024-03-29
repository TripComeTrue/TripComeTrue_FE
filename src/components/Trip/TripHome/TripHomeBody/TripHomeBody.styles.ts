import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  background-color: ${({ theme }) => theme.brand.white};
  padding: 1.625rem 0 0 1.25rem;
  margin-top: -1.8125rem;
  border-radius: 1.25rem 1.25rem 0 0;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 12.5rem;
  border-radius: 0.625rem 0 0 0.625rem;
  margin-bottom: 1.5rem;

  object-fit: cover;
  object-position: center;
`;
