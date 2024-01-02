import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import theme from '@/styles/theme';
import 'swiper/swiper-bundle.css';
import { useState } from 'react';
import starIcon from '/starIcon.svg';

interface LabelProps {
  checked: boolean;
}

const ShortsWrap = styled.div`
  margin-top: 0rem;
`;

const ShortsTitle = styled.div`
  margin-left: 7rem;
  position: relative;
  font-size: 1.9rem;
  font-weight: ${theme.fontWeights.bold};

  img {
    width: 2rem;
    position: absolute;
    left: -3rem;
    top: 0.2em;
  }
`;

const ShortsRadio = styled.div`
  margin: 1.5rem 4rem 0;
`;

const Label = styled.label<LabelProps>`
  margin-right: 0.8rem;
  padding: 0.2rem 1.3rem;
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.bold};
  background-color: ${(props) =>
    props.checked ? theme.brand.primary : 'transparent'};
  border: 0.06rem solid ${theme.brand.primary};
  border-radius: 1rem;
`;

const SwiperWrap = styled(Swiper)`
  padding: 2rem;
`;

const SwiperSlideWrap = styled(SwiperSlide)``;

// 이게 콘텐츠
const SliderContent = styled.div`
  height: 35rem;
  background-color: ${theme.brand.primary};

  border-radius: 1rem;
`;

const HomeShorts = () => {
  const [selected, setSelected] = useState('전체');

  const handleRadioChange = (value: string) => {
    setSelected(value);
  };

  return (
    <ShortsWrap>
      <ShortsTitle>
        <img src={starIcon} alt="icon" />
        지금 이 순간, 트립컴트루
      </ShortsTitle>

      <ShortsRadio>
        <Label htmlFor="all" checked={selected === '전체'}>
          <input
            id="all"
            type="radio"
            value="전체"
            checked={selected === '전체'}
            onChange={() => handleRadioChange('전체')}
            style={{ display: 'none' }}
          />
          전체
        </Label>
        <Label htmlFor="domestic" checked={selected === '국내'}>
          <input
            id="domestic"
            type="radio"
            value="국내"
            checked={selected === '국내'}
            onChange={() => handleRadioChange('국내')}
            style={{ display: 'none' }}
          />
          국내
        </Label>
        <Label htmlFor="overseas" checked={selected === '해외'}>
          <input
            id="overseas"
            type="radio"
            value="해외"
            checked={selected === '해외'}
            onChange={() => handleRadioChange('해외')}
            style={{ display: 'none' }}
          />
          해외
        </Label>
      </ShortsRadio>

      <SwiperWrap
        spaceBetween={18}
        slidesPerView={2.2}
        direction="horizontal"
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
        <SwiperSlideWrap>
          <SliderContent>slide 1</SliderContent>
        </SwiperSlideWrap>
        <SwiperSlideWrap>
          <SliderContent>slide 2</SliderContent>
        </SwiperSlideWrap>
        <SwiperSlideWrap>
          <SliderContent>slide 3</SliderContent>
        </SwiperSlideWrap>
        <SwiperSlideWrap>
          <SliderContent>slide 4</SliderContent>
        </SwiperSlideWrap>
      </SwiperWrap>
    </ShortsWrap>
  );
};

export default HomeShorts;
