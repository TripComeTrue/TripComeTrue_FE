import { Filter } from '@/components/DetailFeed';
import { SimpleNav } from '@/components/common';
import * as Styled from './SpotList.styles';
import bangkok from '/bangkok.png';
import SpotDescription from './SpotDescription';

const SpotList = () => {
  return (
    <div>
      <SimpleNav>방콕</SimpleNav>
      <Filter />
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
