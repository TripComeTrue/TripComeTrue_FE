import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

export interface ReviewDetailProps {
  placeReviewData: PlaceReviewData;
  commentClickHandler: VoidFunction;
  placeReviewRefetch: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<PlaceReviewData, Error>>;
}
