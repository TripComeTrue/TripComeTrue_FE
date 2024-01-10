import styled from 'styled-components';
import { Button } from '@/components/common';

export const SelectModalWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const SelectModalContent = styled.div`
  width: 100%;
  max-width: 22.5rem;
  background-color: ${({ theme }) => theme.brand.white};
  margin: 0 auto;
  border-top-right-radius: 0.625rem;
  border-top-left-radius: 0.625rem;
  padding: 1.25rem;
  @media screen and (max-width: 30rem) {
    max-width: none;
  }
`;

export const SelectModalContentWrap = styled.div`
  padding: 0.75rem;
  margin-bottom: 0.5rem;
`;

export const SelectModalTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: bold;
  color: ${({ theme }) => theme.text.gray};
  text-align: center;
  padding: 0.3125rem 0;
`;

export const SelectModalDivider = styled.hr`
  background-color: ${({ theme }) => theme.brand.gray};
  border: 0;
  height: 1px;
`;

export const SelectModalCloseBtn = styled(Button)`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.text.gray};
`;
