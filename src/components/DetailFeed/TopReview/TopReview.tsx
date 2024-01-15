import { useState } from 'react';
import { SubTitle, Text } from '@/components/common';
import * as Styled from './TopReview.styles';
import starIcon from '/starIcon.svg';

import ReviewSwiper from '@/components/common/Review/ReviewSwiper';
import { DAY_OPTION, TOP_REVIEW_DATA } from '@/constants/DetailFeed/City';

const TopReview = () => {
  const [day, setDay] = useState(1);

  const onClickDay = (id: number) => {
    setDay(id);
  };

  return (
    <Styled.TopReviewWrapper>
      <SubTitle fontSize={18} icon={starIcon} variant="more">
        방콕 여행 후기 TOP 3
      </SubTitle>
      <Styled.DayOptions>
        {DAY_OPTION.map(({ id, dayOption }) => (
          <Styled.DayOption
            key={id}
            daySelected={id === day}
            onClick={() => onClickDay(id)}>
            <Text
              fontSize={12}
              fontWeight={700}
              color={day === id ? 'black' : 'gray'}>
              {dayOption}
            </Text>
          </Styled.DayOption>
        ))}
      </Styled.DayOptions>
      <Styled.TopReviewItemBox
        spaceBetween={8}
        slidesPerView={1.63}
        scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
        {TOP_REVIEW_DATA.map(
          ({
            title,
            bookmark,
            img,
            rate,
            username,
            userphoto,
            nights,
            postTitle,
          }) => (
            <Styled.TopReviewItem key={title}>
              <ReviewSwiper
                key={title}
                title={title}
                bookmark={bookmark}
                img={img}
                username={username}
                rate={rate}
                userphoto={userphoto}
                nights={nights}
                postTitle={postTitle}
              />
            </Styled.TopReviewItem>
          ),
        )}
      </Styled.TopReviewItemBox>
    </Styled.TopReviewWrapper>
  );
};

export default TopReview;
