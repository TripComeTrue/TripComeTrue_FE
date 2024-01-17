import { ReactNode } from 'react';

export interface FeedNavProps {
  children?: ReactNode;
  isScheduleIcon?: boolean;
}

export interface FeedNavModeProps {
  $isScheduleIcon: string;
}

export interface FeedNavBookmarkProps {
  $isBookmarked: string;
}
