import { useState } from 'react';
import MyPagePlaceReview from './MyPagePlaceReview';
import MyPageTripRecordReview from './MyPageTripRecordReview';
import * as Styled from './MyPageComment.styles';

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
          <MyPagePlaceReview />
        </Styled.MyPageCommentWrap>
      )}
      {selectedTab === 'trip' && <MyPageTripRecordReview />}
    </div>
  );
}

export default MyPageComment;
