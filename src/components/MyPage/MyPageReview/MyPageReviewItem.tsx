import { MyPageReviewItemProps } from './MyPageReviewItem.types';
import { Bookmark, Text } from '@/components/common';
import messageIcon from '/message.svg';
import * as Styled from './MyPageReviewItem.styles';
import * as Spots from '@/components/common/Spots/Spots.style';
import MyPagePopMenu from '../MyPagePopMenu/MyPagePopMenu';

function MyPageReviewItem({ review, onOpenShare }: MyPageReviewItemProps) {
  return (
    <Styled.MyPageReviewItemWrap>
      <Spots.SliderImg>
        <img src={review.postImg} alt="img" />
        <Spots.Bookmark>
          <Bookmark count={review.bookmark} />
        </Spots.Bookmark>
      </Spots.SliderImg>
      <Spots.SliderTitleSortLeft>
        <Text tag="p" fontSize={10} color="gray" fontWeight={600}>
          {review.dates} ・ {review.location}
        </Text>
        <Text tag="h4" fontSize={12} fontWeight={600}>
          {review.postTitle}
        </Text>
        <Spots.SpaceImg>
          <img src={messageIcon} alt="message" />
          {review.reviews}
        </Spots.SpaceImg>
      </Spots.SliderTitleSortLeft>
      <Styled.MyPageReviewPopBtn>
        <MyPagePopMenu vertical onOpenShare={onOpenShare} />
      </Styled.MyPageReviewPopBtn>
    </Styled.MyPageReviewItemWrap>
  );
}

export default MyPageReviewItem;
