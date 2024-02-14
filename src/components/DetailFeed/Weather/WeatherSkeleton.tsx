import { Skeleton } from '@mui/material';
import * as Styled from './Weather.styles';

const WeatherSkeleton = () => {
  return (
    <Styled.SkeletonWrapper>
      <Skeleton variant="text" width={31} height={30} />
      <Skeleton variant="rounded" height={96} />
      <Styled.WeatherSource>
        <Skeleton variant="text" width={110} height={15} />
      </Styled.WeatherSource>
    </Styled.SkeletonWrapper>
  );
};

export default WeatherSkeleton;
