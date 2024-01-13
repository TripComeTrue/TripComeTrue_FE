import { Pagination } from 'swiper/modules';
import * as Styled from './MainCarousel.styles';
import 'swiper/css';
import 'swiper/css/pagination';
import { Tag } from '@/components/common';

const MainCarousel = () => {
  return (
    <Styled.Container
      pagination={{ dynamicBullets: true }}
      modules={[Pagination]}>
      <Styled.Slide>
        <Styled.Image src="https://source.unsplash.com/random" />
      </Styled.Slide>
      <Styled.Slide>
        <Styled.Image src="https://source.unsplash.com/random" />
        <Styled.TagWrapper>
          <Tag fontSize={8} color="primary" bgColor="white" size="sm">
            메이빈 숙소 예약하기
          </Tag>
        </Styled.TagWrapper>
      </Styled.Slide>
      <Styled.Slide>
        <Styled.Image src="https://source.unsplash.com/random" />
      </Styled.Slide>
    </Styled.Container>
  );
};

export default MainCarousel;
