import { useNavigate } from 'react-router-dom';
import pxToRem from '@/utils/pxToRem';
import TripCard from '../TripCard/TripCard';
import * as Styled from './TripCarousel.styles';
import 'swiper/swiper-bundle.css';
import { TripCarouselProps } from './TripCarousel.types';

const TripCarousel = ({ size = 144, tripRecordsData }: TripCarouselProps) => {
  const navigate = useNavigate();
  const stringifiedSize = pxToRem(size);

  const onClickMoveToDetail = (tripRecordId: number): void => {
    navigate(`/trip/detail/${tripRecordId}`);
    window.scroll(0, 0);
  };

  return (
    <Styled.Container spaceBetween={10} slidesPerView={2.3}>
      {tripRecordsData?.map((data) => (
        <Styled.Slide
          $size={stringifiedSize}
          key={data.tripRecordId}
          onClick={() => onClickMoveToDetail(data.tripRecordId)}>
          <TripCard size={size} tripRecordData={data} />
        </Styled.Slide>
      ))}
    </Styled.Container>
  );
};

export default TripCarousel;
