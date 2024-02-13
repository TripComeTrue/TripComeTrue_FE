import { ReactNode } from 'react';

export interface FeedNavProps {
  children: ReactNode;
  isScheduleIcon?: boolean;
  cityId?: string;
  placeId?: string;
  feedType: 'city' | 'spot';
  isStored: boolean;
}

export interface FeedNavModeProps {
  $isScheduleIcon: string;
}

export interface FeedNavBookmarkProps {
  $isBookmarked: string;
}
