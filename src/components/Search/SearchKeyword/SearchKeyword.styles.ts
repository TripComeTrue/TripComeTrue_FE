import styled from 'styled-components';

export const KeywordComponent = styled.div`
  margin-top: 1rem;
`;

export const KeywordWrap = styled.div`
  margin-bottom: 1rem;
`;

export const KeywordTitle = styled.div`
  margin: 0 1rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text.black};
`;

export const KeywordSelect = styled.div`
  margin: 0 1rem 0;

  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;

  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.text.gray};

  button {
    margin: 0 0.2rem 0.4rem;
    padding: 0.1rem 0.6rem 0.15rem;

    text-align: center;
    border: 1px solid ${({ theme }) => theme.brand.primary};
    border-radius: 1.8rem;
  }

  button:hover {
    cursor: pointer;
  }
`;

export const KeywordHotSelect = styled.div`
  margin: 0 1rem 0;

  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;

  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.text.gray};

  button {
    margin: 0 0.2rem 0.4rem;
    padding: 0.1rem 0.6rem 0.15rem;

    text-align: center;
    background-color: ${({ theme }) => theme.brand.primary};
    border-radius: 1.8rem;
  }

  button:hover {
    cursor: pointer;
  }
`;
