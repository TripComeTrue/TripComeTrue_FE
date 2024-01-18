import { SimpleNav, Text } from '@/components/common';
import Container from '@/components/common/Container';
import HASH_TAGS from '@/constants/hashtags';
import * as Styled from './TripPlanHashtagsList.styles';
import { TripPlanHashProps } from './TripPlanHashtagsList.types';

function TripPlanHashtags({ selectedTags }: TripPlanHashProps) {
  return (
    <>
      <SimpleNav>어떤 여행이었나요?</SimpleNav>
      <Container>
        <Styled.TripPlanHashWrap>
          <Text fontSize={14} fontWeight={700}>
            누구와 함께 떠난 여행인가요?
          </Text>
          <Styled.TripPlanHashTagsWrap>
            {HASH_TAGS.filter((item) => item.type === 'with').map((hashTag) => (
              <Styled.TripPlanTagBtn
                size="sm"
                key={hashTag.tag}
                variants={
                  selectedTags?.includes(hashTag.tag) ? 'primary' : 'gray'
                }>
                {hashTag.name}
              </Styled.TripPlanTagBtn>
            ))}
          </Styled.TripPlanHashTagsWrap>
        </Styled.TripPlanHashWrap>

        <Styled.TripPlanHashWrap>
          <Text fontSize={14} fontWeight={700}>
            어떤 형태의 여행인가요?
          </Text>
          <Styled.TripPlanHashTagsWrap>
            {HASH_TAGS.filter((item) => item.type === 'type').map((hashTag) => (
              <Styled.TripPlanTagBtn
                size="sm"
                key={hashTag.tag}
                variants={
                  selectedTags?.includes(hashTag.tag) ? 'primary' : 'gray'
                }>
                {hashTag.name}
              </Styled.TripPlanTagBtn>
            ))}
          </Styled.TripPlanHashTagsWrap>
        </Styled.TripPlanHashWrap>

        <Styled.TripPlanHashWrap>
          <Text fontSize={14} fontWeight={700}>
            또 다른 특징이 있나요?
          </Text>
          <Styled.TripPlanHashTagsWrap>
            {HASH_TAGS.filter((item) => item.type === 'other').map(
              (hashTag) => (
                <Styled.TripPlanTagBtn
                  size="sm"
                  key={hashTag.tag}
                  variants={
                    selectedTags?.includes(hashTag.tag) ? 'primary' : 'gray'
                  }>
                  {hashTag.name}
                </Styled.TripPlanTagBtn>
              ),
            )}
          </Styled.TripPlanHashTagsWrap>
        </Styled.TripPlanHashWrap>
      </Container>
    </>
  );
}

export default TripPlanHashtags;
