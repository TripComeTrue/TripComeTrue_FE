import styled from 'styled-components';

export const PostUserWrap = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover p {
    text-decoration: underline;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const UserImg = styled.div`
  img {
    width: 4rem;
    height: 4rem;
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

export const UserRate = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-left: -0.1rem;

  font-weight: ${({ theme }) => theme.fontWeights.bold};

  img {
    margin-right: 0.2rem;
    width: 1rem;
  }
`;
