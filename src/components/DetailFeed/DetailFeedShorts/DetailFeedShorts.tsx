import { EmptyContents, SubTitle } from '@/components/common';
import Shorts from '@/components/common/Shorts/Shorts';
import { useDetailFeedQuery } from '@/hooks/DetailFeed/useDetailFeedQuery';
import * as Styled from './DetailFeedShorts.styles';
import starIcon from '/starIcon.svg';

const DetailFeedShorts = ({ cityId = 5 }: { cityId: number }) => {
  const { data, isLoading } = useDetailFeedQuery<ShortsResponseType>({
    queryKey: 'shorts',
    id: cityId,
    fnUrl: `/cities/${cityId}/videos/list`,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data || !data.data) {
    return null;
  }

  const slideShorts = [...data.data];
  return (
    <Styled.DetailFeedShortsWrapper>
      <Styled.SubTitleBox>
        <SubTitle fontSize={18} icon={starIcon} variant="more">
          강릉 여행 Shorts
        </SubTitle>
      </Styled.SubTitleBox>
      {slideShorts.length === 0 ? (
        <EmptyContents />
      ) : (
        <Shorts slides={slideShorts} slidesPerView={2.1} />
      )}
    </Styled.DetailFeedShortsWrapper>
  );
};

export default DetailFeedShorts;
