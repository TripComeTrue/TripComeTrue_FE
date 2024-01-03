import { useEffect, useState } from 'react';
import starIcon from '/starIcon.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import bangkokImg from '/bangkok.png';
import tokyoImg from '/tokyo.png';
import jejuImg from '/domestic1.jpg';
import osakaImg from '/osaka.png';
import danagImg from '/danag.png';
import busanImg from '/busan.jpeg';
import jejuRImg from '/jeju.jpeg';
import styled from 'styled-components';
import theme from '@/styles/theme';

interface SlideHotItem {
  title: string;
  bookmark: number;
  subtitle: string;
  img: string;
  rate: number;
  username: string;
  userphoto: string;
  nights: string;
  postTitle: string;
}

interface SlideHots {
  [key: string]: SlideHotItem[];
}

interface LabelProps {
  checked: boolean;
}

const HotplaceWrap = styled.div`
  background-color: ${theme.brand.black};
  margin-bottom: 5rem;
`;

const HotplaceTitle = styled.div`
  position: relative;
  padding: 1.5rem 1rem 0;
  color: ${theme.brand.white};
  font-size: ${theme.fontSizes.lg};
  font-weight: ${theme.fontWeights.bold};
  margin-left: 1.8rem;

  img {
    position: absolute;
    top: 48%;
    margin-left: -1.7rem;
  }
`;

const PopularWrap = styled.div`
  margin: 1rem 1rem 0;
`;

const PlaceWrap = styled.div`
  margin: 0.7rem 1rem 0;
`;

export const Label = styled.label<LabelProps>`
  margin-right: 0.5rem;
  padding: 0.35rem 1rem;
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.bold};
  background-color: ${(props) =>
    props.checked ? theme.brand.primary : theme.brand.white};
  border-radius: 1rem;
`;

const HomeHotplace = () => {
  const [selectedOption, setSelectedOption] = useState({
    cityCategory: '인기도시',
    locationCategory: '국내',
  });

  const [selectedValue, setSelectedValue] = useState('hot1');

  const handleOptionChange = (category: string, value: string) => {
    setSelectedOption((prevOptions) => ({
      ...prevOptions,
      [category]: value,
    }));
  };

  const generateResultString = () => {
    const { cityCategory, locationCategory } = selectedOption;

    if (cityCategory === '인기도시' && locationCategory === '국내') {
      return 'hot1';
    }
    if (cityCategory === '인기도시' && locationCategory === '해외') {
      return 'hot2';
    }
    if (cityCategory === '인기여행후기' && locationCategory === '국내') {
      return 'hot3';
    }
    if (cityCategory === '인기여행후기' && locationCategory === '해외') {
      return 'hot4';
    }

    return '';
  };

  useEffect(() => {
    const resultString = generateResultString();
    setSelectedValue(resultString);
  }, [selectedOption]);

  const slideHots: SlideHots = {
    hot1: [
      {
        title: '제주',
        subtitle: 'Jeju',
        bookmark: 123,
        img: jejuImg,
        rate: 0,
        username: '',
        nights: '',
        userphoto: '',
        postTitle: '',
      },
      {
        title: '남양주',
        subtitle: 'Namyangju',
        bookmark: 213,
        img: jejuImg,
        rate: 0,
        username: '',
        nights: '',
        userphoto: '',
        postTitle: '',
      },
    ],
    hot2: [
      {
        title: '방콕',
        subtitle: 'Bangkok',
        bookmark: 123,
        img: bangkokImg,
        rate: 0,
        username: '',
        nights: '',
        userphoto: '',
        postTitle: '',
      },
      {
        title: '도쿄',
        subtitle: 'Tokyo',
        bookmark: 200,
        img: tokyoImg,
        rate: 0,
        username: '',
        nights: '',
        userphoto: '',
        postTitle: '',
      },
    ],
    hot3: [
      {
        title: '부산',
        subtitle: 'Busan',
        bookmark: 210,
        img: busanImg,
        rate: 4.8,
        username: '바닷가재',
        nights: '1박 2일',
        userphoto: busanImg,
        postTitle: '광안리 드론쇼',
      },
      {
        title: '제주',
        subtitle: 'Jeju',
        bookmark: 95,
        img: jejuRImg,
        rate: 4.6,
        username: '루피',
        nights: '2박 3일',
        userphoto: jejuRImg,
        postTitle: '돌고래 구경하는 법',
      },
    ],
    hot4: [
      {
        title: '오사카',
        subtitle: 'Osaka',
        bookmark: 122,
        img: osakaImg,
        rate: 4.9,
        username: '맥주덕후',
        nights: '2박 3일',
        userphoto: osakaImg,
        postTitle: '나만의 오사카 프라이빗 코스',
      },
      {
        title: '다낭',
        subtitle: 'Tokyo',
        bookmark: 88,
        img: danagImg,
        rate: 4.7,
        username: '여우처럼살고파',
        nights: '3박 4일',
        userphoto: danagImg,
        postTitle: '아무도 안 알려주는 현지 꿀팁',
      },
    ],
  };

  const filteredSlides = slideHots[selectedValue];

  return (
    <HotplaceWrap>
      <HotplaceTitle>
        <img src={starIcon} alt="icon" />
        지금 뜨는 핫플레이스 TOP5
      </HotplaceTitle>

      <PopularWrap>
        <Label
          htmlFor="city"
          checked={selectedOption.cityCategory === '인기도시'}>
          <input
            id="city"
            type="radio"
            name="cityCategory"
            value="인기도시"
            checked={selectedOption.cityCategory === '인기도시'}
            onChange={() => handleOptionChange('cityCategory', '인기도시')}
            style={{ display: 'none' }}
          />
          인기 도시
        </Label>
        <Label
          htmlFor="review"
          checked={selectedOption.cityCategory === '인기여행후기'}>
          <input
            id="review"
            type="radio"
            name="cityCategory"
            value="인기여행후기"
            checked={selectedOption.cityCategory === '인기여행후기'}
            onChange={() => handleOptionChange('cityCategory', '인기여행후기')}
            style={{ display: 'none' }}
          />
          인기 여행 후기
        </Label>
      </PopularWrap>

      <PlaceWrap>
        <Label
          htmlFor="domesticHot"
          checked={selectedOption.locationCategory === '국내'}>
          <input
            id="domesticHot"
            type="radio"
            name="locationCategory"
            value="국내"
            checked={selectedOption.locationCategory === '국내'}
            onChange={() => handleOptionChange('locationCategory', '국내')}
            style={{ display: 'none' }}
          />
          국내
        </Label>
        <Label
          htmlFor="overseasHot"
          checked={selectedOption.locationCategory === '해외'}>
          <input
            id="overseasHot"
            type="radio"
            name="locationCategory"
            value="해외"
            checked={selectedOption.locationCategory === '해외'}
            onChange={() => handleOptionChange('locationCategory', '해외')}
            style={{ display: 'none' }}
          />
          해외
        </Label>
      </PlaceWrap>

      <Swiper
        spaceBetween={8}
        slidesPerView={1.7}
        direction="horizontal"
        pagination={{ clickable: true }}
        scrollbar={{
          draggable: true,
          el: '.swiper-scrollbar',
          hide: false,
        }}>
        {selectedValue === 'hot1' || selectedValue === 'hot2'
          ? filteredSlides.map((item: SlideHotItem) => (
              <SwiperSlide key={item.title}>
                <div>{item.title}</div>
              </SwiperSlide>
            ))
          : selectedValue === 'hot3' || selectedValue === 'hot4'
            ? filteredSlides.map((item: SlideHotItem) => (
                <SwiperSlide key={item.title}>
                  <div>{item.title}</div>
                </SwiperSlide>
              ))
            : null}
      </Swiper>
    </HotplaceWrap>
  );
};

export default HomeHotplace;
