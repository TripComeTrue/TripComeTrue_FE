import ReactPlayer from 'react-player';
import { SubTitle, Tag, Text } from '@/components/common';
import MarkerIcon from '/images/marker.svg';
import * as Styled from './TripDescription.styles';
import StarIcon from '/starIcon.svg';
import { TripDescriptionProps } from './TripDescription.types';
import classifyTag from '@/utils/classifyTag';

const TripDescription = ({ data }: TripDescriptionProps) => {
  const [date, daysData] = data || '';
  const formattedDate = date?.replace(/-/gi, '.');

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
        {daysData?.map((dayData: DayData) => (
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
                {dayData.tagType && (
                  <Tag src={dayData.tagUrl}>{classifyTag(dayData.tagType)}</Tag>
                )}
              </Styled.PlaceContents>
            </Styled.PlaceContainer>
            <Styled.PlaceCarousel spaceBetween={8} slidesPerView={2.4}>
              {[...dayData.videos, ...dayData.images].map(
                (imageData, index) => (
                  <Styled.PlaceSlide key={index}>
                    {(imageData as { id: number; imageUrl: string })
                      .imageUrl ? (
                      <Styled.Image
                        src={
                          (imageData as { id: number; imageUrl: string })
                            .imageUrl
                        }
                        alt={`${dayData.placeName} 관련`}
                      />
                    ) : (
                      <ReactPlayer
                        width="100%"
                        height="100%"
                        url={
                          (imageData as { id: number; videoUrl: string })
                            .videoUrl
                        }
                      />
                    )}
                  </Styled.PlaceSlide>
                ),
              )}
            </Styled.PlaceCarousel>
          </Styled.PlaceItem>
        ))}
      </Styled.PlaceList>
      <Styled.ButtonWrapper>
        <Styled.CopyButton>
          <Styled.IconImage src={StarIcon} alt="star icon" />
          <Text color="white" fontWeight={700}>
            여행일정 복사하기
          </Text>
        </Styled.CopyButton>
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
};

export default TripDescription;
