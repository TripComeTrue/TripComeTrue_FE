import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SignInBtnIconProps } from './SignInBtns.type';

export const SignInBtnsWrap = styled.div`
  margin: 6.25rem 0;
`;

export const SignInBtn = styled.button`
  display: block;
  height: 2.5rem;
  border-radius: 2.5rem;
  width: 100%;
  margin-bottom: 1rem;
  transition: background-color 0.3s;
  cursor: pointer;
`;
export const SignInBtnGoogle = styled(SignInBtn)`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.brand.gray};
  &:hover {
    background-color: ${(props) => props.theme.brand.gray};
  }
`;
export const SignInBtnNaver = styled(SignInBtn)`
  background-color: #06be34;
  color: ${(props) => props.theme.brand.white};
  &:hover {
    background-color: #01a82b;
  }
`;
export const SignInBtnKakao = styled(SignInBtn)`
  background-color: #ffdd00;
  &:hover {
    background-color: #f4bf03;
  }
`;
export const SignInBtnEmail = styled(Link)`
  display: block;
  text-align: center;
  height: 2.5rem;
  line-height: 2.5rem;
  width: 100%;
  background-color: transparent;
  transition: background-color 0.3s;
  color: ${(props) => props.theme.text.gray};
  &:hover {
    background-color: ${(props) => props.theme.brand.lightGray};
  }
`;
export const SignInBtnIcon = styled.span<SignInBtnIconProps>`
  width: 1.25rem;
  height: 1.25rem;
  display: inline-block;
  vertical-align: -4px;
  margin-right: 10px;
  background-image: ${({ icon }) => {
    switch (icon) {
      case 'yanolja':
        return 'url(/images/yanolja_white.svg)';
      case 'yanolja_b':
        return 'url(/images/yanolja_black.svg)';
      default:
        return 'url(/images/social-logo-sprite.png)';
    }
  }};
  background-size: ${({ icon }) =>
    icon === 'yanolja' || icon === 'yanolja_b' ? '100%' : '400%'};
  background-repeat: no-repeat;
  background-position: ${(props) => {
    switch (props.icon) {
      case 'google':
        return '0 50%';
      case 'naver':
        return '33.3333% 50%';
      case 'kakao':
        return '66.6666% 50%';
      default:
        return '0 0';
    }
  }};
`;
export const SignInBtnRight = styled.span`
  display: inline-block;
  width: 0.63rem;
  height: 0.63rem;
  background: url('images/arrow-right.png') 0 0/100% no-repeat;
  vertical-align: 1px;
`;
