import { Skeleton } from '@mui/material';
import MyPageReviewWrap from './MyPageReview.styles';
import * as Styled from './MyPageReviewItem.styles';
import * as Spots from '@/components/common/Spots/Spots.style';

function MyPageReviewSkeleton() {
  return (
    <MyPageReviewWrap>
      {[1, 2, 3, 4].map((item) => (
        <Styled.MyPageReviewItemWrap key={item}>
          <Spots.SliderImg>
            <Skeleton variant="rounded" sx={{ height: '100%' }} />
          </Spots.SliderImg>
          <Spots.SliderTitleSortLeft>
            <Skeleton width={100} height={16} />
            <Skeleton width={120} height={16} />
            <Skeleton width={40} height={16} />
          </Spots.SliderTitleSortLeft>
        </Styled.MyPageReviewItemWrap>
      ))}
    </MyPageReviewWrap>
  );
}

export default MyPageReviewSkeleton;
