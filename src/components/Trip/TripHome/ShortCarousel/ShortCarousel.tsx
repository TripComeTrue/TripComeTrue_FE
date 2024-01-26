// TODO: 삭제할 예정
/* eslint-disable react/no-array-index-key */
import ShortCard from '../ShortCard/ShortCard';
import * as Styled from './ShortCarousel.styles';
import 'swiper/swiper-bundle.css';

const ShortCarousel = ({ shortsData }: { shortsData: ShortsDataType[] }) => {
  return (
    <Styled.Container spaceBetween={8} slidesPerView={2.3}>
      {shortsData.map((shorts) => (
        <Styled.Slide key={shorts.videoId}>
          <ShortCard shortData={shorts} />
        </Styled.Slide>
      ))}
    </Styled.Container>
  );
};

export default ShortCarousel;
