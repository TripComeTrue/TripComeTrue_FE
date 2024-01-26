import { useState } from 'react';
import { EmptyContents, SubTitle, Text } from '@/components/common';
import * as Styled from './TopReview.styles';
import starIcon from '/starIcon.svg';

import ReviewSwiper from '@/components/common/Review/ReviewSwiper';
import { DAY_OPTION } from '@/constants/DetailFeed/City';
import { useDetailFeedQuery } from '@/hooks/DetailFeed/useDetailFeedQuery';

const SpotTopReview = ({
  id,
  placeName,
}: {
  id: number;
  placeName: string;
}) => {
  const [day, setDay] = useState(2);
  const { data, isLoading } = useDetailFeedQuery<SpotTopReviewResponseType>({
    queryKey: 'spotTopReview',
    id,
    fnUrl: `/v1/trip-records?size=5&page=0&orderBy=storeCount&order=DESC&totalDays=${day}&placeId=${id}`,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data || !data.data) {
    return <p>Data not available</p>;
  }

  const onClickDay = (totalDays: number) => {
    setDay(totalDays);
  };
  const REVIEW_DATA = data.data;
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
      {REVIEW_DATA.length === 0 ? (
        <EmptyContents />
      ) : (
        <Styled.TopReviewItemBox
          spaceBetween={8}
          slidesPerView={1.63}
          scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
          {REVIEW_DATA.map(
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
