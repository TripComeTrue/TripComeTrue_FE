import { Text } from '..';
import * as Styled from './EmptyContents.styles';
import empty from '/empty.svg';

const EmptyContents = ({ contentType }: { contentType?: 'review' }) => {
  const text1 = contentType
    ? '여행지의 첫번째 리뷰를 작성해 주세요!'
    : '콘텐츠 준비 중입니다';
  const text2 = contentType
    ? '리뷰 작성시 트립포인트 최대 2P를 드려요'
    : '여러분의 소중한 후기를 기다리고 있어요!';
  return (
    <Styled.EmptyContentsWrapper>
      <img src={empty} alt="느낌표 아이콘" />
      <Text color="gray" fontWeight={700}>
        {text1}
      </Text>
      <Text fontSize={10} color="gray">
        {text2}
      </Text>
    </Styled.EmptyContentsWrapper>
  );
};

export default EmptyContents;
