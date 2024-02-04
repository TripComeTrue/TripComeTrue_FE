import { useSuspenseQueries } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { EmptyContents, SubTitle, Text } from '@/components/common';
import * as Styled from './TopReview.styles';
import starIcon from '/starIcon.svg';

import { getCityInformation, getCityTopReview } from '@/apis/detailfeed';
import ReviewSwiper from '@/components/common/Review/ReviewSwiper';
import { DAY_OPTION } from '@/constants/DetailFeed/City';

const CityTopReview = () => {
  const { cityId } = useParams() as { cityId: string };
  const [day, setDay] = useState(2);
  const [{ data: cityTopReview }, { data: cityName }] = useSuspenseQueries({
    queries: [
      {
        queryKey: ['cityTopReview', cityId, day],
        queryFn: () => getCityTopReview(cityId, day),
      },
      {
        queryKey: ['cityInformation', cityId],
        queryFn: () => getCityInformation(cityId),
        select: (data: { name: string }) => data.name,
      },
    ],
  });

  const onClickDay = (totalDays: number) => {
    setDay(totalDays);
  };
  const REVIEW_DATA = cityTopReview.content;
  return (
    <div>
      <Styled.SubTitleBox>
        <SubTitle fontSize={18} icon={starIcon}>
          {cityName} 여행 후기 TOP 3
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
              averageRating,
              totalDays,
              memberName,
              tripRecordTitle,
              profileImageUrl,
              imageUrl,
              tripRecordId,
              storedCount,
            }) => (
              <Styled.TopReviewItem key={tripRecordId}>
                <ReviewSwiper
                  tripRecordId={tripRecordId}
                  bookmark={storedCount}
                  img={imageUrl}
                  title={cityName}
                  username={memberName}
                  rate={averageRating}
                  userphoto={profileImageUrl}
                  nights={`${totalDays - 1}박 ${totalDays}일`}
                  postTitle={tripRecordTitle}
                />
              </Styled.TopReviewItem>
            ),
          )}
        </Styled.TopReviewItemBox>
      )}
    </div>
  );
};

export default CityTopReview;
