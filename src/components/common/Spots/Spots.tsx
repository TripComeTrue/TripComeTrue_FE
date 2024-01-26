import { PostData, SpotsProps, SpotsWishListProps } from './Spots.types';
import SpotsSwiper from './SpotsSwiper';
import * as Styled from './Spots.style';

/**
 * 쇼츠 공통 컴포넌트입니다.
 * @param creator Swiper에 들어가야하는 제목(postTitle: string), 대표 이미지(postImg: string), 북마크(number), 리뷰(number) 등이 들어있는 배열입니다.
 * @param slidesPerView number : 한 화면에 출력되는 slide 갯수입니다.
 * @param sort string: center 이나 left 둘 중 하나만 입력 가능합니다.
 * @param fontSize number: font Size를 지정할 수 있습니다.
 */

// creator 배열에 리뷰 정보도 있으면 sort='space' 하시면 됩니다 ts파일 참고해주세요!

const Spots: React.FC<
  SpotsProps & { sort?: 'left' | 'center' | 'space' } & SpotsWishListProps
> = ({
  creator,
  slidesPerView = 2.1,
  sort = 'center',
  fontSize = 14,
  isDelete,
  onDelete,
}) => (
  <Styled.SwiperWrap
    spaceBetween={8}
    slidesPerView={slidesPerView}
    direction="horizontal"
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
    {creator.map((item: PostData) => (
      <Styled.SwiperSlideWrap key={item.tripRecordTitle}>
        <SpotsSwiper
          imageUrl={item.imageUrl}
          tripRecordTitle={item.tripRecordTitle}
          storedCount={item.storedCount}
          reviews={item?.reviews}
          sort={sort}
          fontSize={fontSize}
          id={item.id}
          isDelete={isDelete}
          onDelete={onDelete}
        />
      </Styled.SwiperSlideWrap>
    ))}
  </Styled.SwiperWrap>
);

export default Spots;
