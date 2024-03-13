import { ReactNode } from 'react';
import * as Styled from './Swiper.styles';

const Swiper = ({
  children,
  slidesPerView,
}: {
  children: ReactNode;
  slidesPerView: number;
}) => {
  return (
    <Styled.SwiperBox
      spaceBetween={8}
      slidesPerView={slidesPerView}
      scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
      {children}
    </Styled.SwiperBox>
  );
};

export default Swiper;
