import styled from 'styled-components';
import { maxWidth } from '@/styles/common';

export const ShortsModalBox = styled.div`
  ${maxWidth};
  margin: 0 auto;
  height: 100%;
  padding-bottom: 5rem;
  display: flex;
  align-items: center;
`;

export const ShortsModalInner = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 9/16;
  background-color: ${({ theme }) => theme.brand.white};
  & .youtube-api {
    height: 100%;
    background: ${({ theme }) => theme.brand.black};
    .ytp-show-cards-title {
      display: none;
    }
  }
  & .youtube-api iframe {
    width: 100%;
    height: 100%;
  }
`;

export const ShortsModalToggleMuteBtn = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 3rem;
  right: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  color: ${({ theme }) => theme.brand.white};
`;
