import styled from 'styled-components';

export const InformationWrapper = styled.section`
  height: 11rem;
`;

export const InformationBox = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const InformationItem = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 0.625rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.125rem;

  padding: 1.125rem 2rem;

  background-color: ${({ theme }) => theme.brand.lightGray};

  span {
    white-space: nowrap;
  }
`;

export const InformationIconBox = styled.div`
  width: 3.75rem;
  height: 3.75rem;

  display: flex;
  justify-content: center;
`;

export const InformationIcon = styled.div`
  width: 3rem;
  height: 3rem;

  background-color: ${({ theme }) => theme.brand.black};
  border-radius: 50%;
`;
