import { Link } from 'react-router-dom';
import { MyPageReviewItemProps } from './MyPageReviewItem.types';
import { Bookmark, Text } from '@/components/common';
import messageIcon from '/message.svg';
import * as Styled from './MyPageReviewItem.styles';
import * as Spots from '@/components/common/Spots/Spots.style';
import MyPagePopMenu from '../MyPagePopMenu/MyPagePopMenu';

function MyPageReviewItem({
  review,
  onOpenShare,
  setReviewItem,
}: MyPageReviewItemProps) {
  return (
    <Styled.MyPageReviewItemWrap>
      <Spots.SliderImg>
        <img src={review.imageUrl} alt="img" />
        <Spots.Bookmark>
          <Bookmark count={review.storeCount} />
        </Spots.Bookmark>
      </Spots.SliderImg>
      <Spots.SliderTitleSortLeft>
        <Link to={`/trip/detail/${review.tripRecordId}`}>
          <Text tag="p" fontSize={10} color="gray" fontWeight={600}>
            {review.totalDays - 1}박 {review.totalDays}일 ・ {review.countries}
          </Text>
          <Text tag="h4" fontSize={12} fontWeight={600}>
            {review.title}
          </Text>
          <Spots.SpaceImg>
            <img src={messageIcon} alt="message" />
            {review.commentCount}
          </Spots.SpaceImg>
        </Link>
      </Spots.SliderTitleSortLeft>
      <Styled.MyPageReviewPopBtn>
        <MyPagePopMenu
          vertical
          onOpenShare={onOpenShare}
          review={review}
          setReviewItem={setReviewItem}
        />
      </Styled.MyPageReviewPopBtn>
    </Styled.MyPageReviewItemWrap>
  );
}

export default MyPageReviewItem;
