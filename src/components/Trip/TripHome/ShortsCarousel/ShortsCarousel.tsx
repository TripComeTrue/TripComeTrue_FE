import { useNavigate } from 'react-router-dom';
import ShortCard from '../ShortCard/ShortCard';
import * as Styled from './ShortsCarousel.styles';
import 'swiper/swiper-bundle.css';
import { ShortsCarouselProps } from './ShortsCarousel.types';

const ShortsCarousel = ({ shortsData }: ShortsCarouselProps) => {
  const navigate = useNavigate();

  const onClickMoveToDetail = (tripRecordId: number): void => {
    navigate(`/trip/detail/${tripRecordId}`);
    window.scroll(0, 0);
  };

  return (
    <Styled.Container spaceBetween={8} slidesPerView={2.3}>
      {shortsData?.map((shortData) => (
        <Styled.Slide
          key={shortData.videoId}
          onClick={() => onClickMoveToDetail(shortData.tripRecordId)}>
          <ShortCard shortData={shortData} />
        </Styled.Slide>
      ))}
    </Styled.Container>
  );
};

export default ShortsCarousel;
