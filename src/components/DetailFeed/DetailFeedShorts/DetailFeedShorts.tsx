import { useNavigate, useParams } from 'react-router-dom';
import { useSuspenseQueries } from '@tanstack/react-query';
import { EmptyContents, Shorts, SubTitle } from '@/components/common';
import * as Styled from './DetailFeedShorts.styles';
import starIcon from '/starIcon.svg';
import { getCityInformation, getCityShorts } from '@/apis/detailfeed';

const DetailFeedShorts = () => {
  const { cityId } = useParams() as { cityId: string };

  const [{ data: shorts }, { data: cityName }] = useSuspenseQueries({
    queries: [
      { queryKey: ['shorts', cityId], queryFn: () => getCityShorts(cityId) },
      {
        queryKey: ['cityInformation', cityId],
        queryFn: () => getCityInformation(cityId),
        select: (data: { name: string }) => data.name,
      },
    ],
  });

  const navigate = useNavigate();

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
