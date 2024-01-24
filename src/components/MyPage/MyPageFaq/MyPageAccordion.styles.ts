import styled from 'styled-components';

export const MyPageAccordionWrap = styled.div`
  overflow: hidden;
`;

export const MyPageAccordionTitle = styled.h3`
  padding: 1rem 1.375rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border-bottom: 1px solid ${({ theme }) => theme.brand.gray};
`;

export const MyPageAccordionDesc = styled.div<{ $height: string }>`
  background-color: ${({ theme }) => theme.brand.lightGray};
  height: ${({ $height }) => $height};
  box-sizing: border-box;
  transition: height 0.6s ease;
  & > p {
    padding: 1rem 1.375rem;
  }
`;
