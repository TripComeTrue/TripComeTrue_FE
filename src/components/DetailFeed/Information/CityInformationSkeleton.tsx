import { Skeleton } from '@mui/material';
import * as Styled from './CityInformation.styles';

const CityInformationSkeleton = () => {
  return (
    <Styled.SkeletonWrapper>
      <Skeleton variant="text" width={100} height={30} />
      <Styled.SkeletonBox>
        <Skeleton variant="rounded" width={120} height={120} />
        <Skeleton variant="rounded" width={120} height={120} />
      </Styled.SkeletonBox>
    </Styled.SkeletonWrapper>
  );
};

export default CityInformationSkeleton;
