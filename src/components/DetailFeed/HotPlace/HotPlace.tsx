import { SubTitle } from '@/components/common';
import starIcon from '/starIcon.svg';
import * as Styled from './HotPlace.styles';
import osaka from '/osaka.png';
import Spots from '@/components/common/Spots/Spots';

const PLACE_DATA = [
  { postImg: osaka, bookmark: 20, postTitle: '방콕 왕궁', reviews: 30 },
  { postImg: osaka, bookmark: 20, postTitle: '왓 포', reviews: 30 },
  { postImg: osaka, bookmark: 20, postTitle: '아룬 사원', reviews: 30 },
];

const HotPlace = () => {
  return (
    <div>
      <Styled.SubTitleBox>
        <SubTitle fontSize={18} variant="more" icon={starIcon}>
          요즘 뜨는 핫플
        </SubTitle>
      </Styled.SubTitleBox>
      <Styled.PlaceBox>
        <Spots sort="space" creator={PLACE_DATA} />
      </Styled.PlaceBox>
    </div>
  );
};

export default HotPlace;
