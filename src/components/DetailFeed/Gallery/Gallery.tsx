import { SubTitle } from '@/components/common';
import * as Styled from './Gallery.styles';
import bankok from '/bangkok.png';

const GELLARY_DATA = [
  { id: 1, img: bankok },
  { id: 2, img: bankok },
  { id: 3, img: bankok },
  { id: 4, img: bankok },
];

const Gallery = () => {
  return (
    <Styled.GellaryWrapper>
      <SubTitle variant="more">방콕 여행 갤러리</SubTitle>
      <Styled.GellaryItemBox
        spaceBetween={70}
        slidesPerView={2.6}
        scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
        {GELLARY_DATA.map((item) => (
          <Styled.GellaryItem key={item.id}>
            <img src={item.img} alt="방콕 사진" />
          </Styled.GellaryItem>
        ))}
      </Styled.GellaryItemBox>
    </Styled.GellaryWrapper>
  );
};

export default Gallery;
