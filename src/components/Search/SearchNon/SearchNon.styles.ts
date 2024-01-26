import styled from 'styled-components';

export const SearchNonWrap = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.7rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.text.gray};

  span {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  p {
    margin-top: 0.8rem;
    font-size: 10px;
  }
`;

export const SearchShorts = styled.div`
  margin: 0 1rem -0.3rem;

  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const SearchReview = styled.div`
  margin: 0 1rem 1rem;

  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
