import styled from 'styled-components';
import { fontXL } from '@/styles/common';

export const SignInTitleH2 = styled.h2`
  ${fontXL}
`;

export const SignInTitleH1 = styled.h1`
  font-size: 2.25rem;
  font-weight: bold;
  position: relative;
  margin-top: 0.5rem;
  &::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 4.44em;
    width: 1.44rem;
    height: 1.44rem;
    background: url('images/star_primary.png') 0 0 / 100% no-repeat;
  }
`;

export const SignInTourWrap = styled.div`
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
  margin-bottom: 2.5rem;
  text-align: right;
  font-weight: 600;
  color: ${(props) => props.theme.text.gray};
`;
