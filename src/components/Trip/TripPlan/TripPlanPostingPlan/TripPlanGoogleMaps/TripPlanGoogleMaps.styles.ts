import styled from 'styled-components';

const MarkerText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 0.3rem;
  background-color: ${({ theme }) => theme.brand.white};
  white-space: nowrap;

  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export default MarkerText;
