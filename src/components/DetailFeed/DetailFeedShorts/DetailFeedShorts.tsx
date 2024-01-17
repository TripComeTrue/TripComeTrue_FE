import * as Styled from './DetailFeedShorts.styles';
import { SubTitle } from '@/components/common';
import starIcon from '/starIcon.svg';
import Shorts from '@/components/common/Shorts/Shorts';
import { slideShorts } from '@/constants/DetailFeed/City';

const DetailFeedShorts = () => {
  return (
    <Styled.DetailFeedShortsWrapper>
      <Styled.SubTitleBox>
        <SubTitle fontSize={18} icon={starIcon} variant="more">
          강릉 여행 Shorts
        </SubTitle>
      </Styled.SubTitleBox>
      <Shorts slides={slideShorts} slidesPerView={2.1} />
    </Styled.DetailFeedShortsWrapper>
  );
};

export default DetailFeedShorts;
