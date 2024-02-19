import { Skeleton } from '@mui/material';
import * as Styled from './HotPlace.styles';

const HotPlaceSkeleton = () => {
  return (
    <Styled.HotPlaceSkeletonWrapper>
      <Skeleton variant="text" height={30} />
      <Styled.HotPlaceSkeletonBox>
        {[1, 2].map((item) => (
          <Styled.HotPlaceSkeleton key={item}>
            <Skeleton variant="rounded" width={144} height={144} />
            <Styled.ItemBottom>
              <Skeleton variant="text" width={70} />
              <Skeleton variant="text" width={25} />
            </Styled.ItemBottom>
          </Styled.HotPlaceSkeleton>
        ))}
      </Styled.HotPlaceSkeletonBox>
    </Styled.HotPlaceSkeletonWrapper>
  );
};

export default HotPlaceSkeleton;
