import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

export interface CommentListProps {
  replyClickHandler: (id: number) => void;
  placeReviewData: PlaceReviewData;
  placeReviewRefetch: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<PlaceReviewData, Error>>;
}
