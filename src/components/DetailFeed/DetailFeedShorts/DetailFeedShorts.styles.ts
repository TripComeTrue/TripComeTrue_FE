import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const DetailFeedShortsWrapper = styled.section`
  height: 20rem;
`;

export const SubTitleBox = styled.div`
  padding: 0 1.25rem;
`;

export const EmptyBox = styled.div`
  ${alignCenter}
  justify-content: center;

  height: 19rem;
`;

export const SkeletonShortsBox = styled.div`
  display: flex;
  gap: 0.7rem;

  margin-top: 1rem;
  padding: 0 1.25rem;

  overflow: hidden;
`;
