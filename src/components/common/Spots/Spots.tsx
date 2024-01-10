import { PostData, SpotsProps } from './Spots.types';
import SpotsSwiper from './SpotsSwiper';
import * as Styled from './Spots.style';

const Spots: React.FC<SpotsProps> = ({ creator, slidesPerView = 2.1 }) => (
  <Styled.SwiperWrap
    spaceBetween={8}
    slidesPerView={slidesPerView}
    direction="horizontal"
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
    {creator.map((item: PostData) => (
      <Styled.SwiperSlideWrap key={item.postTitle}>
        <SpotsSwiper
          postImg={item.postImg}
          postTitle={item.postTitle}
          bookmark={item.bookmark}
        />
      </Styled.SwiperSlideWrap>
    ))}
  </Styled.SwiperWrap>
);

export default Spots;
