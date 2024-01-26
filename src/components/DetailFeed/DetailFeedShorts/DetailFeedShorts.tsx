import { useNavigate } from 'react-router-dom';
import { EmptyContents, SubTitle } from '@/components/common';
import { useDetailFeedQuery } from '@/hooks/DetailFeed/useDetailFeedQuery';
import * as Styled from './DetailFeedShorts.styles';
import starIcon from '/starIcon.svg';
import ShortCarousel from '@/components/Trip/TripHome/ShortCarousel/ShortCarousel';

const DetailFeedShorts = ({
  cityId,
  placeName,
}: {
  cityId: number;
  placeName: string;
}) => {
  const { data, isLoading } = useDetailFeedQuery<ShortsResponseType>({
    queryKey: 'shorts',
    id: cityId,
    fnUrl: `/cities/${cityId}/videos/list`,
  });
  const navigate = useNavigate();
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data || !data.data) {
    return null;
  }

  const handleMoreClick = () => {
    navigate(`/detailfeed/shortslist/${cityId}`, {
      state: {
        placeName,
        id: cityId,
      },
    });
  };

  const slideShorts = data.data;
  return (
    <Styled.DetailFeedShortsWrapper>
      <Styled.SubTitleBox>
        <SubTitle
          fontSize={18}
          icon={starIcon}
          variant="more"
          onClickButton={handleMoreClick}>
          {placeName} 여행 Shorts
        </SubTitle>
      </Styled.SubTitleBox>
      {slideShorts.length === 0 ? (
        <EmptyContents />
      ) : (
        <ShortCarousel shortsData={slideShorts} />
      )}
    </Styled.DetailFeedShortsWrapper>
  );
};

export default DetailFeedShorts;
