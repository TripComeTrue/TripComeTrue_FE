import { Bookmark, SubTitle, Text } from '@/components/common';
import * as Styled from './RecommendSpot.styles';
import { useDetailFeedQuery } from '@/hooks/DetailFeed/useDetailFeedQuery';
import messageIcon from '/message.svg';

const RecommendSpot = ({ id }: { id: number }) => {
  const { data, isLoading } = useDetailFeedQuery<RecommendSpotResponseType>({
    queryKey: 'recommendSpot',
    id,
    fnUrl: `/places/${id}/nearby`,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data || !data.data) {
    return <p>Data not available</p>;
  }

  return (
    <Styled.RecommendWrapper>
      <Styled.SubtitleBox>
        <SubTitle variant="more">근처 추천 여행지</SubTitle>
      </Styled.SubtitleBox>
      <Styled.RecommendItemBox
        spaceBetween={8}
        slidesPerView={2.1}
        scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
        {data.data.map(({ imageUrl, storedCount, placeName }) => (
          <Styled.RecommendItem key={placeName}>
            <Styled.BookMarkBox>
              <Bookmark count={storedCount} />
            </Styled.BookMarkBox>
            <img src={imageUrl} alt="장소 사진" />
            <Styled.ItemBottom>
              <Text fontWeight={700}>{placeName}</Text>
              <Styled.ReviewBox>
                <img src={messageIcon} alt="리뷰 아이콘" />
                <Text fontSize={10} color="gray">
                  10
                </Text>
              </Styled.ReviewBox>
            </Styled.ItemBottom>
          </Styled.RecommendItem>
        ))}
      </Styled.RecommendItemBox>
    </Styled.RecommendWrapper>
  );
};

export default RecommendSpot;
