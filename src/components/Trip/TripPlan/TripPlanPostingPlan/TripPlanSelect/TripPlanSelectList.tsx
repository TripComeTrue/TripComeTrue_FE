import React, { useEffect } from 'react';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { TripPlanSelectListProps } from './TripPlanSelectList.types';
import { getMyPlan } from '@/apis/mypage';
import { MyPageItemNone, MyPagePlanSkeleton } from '@/components/MyPage';
import MyPagePlanWrap from '@/components/MyPage/MyPagePlan/MyPagePlan.styles';
import TripPlanSelectItem from './TripPlanSelectItem';

function TripPlanSelectList({
  selectedId,
  setSelectedId,
}: TripPlanSelectListProps) {
  const { ref, inView } = useInView();
  // 무한스크롤 Query 코드
  const { data, fetchNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
    queryKey: ['mypage', 'plan'],
    queryFn: async ({ pageParam }) => getMyPlan(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) =>
      !lastPage.data.last ? lastPageParam + 1 : undefined,
  });

  // 스크롤 하단으로 이동시 다음페이지 페칭
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
  return (
    <div>
      {data?.pages[0].data.content.length === 0 && <MyPageItemNone />}
      <MyPagePlanWrap>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.data.content.map((plan) => (
              <TripPlanSelectItem
                key={plan.id}
                plan={plan}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
              />
            ))}
          </React.Fragment>
        ))}
        {isFetchingNextPage && <MyPagePlanSkeleton />}
      </MyPagePlanWrap>
      <div ref={ref}>&nbsp;</div>
    </div>
  );
}

export default TripPlanSelectList;
