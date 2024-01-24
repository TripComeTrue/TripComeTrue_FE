import styled from 'styled-components';

export const CreatorTitleWrap = styled.div`
  margin: 1rem 1rem 0 1rem;
`;

export const CreatorContent = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid rgba(98, 98, 98, 0.1);
`;

export const CreatorTitle = styled.div`
  margin: 2rem 1rem 0;

  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const CreatorReview = styled.div`
  margin: 0.4rem 1rem 0;

  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
