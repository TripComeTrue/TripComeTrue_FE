import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { deleteMyRecordReview, getMyTripRecordReview } from '@/apis/mypage';
import { Modal, Text, TripRecordReviewCard } from '@/components/common';
import * as Styled from './MyPageTripRecordReview.styles';
import MyPageItemNone from '../MyPageItemNone/MyPageItemNone';
import MyPageTripRecordReviewSkeleton from './MyPageTripRecordReviewSkeleton';
import useModal from '@/hooks/common/useModal';

function MyPageTripRecordReview() {
  const navigate = useNavigate();
  const { ref, inView } = useInView();
  const { open, handleOpen, handleClose } = useModal(); // 삭제모달 열림 여부
  const [selectedId, setSelectedId] = useState<number>();
  // 무한스크롤 Query 코드
  const { data, refetch, fetchNextPage, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: ['mypage', 'trip-record', 'review'],
      queryFn: async ({ pageParam }) => getMyTripRecordReview(pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage, _, lastPageParam) =>
        !lastPage.data.isLast ? lastPageParam + 1 : undefined,
      gcTime: 1000 * 60,
    });

  const onClickDelOpen = (id: number) => {
    setSelectedId(id);
    handleOpen();
  };

  // 삭제 mutation
  const { mutateAsync } = useMutation({
    mutationKey: ['mypage', 'trip-record', 'review', 'delete'],
    mutationFn: deleteMyRecordReview,
  });

  // 삭제시 실행될 작업
  const onClickDel = async () => {
    const variable = {
      tripRecordReviewIds: [selectedId ?? 0],
    };
    const resCode = await mutateAsync(variable);
    if (resCode === 200) refetch();
    handleClose();
  };

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
                  onClickDelete={() => onClickDelOpen(item.tripRecordReviewId)}
                />
              </Styled.TripRecordReviewTop>
              <TripRecordReviewCard.Main
                reviewImage={item.imageUrl}
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
      {/* 삭제 모달 */}
      <Modal
        type="info"
        dialog
        open={open}
        onClose={handleClose}
        onReset={handleClose}
        onConfirm={onClickDel}>
        <Text fontSize={14} fontWeight={600}>
          삭제된 내용은 복구할 수 없습니다.
          <br />
          삭제하시겠습니까?
        </Text>
      </Modal>
    </div>
  );
}

export default MyPageTripRecordReview;
