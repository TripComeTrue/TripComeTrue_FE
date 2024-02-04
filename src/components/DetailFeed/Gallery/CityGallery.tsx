import { useSuspenseQueries } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getCityGallery, getCityInformation } from '@/apis/detailfeed';
import { Bookmark, EmptyContents, SubTitle } from '@/components/common';
import * as Styled from './Gallery.styles';

const CityGallery = () => {
  const { cityId } = useParams() as { cityId: string };
  const [{ data: cityGalleryData }, { data: cityName }] = useSuspenseQueries({
    queries: [
      {
        queryKey: ['cityGallery', cityId],
        queryFn: () => getCityGallery(cityId),
      },
      {
        queryKey: ['cityInformation', cityId],
        queryFn: () => getCityInformation(cityId),
        select: (data: { name: string }) => data.name,
      },
    ],
  });

  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate(`/detailfeed/citygallerylist/${cityName}/${cityId}`);
  };
  return (
    <Styled.GellaryWrapper>
      <Styled.SubtitleBox>
        <SubTitle variant="more" onClickButton={handleMoreClick}>
          {cityName} 여행 갤러리
        </SubTitle>
      </Styled.SubtitleBox>
      {cityGalleryData.length === 0 ? (
        <EmptyContents />
      ) : (
        <Styled.GellaryItemBox
          spaceBetween={8}
          slidesPerView={2.15}
          scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
          {cityGalleryData.map(
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
