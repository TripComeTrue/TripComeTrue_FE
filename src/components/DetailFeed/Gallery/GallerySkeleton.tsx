import { Skeleton } from '@mui/material';
import * as Styled from './Gallery.styles';

const GallerySkeleton = () => {
  return (
    <Styled.GellaryWrapper>
      <Styled.SubtitleBox>
        <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
      </Styled.SubtitleBox>
      <Styled.GallerySkeletonBox>
        {[1, 2].map((item) => (
          <Skeleton key={item} variant="rounded" width={144} height={144} />
        ))}
      </Styled.GallerySkeletonBox>
    </Styled.GellaryWrapper>
  );
};

export default GallerySkeleton;
