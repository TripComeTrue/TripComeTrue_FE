import { SubTitle, Tag, Text } from '@/components/common';
import MarkerIcon from '/images/marker.svg';
import * as Styled from './TripDescription.styles';
import StarIcon from '/starIcon.svg';

const TripDescription = () => {
  return (
    <Styled.Container>
      <Styled.ScheduleContainer>
        <Styled.DayTitle>DAY 1 | 2024.10.20</Styled.DayTitle>
        <SubTitle icon={MarkerIcon}>스위스 취리히</SubTitle>
      </Styled.ScheduleContainer>
      <Styled.PlaceList>
        <Styled.PlaceItem>
          <Styled.PlaceContainer>
            <Styled.Side>
              <Styled.PlaceNumber>1</Styled.PlaceNumber>
              <Styled.HLine />
            </Styled.Side>
            <Styled.PlaceContents>
              <Text tag="h3" fontWeight={700}>
                메이빈 숙소
              </Text>
              <Text>
                메이빈 숙소 좋았어요~ 스위스 풍경이 한눈에 다 보이기도 하고
                기차역이랑 가까워서 좋았습니다. 주변 풍경이 예술이에요.
              </Text>
              <Tag>해당 후기의 숙박시설 보러가기</Tag>
            </Styled.PlaceContents>
          </Styled.PlaceContainer>
          <Styled.PlaceCarousel spaceBetween={8} slidesPerView={2.4}>
            <Styled.PlaceSlide>
              <Styled.Image src="https://source.unsplash.com/random" alt="" />
            </Styled.PlaceSlide>
            <Styled.PlaceSlide>
              <Styled.Image src="https://source.unsplash.com/random" alt="" />
            </Styled.PlaceSlide>
            <Styled.PlaceSlide>
              <Styled.Image src="https://source.unsplash.com/random" alt="" />
            </Styled.PlaceSlide>
          </Styled.PlaceCarousel>
        </Styled.PlaceItem>
        <Styled.PlaceItem>
          <Styled.PlaceContainer>
            <Styled.Side>
              <Styled.PlaceNumber>2</Styled.PlaceNumber>
              <Styled.HLine />
            </Styled.Side>
            <Styled.PlaceContents>
              <Text tag="h3" fontWeight={700}>
                메이빈 숙소
              </Text>
              <Text>
                메이빈 숙소 좋았어요~ 스위스 풍경이 한눈에 다 보이기도 하고
                기차역이랑 가까워서 좋았습니다. 주변 풍경이 예술이에요.
              </Text>
              <Tag>해당 후기의 숙박시설 보러가기</Tag>
            </Styled.PlaceContents>
          </Styled.PlaceContainer>
          <Styled.PlaceCarousel spaceBetween={8} slidesPerView={2.4}>
            <Styled.PlaceSlide>
              <Styled.Image src="https://source.unsplash.com/random" alt="" />
            </Styled.PlaceSlide>
            <Styled.PlaceSlide>
              <Styled.Image src="https://source.unsplash.com/random" alt="" />
            </Styled.PlaceSlide>
            <Styled.PlaceSlide>
              <Styled.Image src="https://source.unsplash.com/random" alt="" />
            </Styled.PlaceSlide>
          </Styled.PlaceCarousel>
        </Styled.PlaceItem>
        <Styled.PlaceItem>
          <Styled.PlaceContainer>
            <Styled.Side>
              <Styled.PlaceNumber>3</Styled.PlaceNumber>
              <Styled.HLine />
            </Styled.Side>
            <Styled.PlaceContents>
              <Text tag="h3" fontWeight={700}>
                메이빈 숙소
              </Text>
              <Text>
                메이빈 숙소 좋았어요~ 스위스 풍경이 한눈에 다 보이기도 하고
                기차역이랑 가까워서 좋았습니다. 주변 풍경이 예술이에요.
              </Text>
              <Tag>해당 후기의 숙박시설 보러가기</Tag>
            </Styled.PlaceContents>
          </Styled.PlaceContainer>
          <Styled.PlaceCarousel spaceBetween={8} slidesPerView={2.4}>
            <Styled.PlaceSlide>
              <Styled.Image src="https://source.unsplash.com/random" alt="" />
            </Styled.PlaceSlide>
            <Styled.PlaceSlide>
              <Styled.Image src="https://source.unsplash.com/random" alt="" />
            </Styled.PlaceSlide>
            <Styled.PlaceSlide>
              <Styled.Image src="https://source.unsplash.com/random" alt="" />
            </Styled.PlaceSlide>
          </Styled.PlaceCarousel>
        </Styled.PlaceItem>
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
