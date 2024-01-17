import styled from 'styled-components';

export const CreatorAllWrap = styled.div`
  border-bottom: 1px solid #f6f6f6;
`;

export const CreatorTop = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 0.65fr 1.35fr;

  padding: 0.56rem 1.25rem 0.56rem 1rem;

  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  svg {
    cursor: pointer;
  }
`;

export const CreatorContainer = styled.div`
  margin: 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CreatorInfo = styled.div`
  margin-top: 0.7rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const CreatorInfoWrap = styled.div`
  position: relative;

  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    right: -1rem;
    width: 0.05rem;
    height: 2.5rem;
    background-color: #dcdcdc;
  }

  &:last-of-type:after {
    visibility: hidden;
  }
`;

export const CreatorRate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-align: center;

  img {
    width: 1rem;
    margin-right: 0.2rem;
  }
`;
