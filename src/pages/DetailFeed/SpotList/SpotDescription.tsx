import { Text } from '@/components/common';
import * as Styled from './SpotDescription.styles';
import bookmark from '/bookmark.svg';
import comment from '/comment.svg';

const SpotDescription = () => {
  return (
    <>
      <Text fontWeight={700}>방콕 왕궁</Text>
      <Styled.SpotDescCountBox>
        <Styled.SpotContent>
          <img src={comment} alt="댓글 아이콘" />
          <Text fontSize={12} fontWeight={700} color="gray">
            8
          </Text>
        </Styled.SpotContent>
        <Styled.SpotContent>
          <img src={bookmark} alt="북마크 아이콘" />
          <Text fontSize={12} fontWeight={700} color="gray">
            55
          </Text>
        </Styled.SpotContent>
      </Styled.SpotDescCountBox>
    </>
  );
};

export default SpotDescription;
