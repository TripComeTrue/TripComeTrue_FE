import styled, { css } from 'styled-components';

export const ShareBtn = styled.button`
  display: block;
  width: 12.5rem;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.text.black};
  font-weight: bold;
  text-align: left;
  margin: 0 auto;
  padding: 0.5rem;
  transition: background-color 0.3s;
  border-radius: 2.8125rem;
  &:hover {
    background-color: ${({ theme }) => theme.brand.lightGray};
  }
`;

const ShareIcon = css`
  display: inline-block;
  width: 1.8125rem;
  height: 1.8125rem;
  border-radius: 1.8125rem;
  vertical-align: -0.5625rem;
  margin-right: 0.625rem;
  background-size: 58%;
  background-position: 58% 50%;
  background-repeat: no-repeat;
`;

export const ShareKakaoIcon = styled.span`
  ${ShareIcon};
  background-color: #ffdd00;
  background-image: url('/images/kakao_logo.png');
`;
export const ShareLinkIcon = styled.span`
  ${ShareIcon};
  background-color: ${({ theme }) => theme.brand.primary};
  background-image: url('/images/share-link.svg');
`;
