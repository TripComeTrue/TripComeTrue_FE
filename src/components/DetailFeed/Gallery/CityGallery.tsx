import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Bookmark, EmptyContents, SubTitle } from '@/components/common';
import * as Styled from './Gallery.styles';
import { getCityGallery } from '@/apis/detailfeed';

const CityGallery = ({
  cityId,
  placeName,
}: {
  cityId: string;
  placeName: string;
}) => {
  const { data: CityGalleryData, isLoading } = useQuery({
    queryKey: ['cityGallery', cityId],
    queryFn: () => getCityGallery(cityId),
  });

  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!CityGalleryData) {
    return <p>Data not available</p>;
  }

  const handleMoreClick = () => {
    navigate(`/detailfeed/citygallerylist/${placeName}/${cityId}`);
  };
  return (
    <Styled.GellaryWrapper>
      <Styled.SubtitleBox>
        <SubTitle variant="more" onClickButton={handleMoreClick}>
          {placeName} 여행 갤러리
        </SubTitle>
      </Styled.SubtitleBox>
      {CityGalleryData.length === 0 ? (
        <EmptyContents />
      ) : (
        <Styled.GellaryItemBox
          spaceBetween={8}
          slidesPerView={2.15}
          scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
          {CityGalleryData.map(
            ({ tripRecordStoreCount, imageUrl, tripRecordId, imageId }) => (
              <Styled.GellaryItem
                key={imageId}
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

export default CityGallery;
