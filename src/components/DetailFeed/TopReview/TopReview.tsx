import { SubTitle } from '@/components/common';
import * as Styled from './TopReview.styles';
import starIcon from '/starIcon.svg';

const TopReview = () => {
  return (
    <Styled.TopReviewWrapper>
      <SubTitle fontSize={18} icon={starIcon} variant="more">
        방콕 여행 후기 TOP 3
      </SubTitle>
    </Styled.TopReviewWrapper>
  );
};

export default TopReview;
