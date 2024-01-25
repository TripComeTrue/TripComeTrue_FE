import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { getMyTripRecordReview } from '@/apis/mypage';
import { TripRecordReviewCard } from '@/components/common';
import * as Styled from './MyPageTripRecordReview.styles';
import MyPageItemNone from '../MyPageItemNone/MyPageItemNone';
import MyPageTripRecordReviewSkeleton from './MyPageTripRecordReviewSkeleton';

function MyPageTripRecordReview() {
  const navigate = useNavigate();
  const { ref, inView } = useInView();
  // 무한스크롤 Query 코드
  const { data, fetchNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
    queryKey: ['mypage', 'trip-record', 'review'],
    queryFn: async ({ pageParam }) => getMyTripRecordReview(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) =>
      !lastPage.data.isLast ? lastPageParam + 1 : undefined,
  });

  // 스크롤 하단으로 이동시 다음페이지 페칭
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <div>
      {data.pages[0].data.tripRecordReviews.length === 0 && <MyPageItemNone />}
      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page?.data.tripRecordReviews.map((item) => (
            <TripRecordReviewCard key={item.tripRecordReviewId}>
              <Styled.TripRecordReviewTop>
                <TripRecordReviewCard.Title>
                  {item.tripRecordTitle}
                </TripRecordReviewCard.Title>
                <TripRecordReviewCard.ActionsModal
                  onClickModify={() => {
                    navigate(
                      `/trip/detail/${item.tripRecordId}/review/${item.tripRecordReviewId}/edit`,
                    );
                  }}
                  onClickDelete={() => {}}
                />
              </Styled.TripRecordReviewTop>
              <TripRecordReviewCard.Main
                nickname={item.nickname}
                averageRating={item.ratingScore}
                content={item.content}
              />
              <TripRecordReviewCard.Rating
                disabled={false}
                myRatingScore={item.ratingScore}
              />
            </TripRecordReviewCard>
          ))}
        </React.Fragment>
      ))}
      {isFetchingNextPage && <MyPageTripRecordReviewSkeleton />}
      <div ref={ref}>&nbsp;</div>
    </div>
  );
}

export default MyPageTripRecordReview;
