import { Filter } from '@/components/DetailFeed';
import SpotListNav from '@/components/common/Navigation/SpotListNav';
import SpotDescription from './SpotDescription';
import * as Styled from './SpotList.styles';
import bangkok from '/bangkok.png';

const SpotList = () => {
  return (
    <div>
      <SpotListNav>방콕</SpotListNav>
      <Filter orderOption="리뷰순" />
      <Styled.SpotListWrapper>
        <Styled.SpotBox>
          <Styled.SpotImg src={bangkok} alt="방콕" />
          <Styled.SpotDescription>
            <SpotDescription />
          </Styled.SpotDescription>
        </Styled.SpotBox>
        <Styled.SpotBox>
          <Styled.SpotImg src={bangkok} alt="방콕" />
          <Styled.SpotDescription>
            <SpotDescription />
          </Styled.SpotDescription>
        </Styled.SpotBox>
      </Styled.SpotListWrapper>
    </div>
  );
};

export default SpotList;
