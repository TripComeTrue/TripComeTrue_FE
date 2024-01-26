import styled from 'styled-components';
import { Button } from '@/components/common';

export const MyPageAvatarWrap = styled.div`
  width: 5.1875rem;
  margin: 0 auto 1.25rem;
  text-align: center;
`;

export const MyPageInputEl = styled.input`
  appearance: none;
  width: 0;
  height: 0;
  visibility: hidden;
`;

export const MyPageAvatarEditBtn = styled(Button)`
  margin-top: 0.8125rem;
  padding: 0.25rem 0.5rem;
  height: auto;
`;
