import { SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { SlideHotItem } from './Review.types';
import * as Styled from './Review.styles';
import bookmarkPress from '/bookmarkPress.svg';
import starFillIcon from '/starFill.svg';

const ReviewSwiper: React.FC<SlideHotItem> = ({
  title,
  bookmark,
  img,
  rate,
  username,
  userphoto,
  nights,
  postTitle,
  tripRecordId,
}) => {
  const navigate = useNavigate();
  const handleReviewClick = (recordId: number) => {
    navigate(`/trip/detail/${recordId}`);
  };
  return (
    <SwiperSlide key={tripRecordId}>
      <Styled.HotplaceReviewWrap
        onClick={() => handleReviewClick(tripRecordId)}>
        <Styled.HotplaceImg>
          <img src={img} alt="img" />
          <Styled.GradientReview> </Styled.GradientReview>
        </Styled.HotplaceImg>
        <Styled.HotplaceBookmark>
          <img src={bookmarkPress} alt="bookmarkPress" />
          {bookmark}
        </Styled.HotplaceBookmark>

        <Styled.HotplaceDesWrap>
          <Styled.DesNightPlace>
            <div>
              {nights} ・ {title}
            </div>
            <p>{postTitle}</p>
          </Styled.DesNightPlace>

          <Styled.DesRate>
            <img src={starFillIcon} alt="bookmark" />
            {rate}
          </Styled.DesRate>
          <Styled.UserInfo>
            <img src={userphoto} alt="user" />
            {username}
          </Styled.UserInfo>
        </Styled.HotplaceDesWrap>
      </Styled.HotplaceReviewWrap>
    </SwiperSlide>
  );
};

export default ReviewSwiper;
