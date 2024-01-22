import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    width: 13rem;
    color: ${({ theme }) => theme.text.black};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1.5rem;
`;

export const PhotoDisplay = styled.div`
  position: relative;

  width: 17.5rem;
  height: 17.5rem;
  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.brand.lightGray};
  margin: 0 1rem;

  .plus-icon {
    position: absolute;
    top: 8rem;
    left: 8rem;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 1.6rem;
  gap: 0.5rem;

  img {
    width: 3.9375rem;
    height: 3.8125rem;
  }

  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  .info-gray {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 1rem;

    width: 20rem;
    height: 7.75rem;
    border-radius: 0.625rem;
    background-color: ${({ theme }) => theme.brand.lightGray};

    p {
      font-size: ${({ theme }) => theme.fontSizes.sm};
      font-weight: ${({ theme }) => theme.fontWeights.medium};
      text-align: center;

      b {
        font-weight: ${({ theme }) => theme.fontWeights.bold};
      }
    }

    .point-info {
      border-bottom: 1px solid #bebebe;
      font-size: ${({ theme }) => theme.fontSizes.xs};
      font-weight: ${({ theme }) => theme.fontWeights.semiBold};
      color: ${({ theme }) => theme.text.gray};
    }
  }
`;

export const AddTagsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;

  width: 20rem;
  height: 2.5rem;
  border-radius: 1.875rem;
  background-color: ${({ theme }) => theme.brand.black};

  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.brand.white};
`;
