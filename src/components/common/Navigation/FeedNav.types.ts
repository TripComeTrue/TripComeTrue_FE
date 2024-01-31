import { ReactNode } from 'react';

export interface FeedNavProps {
  children?: ReactNode;
  isScheduleIcon?: boolean;
  cityId?: string;
  placeId?: string;
  feedType?: 'spot';
}

export interface FeedNavModeProps {
  $isScheduleIcon: string;
}

export interface FeedNavBookmarkProps {
  $isBookmarked: string;
}
