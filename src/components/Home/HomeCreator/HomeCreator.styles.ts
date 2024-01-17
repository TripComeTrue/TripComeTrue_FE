import styled from 'styled-components';

export const HotPostWrap = styled.div`
  margin-top: 1.8rem;

  position: relative;
`;

export const PostBackground = styled.div`
  position: absolute;
  top: 9rem;

  width: 100%;
  height: 6.5rem;

  background-color: ${({ theme }) => theme.brand.primary};
`;

export const SwiperDiv = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;
