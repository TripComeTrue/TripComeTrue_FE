import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { EmptyContents, SubTitle, Text } from '@/components/common';
import * as Styled from './TopReview.styles';
import starIcon from '/starIcon.svg';

import ReviewSwiper from '@/components/common/Review/ReviewSwiper';
import { DAY_OPTION } from '@/constants/DetailFeed/City';
import { getSpotTopReview } from '@/apis/detailfeed';

const SpotTopReview = ({
  placeId,
  placeName,
}: {
  placeId: string;
  placeName: string;
}) => {
  const [day, setDay] = useState(2);
  const { data: spotTopReviews, isLoading } = useQuery({
    queryKey: ['spotTopReview', placeId, day],
    queryFn: () => getSpotTopReview(placeId, day),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!spotTopReviews) {
    return <p>Data not available</p>;
  }

  const onClickDay = (totalDays: number) => {
    setDay(totalDays);
  };
  return (
    <div>
      <Styled.SubTitleBox>
        <SubTitle fontSize={18} icon={starIcon}>
          {placeName} 여행 후기 TOP 3
        </SubTitle>
      </Styled.SubTitleBox>
      <Styled.DayOptions>
        {DAY_OPTION.map((item) => (
          <Styled.DayOption
            key={item.id}
            selected={item.id === day}
            onClick={() => onClickDay(item.id)}>
            <Text
              fontSize={12}
              fontWeight={700}
              color={day === item.id ? 'black' : 'gray'}>
              {item.dayOption}
            </Text>
          </Styled.DayOption>
        ))}
      </Styled.DayOptions>
      {spotTopReviews.length === 0 ? (
        <EmptyContents />
      ) : (
        <Styled.TopReviewItemBox
          spaceBetween={8}
          slidesPerView={1.63}
          scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
          {spotTopReviews.map(
            ({
              member,
              averageRating,
              countries,
              title,
              totalDays,
              storeCount,
              imageUrl,
              tripRecordId,
            }) => (
              <Styled.TopReviewItem key={tripRecordId}>
                <ReviewSwiper
                  tripRecordId={tripRecordId}
                  title={countries}
                  bookmark={storeCount}
                  img={imageUrl}
                  username={member.nickname}
                  rate={averageRating}
                  userphoto={member.profileImage}
                  nights={`${totalDays - 1}박 ${totalDays}일`}
                  postTitle={title}
                />
              </Styled.TopReviewItem>
            ),
          )}
        </Styled.TopReviewItemBox>
      )}
    </div>
  );
};

export default SpotTopReview;
