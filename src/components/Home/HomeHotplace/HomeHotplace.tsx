import { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import starIcon from '/starIcon.svg';
import bookmarkPress from '/bookmarkPress.svg';
import starFillIcon from '/starFill.svg';
import { IoIosArrowForward } from 'react-icons/io';
import * as Styled from './HomeHotplace.styles';

// 임시 이미지
import bangkokImg from '/bangkok.png';
import tokyoImg from '/tokyo.png';
import jejuImg from '/domestic1.jpg';
import namyangjuImg from '/domestic3.jpg';
import osakaImg from '/osaka.png';
import danagImg from '/danag.png';
import busanImg from '/busan.jpeg';
import jejuRImg from '/jeju.jpeg';
import { SlideHotItem, SlideHots } from './HomeHotplace.types';
import { SubTitle, Text } from '@/components/common';

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
        bookmark: 173,
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
        postTitle: '나만의 프라이빗 코스',
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
        postTitle: '현지 꿀팁',
      },
    ],
  };

  const filteredSlides = slideHots[selectedValue];

  return (
    <>
      <Styled.HotplaceWrap>
        <SubTitle margin="1rem" fontSize={18} icon={starIcon}>
          <Text fontSize={18} fontWeight={600} color="white">
            지금 뜨는 핫플레이스 TOP5
          </Text>
        </SubTitle>

        <Styled.PopularWrap>
          <Styled.Label
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
          </Styled.Label>
          <Styled.Label
            htmlFor="review"
            checked={selectedOption.cityCategory === '인기여행후기'}>
            <input
              id="review"
              type="radio"
              name="cityCategory"
              value="인기여행후기"
              checked={selectedOption.cityCategory === '인기여행후기'}
              onChange={() =>
                handleOptionChange('cityCategory', '인기여행후기')
              }
              style={{ display: 'none' }}
            />
            인기 여행 후기
          </Styled.Label>
        </Styled.PopularWrap>

        <Styled.PlaceWrap>
          <Styled.Label
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
          </Styled.Label>
          <Styled.Label
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
          </Styled.Label>
        </Styled.PlaceWrap>

        <Styled.SliderWrap
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
                  <Styled.HotplaceCityWrap>
                    <Styled.HotplaceCityImg>
                      <img src={item.img} alt="img" />
                      <Styled.Gradient> </Styled.Gradient>
                    </Styled.HotplaceCityImg>
                    <Styled.HotplaceCityBookmark>
                      <img src={bookmarkPress} alt="bookmarkPress" />
                      {item.bookmark}
                    </Styled.HotplaceCityBookmark>
                    <Styled.HotplaceCityTag>
                      <Styled.HotplaceCityTitle>
                        {item.title}
                      </Styled.HotplaceCityTitle>
                      <Styled.HotplaceCitySubtitle>
                        {item.subtitle}
                      </Styled.HotplaceCitySubtitle>
                    </Styled.HotplaceCityTag>
                  </Styled.HotplaceCityWrap>
                </SwiperSlide>
              ))
            : selectedValue === 'hot3' || selectedValue === 'hot4'
              ? filteredSlides.map((item: SlideHotItem) => (
                  <SwiperSlide key={item.title}>
                    <Styled.HotplaceReviewWrap>
                      <Styled.HotplaceImg>
                        <img src={item.img} alt="img" />
                        <Styled.GradientReview> </Styled.GradientReview>
                      </Styled.HotplaceImg>
                      <Styled.HotplaceBookmark>
                        <img src={bookmarkPress} alt="bookmarkPress" />
                        {item.bookmark}
                      </Styled.HotplaceBookmark>

                      <Styled.HotplaceDesWrap>
                        <Styled.DesNightPlace>
                          <div>
                            {item.nights} ・ {item.title}
                          </div>
                          <p>{item.postTitle}</p>
                        </Styled.DesNightPlace>

                        <Styled.DesRate>
                          <img src={starFillIcon} alt="bookmark" />
                          {item.rate}
                        </Styled.DesRate>
                        <Styled.UserInfo>
                          <img src={item.userphoto} alt="user" />
                          {item.username}
                        </Styled.UserInfo>
                      </Styled.HotplaceDesWrap>
                    </Styled.HotplaceReviewWrap>
                  </SwiperSlide>
                ))
              : null}
        </Styled.SliderWrap>
      </Styled.HotplaceWrap>
      <Styled.GoAllCity>
        <div>전체 도시 보러가기</div>
        <IoIosArrowForward style={{ fontSize: 25 }} />
      </Styled.GoAllCity>
    </>
  );
};

export default HomeHotplace;
