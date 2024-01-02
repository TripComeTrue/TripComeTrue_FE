import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import theme from '@/styles/theme';
import 'swiper/swiper-bundle.css';
import { useState } from 'react';
import starIcon from '/starIcon.svg';
import domestic1 from '/domestic1.jpg';
import domestic2 from '/domestic2.jpg';
import domestic3 from '/domestic3.jpg';
import overseas1 from '/overseas1.jpg';
import overseas2 from '/overseas2.jpg';
import overseas3 from '/overseas3.jpg';
import bookmarkIcon from '/bookmarkPress.svg';

interface LabelProps {
  checked: boolean;
}

type Slide = {
  img: string;
  title: string;
  bookmark: number;
};

type SlideShorts = {
  [key: string]: Slide[];
};

const ShortsWrap = styled.div`
  margin-top: 4rem;
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
  padding: 1.5rem 4rem 0;
`;

const SwiperSlideWrap = styled(SwiperSlide)``;

// 이게 콘텐츠
const SliderContent = styled.div`
  position: relative;
  height: 35rem;

  border-radius: 1rem;
`;

const SliderBackground = styled.div`
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 1rem;
  }
`;

const Bookmark = styled.div`
  margin-left: 3.3rem;
  position: absolute;
  top: 1rem;

  font-size: ${theme.fontSizes.md};
  color: ${theme.brand.white};

  img {
    position: absolute;
    left: -2.1rem;
    width: 1.7rem;
  }
`;

const ShortTitle = styled.div`
  padding-left: 1rem;
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 4rem;

  border-radius: 0 0 1rem 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${theme.brand.white};
`;

const HomeShorts = () => {
  const [selected, setSelected] = useState('전체');

  const handleRadioChange = (value: string) => {
    setSelected(value);
  };

  // 임시 데이터
  const slideShorts: SlideShorts = {
    전체: [
      { img: domestic1, title: '해외같은 제주 풀빌라', bookmark: 234 },
      { img: overseas1, title: '스페인의 길거리', bookmark: 125 },
      { img: domestic2, title: '서울 이색 데이트 추천!', bookmark: 88 },
      { img: overseas2, title: '디즈니 성 몽생미셸', bookmark: 632 },
      { img: domestic3, title: '추운 겨울의 글램핑', bookmark: 231 },
      { img: overseas3, title: '일본 온천 여행', bookmark: 115 },
    ],
    국내: [
      { img: domestic1, title: '해외같은 제주 풀빌라', bookmark: 234 },
      { img: domestic2, title: '서울 이색 데이트 추천!', bookmark: 88 },
      { img: domestic3, title: '추운 겨울의 글램핑', bookmark: 231 },
    ],
    해외: [
      { img: overseas1, title: '스페인의 길거리', bookmark: 125 },
      { img: overseas2, title: '디즈니 성 몽생미셸', bookmark: 632 },
      { img: overseas3, title: '일본 온천 여행', bookmark: 115 },
    ],
  };

  const filteredSlides = slideShorts[selected];

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
        slidesPerView={2.1}
        direction="horizontal"
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
        {filteredSlides.map((slide: Slide) => (
          <SwiperSlideWrap key={slide.img}>
            <SliderContent>
              <SliderBackground>
                <img src={slide.img} alt={slide.img} />
              </SliderBackground>
              <Bookmark>
                <img src={bookmarkIcon} alt="bookmark" />
                {slide.bookmark}
              </Bookmark>
              <ShortTitle>{slide.title}</ShortTitle>
            </SliderContent>
          </SwiperSlideWrap>
        ))}
      </SwiperWrap>
    </ShortsWrap>
  );
};

export default HomeShorts;
