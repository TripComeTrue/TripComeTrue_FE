import { InfiniteData } from '@tanstack/react-query';

export interface CardListProps {
  tripRecordsData: InfiniteData<any, unknown> | undefined;
}
