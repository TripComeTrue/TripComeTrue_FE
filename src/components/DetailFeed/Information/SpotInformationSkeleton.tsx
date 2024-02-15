import { Skeleton } from '@mui/material';
import * as Styled from './SpotInformation.styles';

const SpotInformationSkeleton = () => {
  return (
    <Styled.SpotInfoWrapper>
      <Skeleton variant="text" width={65} height={30} />
      <Skeleton variant="rounded" height={216} />
      <Skeleton variant="rounded" height={35} />
    </Styled.SpotInfoWrapper>
  );
};

export default SpotInformationSkeleton;
