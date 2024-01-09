import { Swiper, SwiperSlide } from 'swiper/react';
import { CityData } from './HomeMD.types';
import styled from 'styled-components';
import bookmarkIcon from '/bookmarkPress.svg';

const SwiperWrap = styled(Swiper)`
  margin-left: 1rem;
`;

const SwiperSlideWrap = styled(SwiperSlide)``;

const SliderImg = styled.div`
  position: relative;
  img {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 10px;
  }
`;

const Bookmark = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.brand.white};

  img {
    margin-right: 0.2rem;

    width: 1rem;
  }
`;

const SliderTitle = styled.div`
  margin-top: -0.2rem;
  margin-left: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding-bottom: 1rem;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const HomeMDChoice = ({ city }: { city: CityData[] }) => {
  return (
    <SwiperWrap
      spaceBetween={6}
      slidesPerView={2.2}
      direction="horizontal"
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
      {city.map((item) => (
        <SwiperSlideWrap key={item.city}>
          <SliderImg>
            <img src={item.cityImg} alt="img" />
            <Bookmark>
              <img src={bookmarkIcon} alt="bookmarkIcon" />
              {item.bookmark}
            </Bookmark>
          </SliderImg>
          <SliderTitle>{item.city}</SliderTitle>
        </SwiperSlideWrap>
      ))}
    </SwiperWrap>
  );
};

export default HomeMDChoice;
