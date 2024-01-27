import { ReactNode } from 'react';

export interface FeedNavProps {
  children?: ReactNode;
  isScheduleIcon?: boolean;
  id: number;
  isStored: boolean;
  feedType?: 'spot';
  refetch: VoidFunction;
}

export interface FeedNavModeProps {
  $isScheduleIcon: string;
}

export interface FeedNavBookmarkProps {
  $isBookmarked: string;
}
