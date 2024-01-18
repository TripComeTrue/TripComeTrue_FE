import styled from 'styled-components';
import { tabBarHeight } from '@/styles/common';

export const MyPageLayoutWrap = styled.div`
  min-height: inherit;
`;

const MyPageContainer = styled.div`
  ${tabBarHeight};
`;

export default MyPageContainer;
