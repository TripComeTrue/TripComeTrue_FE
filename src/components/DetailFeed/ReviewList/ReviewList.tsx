import { Fragment, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { PlaceReviewCard, Spinners } from '@/components/common';
import FormattedDate from '@/utils/formattedDate';
import { getPlaceReviews } from '@/apis/place';

const ReviewList = ({ sort, onlyImage }: any) => {
  const [ref, inView] = useInView();
  const { placeId } = useParams() as { placeId: string };

  const {
    data: placeReviewsData,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    refetch,
  } = useSuspenseInfiniteQuery({
    queryKey: ['PlaceReviewsInfiniteData'],
    queryFn: ({ pageParam }) =>
      getPlaceReviews({ placeId, size: 10, sort, onlyImage, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      return !lastPage.isLast ? lastPageParam + 1 : null;
    },
  });

  useEffect(() => {
    refetch();
  }, [sort, onlyImage]);

  useEffect(() => {
    if (hasNextPage && inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <ul>
        {placeReviewsData?.pages.map((page, index) => (
          <Fragment key={index}>
            {page.placeReviews.map((placeReview) => (
              <li key={placeReview.placeReviewId}>
                <Link
                  to={`/detailfeed/spot/${placeId}/review/${placeReview.placeReviewId}/comment`}>
                  <PlaceReviewCard>
                    <PlaceReviewCard.PlaceHeader
                      nickname={placeReview.nickname}
                      profileUrl={placeReview.profileUrl}
                      writeDate={FormattedDate(placeReview.createdAt)}
                    />
                    <PlaceReviewCard.Main
                      imageUrl={placeReview.imageUrl}
                      content={placeReview.content}
                    />
                    <PlaceReviewCard.InteractionButtons
                      likeCount={placeReview.likeCount}
                      commentCount={placeReview.commentCount}
                    />
                  </PlaceReviewCard>
                </Link>
              </li>
            ))}
          </Fragment>
        ))}
      </ul>
      {isFetchingNextPage ? <Spinners /> : <div ref={ref} />}
    </>
  );
};

export default ReviewList;
