/* eslint-disable react/no-array-index-key */
import { Skeleton } from '@mui/material';
import MyPagePlanWrap from './MyPagePlan.styles';
import * as Styled from './MyPagePlanItem.styles';

function MyPagePlanSkeleton() {
  return (
    <MyPagePlanWrap>
      {[1, 2, 3, 4].map((item) => (
        <Styled.MyPagePlanItemWrap key={item}>
          <div>
            <Skeleton variant="text" width={100} height={21} />
            <Skeleton variant="text" width={80} height={20} />
            <Skeleton variant="text" width={120} height={20} />
          </div>
        </Styled.MyPagePlanItemWrap>
      ))}
    </MyPagePlanWrap>
  );
}

export default MyPagePlanSkeleton;
