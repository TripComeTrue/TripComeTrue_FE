import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { EmptyContents, Shorts, SubTitle } from '@/components/common';
import * as Styled from './DetailFeedShorts.styles';
import starIcon from '/starIcon.svg';
import { getCityShorts } from '@/apis/detailfeed';

const DetailFeedShorts = ({
  cityId,
  cityName,
}: {
  cityId: string;
  cityName: string;
}) => {
  const { data: shorts, isLoading } = useQuery({
    queryKey: ['shorts', cityId],
    queryFn: () => getCityShorts(cityId),
  });

  const navigate = useNavigate();
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!shorts) {
    return null;
  }

  const handleMoreClick = () => {
    navigate(`/detailfeed/shortslist/${cityName}/${cityId}`);
  };

  return (
    <Styled.DetailFeedShortsWrapper>
      <Styled.SubTitleBox>
        <SubTitle
          fontSize={18}
          icon={starIcon}
          variant="more"
          onClickButton={handleMoreClick}>
          {cityName} 여행 Shorts
        </SubTitle>
      </Styled.SubTitleBox>
      {shorts.length === 0 ? (
        <Styled.EmptyBox>
          <EmptyContents />
        </Styled.EmptyBox>
      ) : (
        <Shorts slides={shorts} />
      )}
    </Styled.DetailFeedShortsWrapper>
  );
};

export default DetailFeedShorts;
