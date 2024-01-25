import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { getMyPlaceReview } from '@/apis/mypage';
import { PlaceReviewCard } from '@/components/common';
import dateToString from './MyPagePlaceReview.utils';
import MyPageItemNone from '../MyPageItemNone/MyPageItemNone';
import MyPagePlaceReviewSkeleton from './MyPagePlaceReviewSkeleton';

function MyPagePlaceReview() {
  const navigate = useNavigate();
  const { ref, inView } = useInView();
  // 무한스크롤 Query 코드
  const { data, fetchNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
    queryKey: ['mypage', 'place', 'review'],
    queryFn: async ({ pageParam }) => getMyPlaceReview(pageParam),
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
      {data?.pages[0].data.placeReviews.length === 0 && <MyPageItemNone />}
      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page?.data.placeReviews.map((item) => (
            <PlaceReviewCard key={item.placeReviewId}>
              <PlaceReviewCard.MyPageHeader
                nickname={item.nickname}
                profileUrl={item.profileUrl}
                writeDate={`${dateToString(item.createdAt)}`}>
                <PlaceReviewCard.MyPageHeader.ActionsModal
                  onClickModify={() =>
                    navigate(
                      `/detailfeed/spot/${1}/review/${item.placeReviewId}/edit`,
                    )
                  }
                  onClickDelete={() => {}}
                />
              </PlaceReviewCard.MyPageHeader>
              <PlaceReviewCard.Main
                imageUrl={item?.imageUrl ?? ''}
                content={item.content}
              />
              <PlaceReviewCard.InteractionButtons
                likeCount={item.likeCount}
                commentCount={item.commentCount}
              />
            </PlaceReviewCard>
          ))}
        </React.Fragment>
      ))}
      {isFetchingNextPage && <MyPagePlaceReviewSkeleton />}
      <div ref={ref}>&nbsp;</div>
    </div>
  );
}

export default MyPagePlaceReview;
