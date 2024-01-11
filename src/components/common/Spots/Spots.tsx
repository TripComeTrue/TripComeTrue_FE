import { PostData, SpotsProps } from './Spots.types';
import SpotsSwiper from './SpotsSwiper';
import * as Styled from './Spots.style';

const Spots: React.FC<SpotsProps & { sort?: 'left' | 'center' }> = ({
  creator,
  slidesPerView = 2.1,
  sort = 'center',
}) => (
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
          sort={sort}
        />
      </Styled.SwiperSlideWrap>
    ))}
  </Styled.SwiperWrap>
);

export default Spots;