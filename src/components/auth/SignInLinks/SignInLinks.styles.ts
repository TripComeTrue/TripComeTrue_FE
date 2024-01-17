import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SignInLinkWrap = styled.div`
  /* display: flex;
  justify-content: space-between;
  margin-top: 1.6rem; */
  margin-top: 1.6rem;
  text-align: center;
`;
export const SignInLinkItem = styled.div`
  flex: 1;
  border-right: 1px solid ${(props) => props.theme.text.gray};
  &:last-child {
    border-right: 0;
  }
`;
export const SignInLink = styled(Link)`
  display: inline-block;
  text-align: center;
  font-size: 0.75rem;
  /* height: 1.13rem; */
  /* line-height: 1.13rem; */
  font-weight: bold;
  color: ${(props) => props.theme.text.gray};
  padding-bottom: 0.25rem;
  border-bottom: 1px solid ${(props) => props.theme.text.gray};
`;
