import { Skeleton } from '@mui/material';
import * as Styled from './ExchangeRate.styles';

const ExchangeRateSkeleton = () => {
  return (
    <Styled.SkeletonWrapper>
      <Skeleton variant="text" width={40} height={30} />
      <Skeleton variant="rounded" height={150} />
      <Styled.ExchangeRateSource>
        <Skeleton width={130} />
      </Styled.ExchangeRateSource>
    </Styled.SkeletonWrapper>
  );
};

export default ExchangeRateSkeleton;
