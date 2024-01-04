import { useEffect, useState } from 'react';
import starIcon from '/starIcon.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import bangkokImg from '/bangkok.png';
import tokyoImg from '/tokyo.png';
import jejuImg from '/domestic1.jpg';
import namyangjuImg from '/domestic3.jpg';
import osakaImg from '/osaka.png';
import danagImg from '/danag.png';
import busanImg from '/busan.jpeg';
import jejuRImg from '/jeju.jpeg';
import styled from 'styled-components';
import theme from '@/styles/theme';
import bookmarkPress from '/bookmarkPress.svg';

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
  background-color: #1e1e1e;
  padding-bottom: 2rem;
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

const Label = styled.label<LabelProps>`
  margin-right: 0.5rem;
  padding: 0.35rem 1rem;
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.bold};
  background-color: ${(props) =>
    props.checked ? theme.brand.primary : theme.brand.white};
  border-radius: 1rem;
`;

const SliderWrap = styled(Swiper)`
  margin: 1rem 1rem 0;
`;

const HotplaceCityWrap = styled.div`
  position: relative;

  background: transparent;

  aspect-ratio: 1;
`;

const HotplaceCityImg = styled.div`
  position: relative;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    aspect-ratio: 1;
  }
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
`;

const HotplaceCityBookmark = styled.div`
  position: absolute;
  top: 0.7rem;
  left: 1.8rem;
  font-size: ${theme.fontSizes.xs};
  color: ${theme.brand.white};

  img {
    position: absolute;
    top: 0.1rem;
    left: -1.2rem;
    width: 1.1rem;
  }
`;

const HotplaceCityTag = styled.div`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translate(-50%, 0);

  text-align: center;
  color: ${theme.brand.white};
`;

const HotplaceCityTitle = styled.div`
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.semiBold};
  line-height: 0.7;
`;

const HotplaceCitySubtitle = styled.div`
  font-family: 'Mundial-Demibold', 'SF-Pro', sans-serif;
  font-size: ${theme.fontSizes.xxl};
  font-weight: ${theme.fontWeights.bold};
  text-transform: uppercase;
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
        img: namyangjuImg,
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

      <SliderWrap
        spaceBetween={8}
        slidesPerView={1.63}
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
                <HotplaceCityWrap>
                  <HotplaceCityImg>
                    <img src={item.img} alt="img" />
                    <Gradient> </Gradient>
                  </HotplaceCityImg>
                  <HotplaceCityBookmark>
                    <img src={bookmarkPress} alt="bookmarkPress" />
                    {item.bookmark}
                  </HotplaceCityBookmark>
                  <HotplaceCityTag>
                    <HotplaceCityTitle>{item.title}</HotplaceCityTitle>
                    <HotplaceCitySubtitle>{item.subtitle}</HotplaceCitySubtitle>
                  </HotplaceCityTag>
                </HotplaceCityWrap>
              </SwiperSlide>
            ))
          : selectedValue === 'hot3' || selectedValue === 'hot4'
            ? filteredSlides.map((item: SlideHotItem) => (
                <SwiperSlide key={item.title}>
                  <div>{item.title}</div>
                </SwiperSlide>
              ))
            : null}
      </SliderWrap>
    </HotplaceWrap>
  );
};

export default HomeHotplace;
