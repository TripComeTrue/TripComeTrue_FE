import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Bookmark, SubTitle, Text } from '@/components/common';
import * as Styled from './RecommendSpot.styles';
import messageIcon from '/message.svg';
import { getRecommedSpot } from '@/apis/detailfeed';

const RecommendSpot = ({ placeId }: { placeId: string }) => {
  const navigate = useNavigate();
  const { data: recommendSpots, isLoading } = useQuery({
    queryKey: ['recommendSpot', placeId],
    queryFn: () => getRecommedSpot(placeId),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!recommendSpots) {
    return <p>Data not available</p>;
  }

  const handlePlaceClick = (spotId: number) => {
    navigate(`/detailfeed/spot/${spotId}`);
  };

  return (
    <Styled.RecommendWrapper>
      <Styled.SubtitleBox>
        <SubTitle>근처 추천 여행지</SubTitle>
      </Styled.SubtitleBox>
      <Styled.RecommendItemBox
        spaceBetween={8}
        slidesPerView={2.1}
        scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
        {recommendSpots.map(
          // eslint-disable-next-line @typescript-eslint/no-shadow
          ({ reviewCount, imageUrl, storedCount, placeName, placeId }) => (
            <Styled.RecommendItem
              key={placeName}
              onClick={() => handlePlaceClick(placeId)}>
              <Styled.BookMarkBox>
                <Bookmark count={storedCount} />
              </Styled.BookMarkBox>
              <img src={imageUrl} alt="장소 사진" />
              <Styled.ItemBottom>
                <Text fontWeight={700}>{placeName}</Text>
                <Styled.ReviewBox>
                  <img src={messageIcon} alt="리뷰 아이콘" />
                  <Text fontSize={10} color="gray">
                    {reviewCount}
                  </Text>
                </Styled.ReviewBox>
              </Styled.ItemBottom>
            </Styled.RecommendItem>
          ),
        )}
      </Styled.RecommendItemBox>
    </Styled.RecommendWrapper>
  );
};

export default RecommendSpot;
