/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { SignInBtn } from '../SignInBtns/SignInBtns.styles';

export const SignInBtnYanolja = styled(SignInBtn)`
  background: linear-gradient(90deg, #fe727c, #e73a73);
  color: ${(props) => props.theme.brand.white};
  &:hover {
    background: linear-gradient(90deg, #ed525d, #d11a56);
  }
`;

export const SignInFormWrap = styled.form`
  margin-top: 1.75rem;
`;
