import { Link, useParams } from 'react-router-dom';
import { SubTitle, Text } from '@/components/common';
import MarkerIcon from '/images/marker.svg';
import * as Styled from './TripDescription.styles';
import StarIcon from '/starIcon.svg';
import { TripDescriptionProps } from './TripDescription.types';

const TripDescription = ({ data }: TripDescriptionProps) => {
  const { tripRecordId } = useParams() as { tripRecordId: string };
  const [date, daysData] = data;
  const formattedDate = date.replace(/-/gi, '.');

  return (
    <Styled.Container>
      <Styled.ScheduleContainer>
        <Styled.DayTitle>
          DAY {daysData && daysData[0].dayNumber} | {formattedDate}
        </Styled.DayTitle>
        <SubTitle icon={MarkerIcon}>
          {daysData && daysData[0].countryName}
        </SubTitle>
      </Styled.ScheduleContainer>
      <Styled.PlaceList>
        {daysData.map((dayData) => (
          <Styled.PlaceItem key={dayData.id}>
            <Styled.PlaceContainer>
              <Styled.Side>
                <Styled.PlaceNumber>{dayData.ordering}</Styled.PlaceNumber>
                <Styled.HLine />
              </Styled.Side>
              <Styled.PlaceContents>
                <Text tag="h3" fontWeight={700}>
                  {dayData.placeName}
                </Text>
                <Text>{dayData.content}</Text>
              </Styled.PlaceContents>
            </Styled.PlaceContainer>
            <Styled.PlaceCarousel spaceBetween={8} slidesPerView={2.4}>
              {dayData.images.map((imageData, index) => (
                <Styled.PlaceSlide key={index}>
                  <Styled.Image
                    src={imageData.imageUrl}
                    alt={`${dayData.placeName} 관련`}
                  />
                </Styled.PlaceSlide>
              ))}
            </Styled.PlaceCarousel>
          </Styled.PlaceItem>
        ))}
      </Styled.PlaceList>
      <Styled.ButtonWrapper>
        <Link to={`/trip/tripplancopy/${tripRecordId}`}>
          <Styled.CopyButton>
            <Styled.IconImage src={StarIcon} alt="star icon" />
            <Text color="white" fontWeight={700}>
              여행일정 복사하기
            </Text>
          </Styled.CopyButton>
        </Link>
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
};

export default TripDescription;
