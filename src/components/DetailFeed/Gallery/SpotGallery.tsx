import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Bookmark, EmptyContents, SubTitle } from '@/components/common';
import * as Styled from './Gallery.styles';
import { getSpotGallery } from '@/apis/detailfeed';

const SpotGallery = ({
  placeId,
  placeName,
}: {
  placeId: string;
  placeName: string;
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ['spotGallery', placeId],
    queryFn: () => getSpotGallery(placeId),
  });
  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Data not available</p>;
  }

  const handleMoreClick = () => {
    navigate(`/detailfeed/spotgallerylist/${placeName}/${placeId}`);
  };

  return (
    <Styled.GellaryWrapper>
      <Styled.SubtitleBox>
        <SubTitle variant="more" onClickButton={handleMoreClick}>
          {placeName} 여행 갤러리
        </SubTitle>
      </Styled.SubtitleBox>
      {data.content.length === 0 ? (
        <EmptyContents />
      ) : (
        <Styled.GellaryItemBox
          spaceBetween={8}
          slidesPerView={2.15}
          scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
          {data.content.map(
            ({ tripRecordStoreCount, imageUrl, tripRecordId }) => (
              <Styled.GellaryItem
                key={tripRecordId}
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

export default SpotGallery;
