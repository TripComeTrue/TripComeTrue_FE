import * as Styled from './TripHomeBody.styles';
import { SubTitle } from '@/components/common';
import starIcon from '/starIcon.svg';
import dollar from '/images/dollar.svg';
import shower from '/images/shower.svg';
import CreatorCarousel from '@/components/Trip/TripHome/CreatorCarousel/CreatorCarousel';
import TripCarousel from '../TripCarousel/TripCarousel';
import ShortCarousel from '../ShortCarousel/ShortCarousel';

const TripHomeBody = () => {
  return (
    <Styled.Container>
      <Styled.ContentsContainer>
        <SubTitle margin="0 0 0.875rem" icon={starIcon}>
          인기 크리에이터 일정 따라가기!
        </SubTitle>
        <TripCarousel />
      </Styled.ContentsContainer>
      <Styled.ContentsContainer>
        <SubTitle margin="0 0 0.875rem" icon={starIcon}>
          인기 여행지 쇼츠보기
        </SubTitle>
        <ShortCarousel />
      </Styled.ContentsContainer>
      <Styled.ContentsContainer>
        <SubTitle margin="0 0 0.875rem" icon={starIcon}>
          내 여행 취향과 맞는 크리에이터
        </SubTitle>
        <CreatorCarousel />
      </Styled.ContentsContainer>
      <Styled.ContentsContainer>
        <SubTitle margin="0 1.25rem 0.875rem 0" icon={dollar} variant="more">
          100만원으로 다녀온 인생 여행
        </SubTitle>
        <Styled.Thumbnail
          src="https://source.unsplash.com/random"
          alt="Thumbnail"
        />
        <TripCarousel size={144} />
      </Styled.ContentsContainer>
      <Styled.ContentsContainer>
        <SubTitle margin="0 1.25rem 0.875rem 0" icon={shower} variant="more">
          국내 스파&풀빌라 여행 일정 모음
        </SubTitle>
        <Styled.Thumbnail
          src="https://source.unsplash.com/random"
          alt="Thumbnail"
        />
        <TripCarousel size={144} />
      </Styled.ContentsContainer>
    </Styled.Container>
  );
};

export default TripHomeBody;