import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

export interface IntroductionProps {
  tripRecordData: TripRecordDetailData;
  tripRecordDetailRefetch: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<any, Error>>;
}
