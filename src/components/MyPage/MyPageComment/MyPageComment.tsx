import { Suspense, useState } from 'react';
import MyPagePlaceReview from './MyPagePlaceReview';
import MyPageTripRecordReview from './MyPageTripRecordReview';
import * as Styled from './MyPageComment.styles';
import { RetryErrorBoundary } from '@/components/common';
import MyPagePlaceReviewSkeleton from './MyPagePlaceReviewSkeleton';
import MyPageTripRecordReviewSkeleton from './MyPageTripRecordReviewSkeleton';

function MyPageComment() {
  const [selectedTab, setSelectedTab] = useState('place');
  const onClickTab = (tabName: string) => {
    setSelectedTab(tabName);
  };

  return (
    <div>
      <Styled.MyPageCommentTab>
        <Styled.MyPageCommentTabItem
          type="button"
          $selected={`${selectedTab === 'place'}`}
          onClick={() => onClickTab('place')}>
          여행지 리뷰
        </Styled.MyPageCommentTabItem>
        <Styled.MyPageCommentTabItem
          type="button"
          $selected={`${selectedTab === 'trip'}`}
          onClick={() => onClickTab('trip')}>
          여행후기 리뷰
        </Styled.MyPageCommentTabItem>
      </Styled.MyPageCommentTab>
      {selectedTab === 'place' && (
        <Styled.MyPageCommentWrap>
          <RetryErrorBoundary>
            <Suspense fallback={<MyPagePlaceReviewSkeleton />}>
              <MyPagePlaceReview />
            </Suspense>
          </RetryErrorBoundary>
        </Styled.MyPageCommentWrap>
      )}
      {selectedTab === 'trip' && (
        <RetryErrorBoundary>
          <Suspense fallback={<MyPageTripRecordReviewSkeleton />}>
            <MyPageTripRecordReview />
          </Suspense>
        </RetryErrorBoundary>
      )}
    </div>
  );
}

export default MyPageComment;
