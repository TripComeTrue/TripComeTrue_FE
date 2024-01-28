import { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import starIcon from '/starIcon.svg';
import bookmarkPress from '/bookmarkPress.svg';
import starFillIcon from '/starFill.svg';
import { IoIosArrowForward } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import * as Styled from './HomeHotplace.styles';

import { SlideHotCity, SlideHotReview } from './HomeHotplace.types';
import { SubTitle, Text } from '@/components/common';
import { HomeTopCity, HomeTopReview } from '@/apis/home';

const HomeHotplace = () => {
  const [selectedOption, setSelectedOption] = useState({
    cityCategory: '인기도시',
    locationCategory: 'domestic',
  });
  const [hotData, setHotData] = useState([]);
  const [selected, setSelected] = useState('city');
  const navigate = useNavigate();

  const handleOptionChange = (category: string, value: string) => {
    setSelectedOption((prevOptions) => ({
      ...prevOptions,
      [category]: value,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { cityCategory, locationCategory } = selectedOption;

        if (cityCategory === '인기도시') {
          const data = await HomeTopCity(locationCategory);
          setHotData(data);
          setSelected('city');
        } else if (cityCategory === '인기여행후기') {
          const data = await HomeTopReview(locationCategory);
          setHotData(data);
          setSelected('review');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    return () => {
      setHotData([]);
    };
  }, [selectedOption]);

  const generateCityString = (cityNames: string[]): string => {
    if (cityNames.length > 1) {
      const firstCity = cityNames[0];
      const remainingCitiesCount = cityNames.length - 1;
      return `${firstCity} 외 ${remainingCitiesCount}곳`;
    }

    if (cityNames.length === 1) {
      return cityNames[0];
    }

    return '';
  };

  const generateStay = (totalDays: number | string): string => {
    const nights =
      typeof totalDays === 'string'
        ? parseInt(totalDays, 10) - 1
        : totalDays - 1;
    return `${nights}박 ${totalDays}일`;
  };

  const truncateTitle = (title: string): string => {
    return title.length > 10 ? `${title.slice(0, 10)}...` : title;
  };

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
            checked={selectedOption.locationCategory === 'domestic'}>
            <input
              id="domesticHot"
              type="radio"
              name="locationCategory"
              value="domestic"
              checked={selectedOption.locationCategory === 'domestic'}
              onChange={() =>
                handleOptionChange('locationCategory', 'domestic')
              }
              style={{ display: 'none' }}
            />
            국내
          </Styled.Label>
          <Styled.Label
            htmlFor="overseasHot"
            checked={selectedOption.locationCategory === 'overseas'}>
            <input
              id="overseasHot"
              type="radio"
              name="locationCategory"
              value="overseas"
              checked={selectedOption.locationCategory === 'overseas'}
              onChange={() =>
                handleOptionChange('locationCategory', 'overseas')
              }
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
          {selected === 'city'
            ? hotData.map((item: SlideHotCity, index) => (
                <SwiperSlide key={`${item.cityName} ${index}`}>
                  <Styled.HotplaceCityWrap
                    onClick={() =>
                      navigate(`/detailfeed/city/${item.cityId}`, {
                        state: { cityId: item.cityId, name: item.cityName },
                      })
                    }>
                    <Styled.HotplaceCityImg>
                      <img src={item.imageUrl} alt="img" />
                      <Styled.Gradient> </Styled.Gradient>
                    </Styled.HotplaceCityImg>
                    <Styled.HotplaceCityBookmark>
                      <img src={bookmarkPress} alt="bookmarkPress" />
                      {item.storedCount}
                    </Styled.HotplaceCityBookmark>
                    <Styled.HotplaceCityTag>
                      <Styled.HotplaceCityTitle>
                        {item.cityName}
                      </Styled.HotplaceCityTitle>
                      <Styled.HotplaceCitySubtitle>
                        {item.cityName}
                      </Styled.HotplaceCitySubtitle>
                    </Styled.HotplaceCityTag>
                  </Styled.HotplaceCityWrap>
                </SwiperSlide>
              ))
            : selected === 'review'
              ? hotData.map((item: SlideHotReview, index) => (
                  <SwiperSlide key={`${item.tripRecordTitle} ${index}`}>
                    <Styled.HotplaceReviewWrap
                      onClick={() =>
                        navigate(`/trip/detail/${item.tripRecordId}`)
                      }>
                      <Styled.HotplaceImg>
                        <img src={item.imageUrl} alt="img" />
                        <Styled.GradientReview> </Styled.GradientReview>
                      </Styled.HotplaceImg>
                      <Styled.HotplaceBookmark>
                        <img src={bookmarkPress} alt="bookmarkPress" />
                        {item.storedCount}
                      </Styled.HotplaceBookmark>

                      <Styled.HotplaceDesWrap>
                        <Styled.DesNightPlace>
                          <div>
                            {generateStay(item.totalDays)} ・{' '}
                            {generateCityString(item.cityNames)}
                          </div>
                          <p>{truncateTitle(item.tripRecordTitle)}</p>
                        </Styled.DesNightPlace>

                        <Styled.DesRate>
                          <img src={starFillIcon} alt="Icon" />
                          {item.averageRating}
                        </Styled.DesRate>
                        <Styled.UserInfo>
                          <img src={item.profileImageUrl} alt="user" />
                          {item.memberName}
                        </Styled.UserInfo>
                      </Styled.HotplaceDesWrap>
                    </Styled.HotplaceReviewWrap>
                  </SwiperSlide>
                ))
              : null}
        </Styled.SliderWrap>
      </Styled.HotplaceWrap>
      <Link to="/citylist">
        <Styled.GoAllCity>
          <div>전체 도시 보러가기</div>
          <IoIosArrowForward style={{ fontSize: 25 }} />
        </Styled.GoAllCity>
      </Link>
    </>
  );
};

export default HomeHotplace;
