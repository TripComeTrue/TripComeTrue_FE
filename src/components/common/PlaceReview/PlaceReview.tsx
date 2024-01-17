import { Bubble, SubTitle } from '..';
import WriteIcon from '/images/write.svg';
import * as Styled from './PlaceReview.styles';

const PlaceReview = () => {
  return (
    <div>
      <Styled.Header>
        <SubTitle>리뷰(14)</SubTitle>
        <Styled.WriteContainer>
          <button type="button">
            <img src={WriteIcon} alt="write icon" />
          </button>
          <Styled.BubbleWrapper>
            <Bubble>+ 2P</Bubble>
          </Styled.BubbleWrapper>
        </Styled.WriteContainer>
      </Styled.Header>
    </div>
  );
};

export default PlaceReview;
