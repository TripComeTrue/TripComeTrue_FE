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
import { Slide, SlideShorts } from './HomeShorts.types';
import * as Styled from './HomeShorts.styles';
import { SubTitle } from '@/components/common';

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
    <Styled.ShortsWrap>
      <SubTitle
        margin="1rem"
        fontSize={18}
        icon={starIcon}
        variant={undefined}
        onClickButton={undefined}>
        지금 이 순간, 트립컴트루
      </SubTitle>

      <Styled.ShortsRadio>
        <Styled.Label htmlFor="all" checked={selected === '전체'}>
          <input
            id="all"
            type="radio"
            value="전체"
            checked={selected === '전체'}
            onChange={() => handleRadioChange('전체')}
            style={{ display: 'none' }}
          />
          전체
        </Styled.Label>
        <Styled.Label htmlFor="domesticShorts" checked={selected === '국내'}>
          <input
            id="domesticShorts"
            type="radio"
            value="국내"
            checked={selected === '국내'}
            onChange={() => handleRadioChange('국내')}
            style={{ display: 'none' }}
          />
          국내
        </Styled.Label>
        <Styled.Label htmlFor="overseasShorts" checked={selected === '해외'}>
          <input
            id="overseasShorts"
            type="radio"
            value="해외"
            checked={selected === '해외'}
            onChange={() => handleRadioChange('해외')}
            style={{ display: 'none' }}
          />
          해외
        </Styled.Label>
      </Styled.ShortsRadio>

      <Styled.SwiperWrap
        spaceBetween={8}
        slidesPerView={2.1}
        direction="horizontal"
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
        {filteredSlides.map((slide: Slide) => (
          <Styled.SwiperSlideWrap key={slide.img}>
            <Styled.SliderContent>
              <Styled.SliderBackground>
                <img src={slide.img} alt={slide.img} />
              </Styled.SliderBackground>
              <Styled.Bookmark>
                <img src={bookmarkIcon} alt="bookmark" />
                {slide.bookmark}
              </Styled.Bookmark>
              <Styled.ShortTitle>{slide.title}</Styled.ShortTitle>
            </Styled.SliderContent>
          </Styled.SwiperSlideWrap>
        ))}
      </Styled.SwiperWrap>
    </Styled.ShortsWrap>
  );
};

export default HomeShorts;
