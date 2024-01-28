import { Skeleton } from '@mui/material';
import * as Styled from './CardList.styles';

const CardListSkeleton = () => {
  return (
    <Styled.Container>
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton
          key={index}
          variant="rounded"
          height="9.5rem"
          sx={{ borderRadius: '0.625rem', minWidth: '9.5rem' }}
        />
      ))}
    </Styled.Container>
  );
};

export default CardListSkeleton;
