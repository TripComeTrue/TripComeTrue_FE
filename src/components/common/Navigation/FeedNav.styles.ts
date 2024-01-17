import styled from 'styled-components';
import { FeedNavBookmarkProps, FeedNavModeProps } from './FeedNav.types';

export const FeedNavBtnWrap = styled.div<FeedNavModeProps>`
  width: ${({ $isScheduleIcon }) =>
    $isScheduleIcon === 'true' ? 'auto' : '3.125rem'};
`;

export const FeedNavTitle = styled.h3<FeedNavModeProps>`
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.5rem;
  flex: 1;
  text-align: ${({ $isScheduleIcon }) =>
    $isScheduleIcon === 'true' ? 'left' : 'center'};
`;

export const FeedNavTitleWrap = styled.div`
  flex: 1;
`;

export const FeedNavRight = styled.div<FeedNavModeProps>`
  display: flex;
  align-items: center;
  width: ${({ $isScheduleIcon }) =>
    $isScheduleIcon === 'true' ? '5rem' : '3.125rem'};
  justify-content: space-between;
`;

export const FeedNavIcon = styled.button`
  font-size: 1.25rem;
  cursor: pointer;
  width: 1.3125rem;
  height: 1.375rem;
  text-align: center;
`;

export const FeedNavSchedule = styled(FeedNavIcon)`
  position: relative;
  padding-top: 0.0625rem;
  &:hover .tooltip {
    opacity: 1;
  }
`;

export const Tooltip = styled.span`
  opacity: 0;
  font-size: 0.625rem;
  font-weight: bold;
  position: absolute;
  width: 5rem;
  left: -1.8125rem;
  top: 1.875rem;
  background-color: ${({ theme }) => theme.brand.primary};
  padding: 0.125rem 0 0.25rem;
  border-radius: 0.25rem;
  transition: opacity 0.3s;
  &::after {
    content: '';
    position: absolute;
    left: calc(50% - 0.1563rem);
    bottom: 100%;
    border-width: 5px 3px;
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${({ theme }) => theme.brand.primary};
  }
`;

export const FeedNavBookmark = styled(FeedNavIcon)<FeedNavBookmarkProps>`
  color: ${({ $isBookmarked, theme }) =>
    $isBookmarked === 'true' ? theme.brand.primary : theme.text.black};
`;
