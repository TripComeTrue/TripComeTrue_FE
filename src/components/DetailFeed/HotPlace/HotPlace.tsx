import { useNavigate } from 'react-router-dom';
import { Bookmark, SubTitle, Text } from '@/components/common';
import { useDetailFeedQuery } from '@/hooks/DetailFeed/useDetailFeedQuery';
import * as Styled from './HotPlace.styles';
import messageIcon from '/message.svg';
import starIcon from '/starIcon.svg';

const HotPlace = ({
  cityId,
  cityName,
}: {
  cityId: number;
  cityName: string;
}) => {
  const navigate = useNavigate();
  const { data, isLoading } = useDetailFeedQuery<HotPlaceResponseType>({
    queryKey: 'hotPlace',
    id: cityId,
    fnUrl: `/v1/cities/${cityId}/hot-places`,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data || !data.data) {
    return <p>Data not available</p>;
  }

  const handlePlaceClick = ({
    placeId,
    placeName,
  }: {
    placeId: number;
    placeName: string;
  }) => {
    navigate(`/detailfeed/spot/${placeId}`, { state: { placeId, placeName } });
  };

  const handleMoreClick = () => {
    navigate(`/detailfeed/spotlist/${cityId}`, {
      state: { placeName: cityName, id: cityId },
    });
  };

  return (
    <div>
      <Styled.SubTitleBox>
        <SubTitle
          fontSize={18}
          variant="more"
          icon={starIcon}
          onClickButton={handleMoreClick}>
          요즘 뜨는 핫플
        </SubTitle>
      </Styled.SubTitleBox>
      <Styled.PlaceBox
        spaceBetween={8}
        slidesPerView={2.1}
        scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
        {data.data.map(
          (
            { imageUrl, storedCount, placeName, placeId, commentTotal },
            index,
          ) => (
            <Styled.PlaceItem
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              onClick={() => handlePlaceClick({ placeId, placeName })}>
              <Styled.BookMarkBox>
                <Bookmark count={storedCount} />
              </Styled.BookMarkBox>
              <img src={imageUrl} alt="장소 사진" />
              <Styled.ItemBottom>
                <Text fontWeight={700}>{placeName}</Text>
                <Styled.ReviewBox>
                  <img src={messageIcon} alt="리뷰 아이콘" />
                  <Text fontSize={10} color="gray">
                    {commentTotal}
                  </Text>
                </Styled.ReviewBox>
              </Styled.ItemBottom>
            </Styled.PlaceItem>
          ),
        )}
      </Styled.PlaceBox>
    </div>
  );
};

export default HotPlace;
