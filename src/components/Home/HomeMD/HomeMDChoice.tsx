import { SwiperSlide } from 'swiper/react';
import { CityData } from './HomeMD.types';
import bookmarkIcon from '/bookmarkPress.svg';
import * as Styled from './HomeMD.styles';

const HomeMDChoice = ({ city }: { city: CityData[] }) => {
  return (
    <Styled.SwiperLeftWrap>
      <Styled.SwiperWrap
        spaceBetween={6}
        slidesPerView={2.2}
        direction="horizontal"
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
        {city.map((item) => (
          <SwiperSlide key={item.city}>
            <Styled.SliderImg>
              <img src={item.cityImg} alt="img" />
              <Styled.Bookmark>
                <img src={bookmarkIcon} alt="bookmarkIcon" />
                {item.bookmark}
              </Styled.Bookmark>
            </Styled.SliderImg>
            <Styled.SliderTitle>{item.city}</Styled.SliderTitle>
          </SwiperSlide>
        ))}
      </Styled.SwiperWrap>
    </Styled.SwiperLeftWrap>
  );
};

export default HomeMDChoice;
