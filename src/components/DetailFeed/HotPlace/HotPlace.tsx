import { getCityHotPlace, getCityInformation } from '@/apis/detailfeed';
import { Bookmark, SubTitle, Text } from '@/components/common';
import { useSuspenseQueries } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import * as Styled from './HotPlace.styles';
import messageIcon from '/message.svg';
import starIcon from '/starIcon.svg';

const HotPlace = () => {
  const { id: cityId } = useParams() as { id: string };
  const navigate = useNavigate();
  const [{ data: cityHotPlace }, { data: cityName }] = useSuspenseQueries({
    queries: [
      {
        queryKey: ['hotPlace', cityId],
        queryFn: () => getCityHotPlace(cityId),
      },
      {
        queryKey: ['cityInformation', cityId],
        queryFn: () => getCityInformation(cityId),
        select: (data: { name: string }) => data.name,
      },
    ],
  });

  const handlePlaceClick = ({ placeId }: { placeId: number }) => {
    navigate(`/detailfeed/spot/${placeId}`);
  };

  const handleMoreClick = () => {
    navigate(`/detailfeed/spotlist/${cityName}/${cityId}`);
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
        {cityHotPlace.map(
          ({ imageUrl, storedCount, placeName, placeId, commentTotal }) => (
            <Styled.PlaceItem
              key={placeId}
              onClick={() => handlePlaceClick({ placeId })}>
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
