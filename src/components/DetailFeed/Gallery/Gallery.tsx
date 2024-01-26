import { useNavigate } from 'react-router-dom';
import { Bookmark, EmptyContents, SubTitle } from '@/components/common';
import * as Styled from './Gallery.styles';
import { useDetailFeedQuery } from '@/hooks/DetailFeed/useDetailFeedQuery';
import { GalleyProps } from './Gallery.types';

const Gallery = ({ id, galleryType, placeName }: GalleyProps) => {
  const queryKey = galleryType ? 'spotGallery' : 'cityGallery';
  const fnUrl = galleryType
    ? `/v1/trip-records-schedules?placeId=${id}&size=10&orderBy=storeCount`
    : `/v1/cities/${id}/images/list`;
  const { data, isLoading } = useDetailFeedQuery<GalleryResponseType>({
    queryKey,
    id,
    fnUrl,
  });
  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data || !data.data) {
    return <p>Data not available</p>;
  }

  const handleMoreClick = () => {
    if (galleryType) {
      navigate(`/detailfeed/spotgallerylist/${placeName}`, {
        state: { id, placeName },
      });
    } else {
      navigate(`/detailfeed/citygallerylist/${placeName}`, {
        state: { id, placeName },
      });
    }
  };

  return (
    <Styled.GellaryWrapper>
      <Styled.SubtitleBox>
        <SubTitle variant="more" onClickButton={handleMoreClick}>
          {placeName} 여행 갤러리
        </SubTitle>
      </Styled.SubtitleBox>
      {data.totalElements === 0 ? (
        <EmptyContents />
      ) : (
        <Styled.GellaryItemBox
          spaceBetween={8}
          slidesPerView={2.15}
          scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
          {data.data.content.map(
            ({ tripRecordStoreCount, imageUrl, tripRecordId }, index) => (
              <Styled.GellaryItem
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                onClick={() => navigate(`/trip/detail/${tripRecordId}`)}>
                <Styled.BookMarkBox>
                  <Bookmark count={tripRecordStoreCount} />
                </Styled.BookMarkBox>
                <img src={imageUrl} alt="방콕 사진" />
              </Styled.GellaryItem>
            ),
          )}
        </Styled.GellaryItemBox>
      )}
    </Styled.GellaryWrapper>
  );
};

export default Gallery;
