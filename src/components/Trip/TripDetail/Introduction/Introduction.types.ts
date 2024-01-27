import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

export interface IntroductionProps {
  tripRecordData: TripRecordDetail;
  tripRecordDetailRefetch: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<any, Error>>;
}
