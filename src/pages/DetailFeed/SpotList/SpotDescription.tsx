import { Text } from '@/components/common';
import * as Styled from './SpotDescription.styles';
import bookmark from '/bookmark.svg';
import comment from '/comment.svg';

const SpotDescription = ({ spot }: { spot: SpotListDataType }) => {
  const { placeName, storedCount, commentTotal } = spot;
  return (
    <>
      <Text fontWeight={700}>{placeName}</Text>
      <Styled.SpotDescCountBox>
        <Styled.SpotContent>
          <img src={comment} alt="댓글 아이콘" />
          <Text fontSize={12} fontWeight={700} color="gray">
            {commentTotal}
          </Text>
        </Styled.SpotContent>
        <Styled.SpotContent>
          <img src={bookmark} alt="북마크 아이콘" />
          <Text fontSize={12} fontWeight={700} color="gray">
            {storedCount}
          </Text>
        </Styled.SpotContent>
      </Styled.SpotDescCountBox>
    </>
  );
};

export default SpotDescription;
