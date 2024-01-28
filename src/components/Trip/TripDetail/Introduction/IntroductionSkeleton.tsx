import { Skeleton } from '@mui/material';
import * as Styled from './Introduction.styles';

const IntroductionSkeleton = () => {
  return (
    <Styled.Container>
      <Styled.CreatorContainer>
        <Skeleton variant="circular" width="2rem" height="2rem" />
        <Skeleton
          variant="text"
          width="3.125rem"
          sx={{ fontSize: '0.875rem' }}
        />
      </Styled.CreatorContainer>

      <Styled.Main>
        <Styled.InfoContainer>
          <Skeleton
            variant="text"
            width="6.875rem"
            sx={{ fontSize: '0.875rem' }}
          />
          <Skeleton
            variant="text"
            width="14rem"
            sx={{ fontSize: '1.125rem' }}
          />
        </Styled.InfoContainer>
        <Skeleton variant="rounded" width="100%" height="4.75rem" />
        <Skeleton variant="rectangular" width="100%" height="3rem" />
      </Styled.Main>
      <Styled.HashTagList>
        <Skeleton variant="text" width="3.75rem" sx={{ fontSize: '1.25rem' }} />
        <Skeleton variant="text" width="3.75rem" sx={{ fontSize: '1.25rem' }} />
      </Styled.HashTagList>
    </Styled.Container>
  );
};

export default IntroductionSkeleton;
