import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1.25rem;
`;

export const Title = styled.div`
  padding: 0;
  margin-bottom: 1rem;

  font-size: 1.9rem;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 2.5rem;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;

  .react-datepicker {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;
