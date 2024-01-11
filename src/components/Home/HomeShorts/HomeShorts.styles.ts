import styled from 'styled-components';
import { LabelProps } from './HomeShorts.types';

export const ShortsWrap = styled.div`
  margin-top: 2.5rem;
`;

export const ShortsRadio = styled.div`
  margin: 0.8rem 1rem 0;
`;

export const Label = styled.label<LabelProps>`
  margin-right: 0.5rem;
  padding: 0.3rem 1.1rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background-color: ${(props) =>
    props.checked ? ({ theme }) => theme.brand.primary : 'transparent'};
  border: ${(props) =>
    props.checked
      ? `0.1rem solid ${props.theme.brand.primary}`
      : `0.1rem solid ${props.theme.brand.gray}`};

  border-radius: 1rem;
`;
