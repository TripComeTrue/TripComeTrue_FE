import styled from 'styled-components';

export const HotPostWrap = styled.div`
  margin-top: 1.8rem;

  position: relative;
`;

export const PostUserWrap = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  &:hover p {
    text-decoration: underline;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const UserImg = styled.div`
  img {
    width: 4.125rem;
    border-radius: 50%;
  }
`;

export const UserInfo = styled.div`
  margin-left: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  p {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
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
