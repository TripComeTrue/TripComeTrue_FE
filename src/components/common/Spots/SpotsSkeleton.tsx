import { Skeleton } from '@mui/material';
import * as Styled from './SpotsSkeleton.styles';

function SpotsSkeleton() {
  return (
    <Styled.SpotsSkeletonWrap>
      <Styled.SpotsSkeletonContent>
        {[1, 2, 3].map((item) => (
          <Styled.SpotsSkeletonItem key={item}>
            <Skeleton variant="rounded" width={152} height={152} />
            <Skeleton variant="text" width={120} />
          </Styled.SpotsSkeletonItem>
        ))}
      </Styled.SpotsSkeletonContent>
    </Styled.SpotsSkeletonWrap>
  );
}

export default SpotsSkeleton;
