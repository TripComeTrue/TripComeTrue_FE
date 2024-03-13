import { useSuspenseQueries } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getSpotGallery, getSpotInformation } from '@/apis/detailfeed';
import { Bookmark, EmptyContents, SubTitle, Swiper } from '@/components/common';
import * as Styled from './Gallery.styles';

const SpotGallery = () => {
  const { id: placeId } = useParams() as { id: string };
  const navigate = useNavigate();

  const [{ data: spotGallery }, { data: spotName }] = useSuspenseQueries({
    queries: [
      {
        queryKey: ['spotGallery', placeId],
        queryFn: () => getSpotGallery(placeId),
      },
      {
        queryKey: ['cityInformation', placeId],
        queryFn: () => getSpotInformation(placeId),
        select: (data: { name: string }) => data.name,
      },
    ],
  });

  const handleMoreClick = () => {
    navigate(`/detailfeed/spotgallerylist/${spotName}/${placeId}`);
  };

  return (
    <Styled.GellaryWrapper>
      <Styled.SubtitleBox>
        <SubTitle variant="more" onClickButton={handleMoreClick}>
          {spotName} 여행 갤러리
        </SubTitle>
      </Styled.SubtitleBox>
      {spotGallery.content.length === 0 ? (
        <EmptyContents />
      ) : (
        <Swiper slidesPerView={2.15}>
          {spotGallery.content.map(
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
        </Swiper>
      )}
    </Styled.GellaryWrapper>
  );
};

export default SpotGallery;
