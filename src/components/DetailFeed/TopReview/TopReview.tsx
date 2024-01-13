import { SubTitle } from '@/components/common';
import starIcon from '/starIcon.svg';

const TopReview = () => {
  return (
    <div>
      <SubTitle fontSize={18} icon={starIcon} variant="more">
        방콕 여행 후기 TOP 3
      </SubTitle>
    </div>
  );
};

export default TopReview;
