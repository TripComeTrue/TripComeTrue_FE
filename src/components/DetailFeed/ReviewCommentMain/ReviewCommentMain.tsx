import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getPlaceReview } from '@/apis/place';
import CommentList from '../CommentList/CommentList';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import { ReviewCommentMainProps } from './ReviewCommentMain.types';

const ReviewCommentMain = ({
  replyClickHandler,
  commentClickHandler,
  setRefetch,
}: ReviewCommentMainProps) => {
  const { reviewId } = useParams() as {
    placeId: string;
    reviewId: string;
  };
  const { data: placeReviewData, refetch: placeReviewRefetch } =
    useSuspenseQuery({
      queryKey: ['PlaceReviewData'],
      queryFn: () => getPlaceReview(reviewId),
    });

  useEffect(() => {
    setRefetch(() => placeReviewRefetch);
  }, [placeReviewRefetch]);

  return (
    <div>
      <ReviewDetail
        placeReviewData={placeReviewData}
        placeReviewRefetch={placeReviewRefetch}
        commentClickHandler={commentClickHandler}
      />

      <CommentList
        placeReviewData={placeReviewData}
        placeReviewRefetch={placeReviewRefetch}
        replyClickHandler={replyClickHandler}
      />
    </div>
  );
};

export default ReviewCommentMain;
