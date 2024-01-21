import { Pagination } from 'swiper/modules';
import { Button, Text } from '@/components/common';
import { OnBoardingProps } from './OnBoarding.types';
import ONBOARD_ITEMS from '@/constants/Auth/onboard';
import * as Styled from './OnBoarding.styles';
import 'swiper/css';
import 'swiper/css/pagination';

function OnBoarding({ onCloseOnboarding }: OnBoardingProps) {
  return (
    <Styled.OnBoardWrap>
      <Styled.OnBoardSwiper
        modules={[Pagination]}
        pagination={{ clickable: true }}>
        {ONBOARD_ITEMS.map((item) => (
          <Styled.OnBoardSwiperSlide key={item.id}>
            <Styled.OnBoardTitle>
              <h2>
                <Text fontSize={24} fontWeight={400}>
                  {item.title1}
                </Text>
                <br />
                <Text fontSize={24} fontWeight={700}>
                  {item.title2}
                </Text>
              </h2>
            </Styled.OnBoardTitle>
            <img src={item.image} alt={item.id} />
          </Styled.OnBoardSwiperSlide>
        ))}
      </Styled.OnBoardSwiper>
      <Styled.OnBoardBtn>
        <Button
          size="lg"
          variants="primary"
          type="button"
          onClick={onCloseOnboarding}>
          지금 트립컴트루 시작하기
        </Button>
      </Styled.OnBoardBtn>
    </Styled.OnBoardWrap>
  );
}

export default OnBoarding;
