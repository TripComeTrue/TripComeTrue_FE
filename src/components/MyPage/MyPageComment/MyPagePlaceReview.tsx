import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { deleteMyPlaceReview, getMyPlaceReview } from '@/apis/mypage';
import { Modal, PlaceReviewCard, Text } from '@/components/common';
import dateToString from './MyPagePlaceReview.utils';
import MyPageItemNone from '../MyPageItemNone/MyPageItemNone';
import MyPagePlaceReviewSkeleton from './MyPagePlaceReviewSkeleton';
import useModal from '@/hooks/common/useModal';

function MyPagePlaceReview() {
  const navigate = useNavigate();
  const { ref, inView } = useInView();
  const { open, handleOpen, handleClose } = useModal(); // 삭제모달 열림 여부
  const [selectedId, setSelectedId] = useState<number>();
  // 무한스크롤 Query 코드
  const { data, refetch, fetchNextPage, isFetchingNextPage } =
    useSuspenseInfiniteQuery({
      queryKey: ['mypage', 'place', 'review'],
      queryFn: async ({ pageParam }) => getMyPlaceReview(pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage, _, lastPageParam) =>
        !lastPage.data.isLast ? lastPageParam + 1 : undefined,
    });

  const onClickDelOpen = (id: number) => {
    setSelectedId(id);
    handleOpen();
  };

  // 삭제 mutation
  const { mutateAsync } = useMutation({
    mutationKey: ['mypage', 'plan', 'review', 'delete'],
    mutationFn: deleteMyPlaceReview,
  });

  // 삭제시 실행될 작업
  const onClickDel = async () => {
    const variable = {
      placeReviewIds: [selectedId ?? 0],
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
                  onClickDelete={() => onClickDelOpen(item.placeReviewId)}
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

export default MyPagePlaceReview;
