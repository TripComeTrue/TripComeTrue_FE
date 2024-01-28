import styled from 'styled-components';
import { alignCenter, maxWidth } from '@/styles/common';

export const ShortsModalBox = styled.div`
  ${maxWidth};
  margin: 0 auto;
  height: 100%;
  padding-bottom: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ShortsModalBoxNav = styled.div`
  padding: 0 1.25rem;

  height: 2.5rem;

  ${alignCenter}
  gap: 1rem;
`;

export const ShortsModalInner = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 9/16;
  background-color: ${({ theme }) => theme.brand.white};
  & .youtube-api {
    position: relative;
    height: 100%;
    background: ${({ theme }) => theme.brand.black};
  }
  & .youtube-api iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

export const ShortsModalDescBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.25rem 1.25rem 4rem;
`;

export const ShortsModalProfile = styled.div`
  display: flex;
  gap: 0.625rem;
  align-items: center;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.brand.white};
  &:hover {
    span {
      cursor: pointer;
    }
  }
`;

export const ShortsModalTitle = styled.h3`
  width: fit-content;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.brand.white};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  cursor: pointer;
`;

export const ShortsModalToggleMuteBtn = styled.button`
  cursor: pointer;
  position: absolute;
  width: 3rem;
  height: 3rem;
  bottom: 5.25rem;
  right: 0.5rem;
  /* transform: translate(-50%, -50%); */
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.brand.white};
`;
