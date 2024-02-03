import { Pagination } from 'swiper/modules';
import * as Styled from './MainCarousel.styles';
import 'swiper/css';
import 'swiper/css/pagination';
import { MainCarouselProps } from './MainCarousel.types';

const MainCarousel = ({ imagesData }: MainCarouselProps) => {
  return (
    <Styled.Container
      pagination={{ dynamicBullets: true }}
      modules={[Pagination]}>
      {imagesData.map((data) => (
        <Styled.Slide key={data.id}>
          <Styled.Image src={data.imageUrl} />
        </Styled.Slide>
      ))}
    </Styled.Container>
  );
};

export default MainCarousel;
