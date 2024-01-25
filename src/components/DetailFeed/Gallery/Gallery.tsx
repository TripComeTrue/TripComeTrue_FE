import { Bookmark, EmptyContents, SubTitle } from '@/components/common';
import * as Styled from './Gallery.styles';
import { useDetailFeedQuery } from '@/hooks/DetailFeed/useDetailFeedQuery';

const Gallery = ({ id, galleryType }: { id: number; galleryType?: 'spot' }) => {
  const queryKey = galleryType ? 'spotGallery' : 'cityGallery';
  const fnUrl = galleryType
    ? `/trip-records-schedules?placeId=${id}&size=5`
    : `/cities/${id}/images/list`;
  const { data, isLoading } = useDetailFeedQuery<GalleryResponseType>({
    queryKey,
    id,
    fnUrl,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data || !data.data) {
    return <p>Data not available</p>;
  }

  return (
    <Styled.GellaryWrapper>
      <Styled.SubtitleBox>
        <SubTitle variant="more">방콕 여행 갤러리</SubTitle>
      </Styled.SubtitleBox>
      {data.data.length === 0 ? (
        <EmptyContents />
      ) : (
        <Styled.GellaryItemBox
          spaceBetween={8}
          slidesPerView={2.2}
          scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
          {data.data.map(({ TripRecordStoreNum, imageUrl, tripRecordId }) => (
            <Styled.GellaryItem key={tripRecordId}>
              <Styled.BookMarkBox>
                <Bookmark count={TripRecordStoreNum} />
              </Styled.BookMarkBox>
              <img src={imageUrl} alt="방콕 사진" />
            </Styled.GellaryItem>
          ))}
        </Styled.GellaryItemBox>
      )}
    </Styled.GellaryWrapper>
  );
};

export default Gallery;
