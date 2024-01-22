import { Bubble, Button, SubTitle, Text } from '@/components/common';
import * as Styled from './ReviewAlert.styles';
import RatingIcon from '/images/rating.svg';

const ReviewAlert = () => {
  return (
    <Styled.Container>
      <SubTitle fontSize={14}>이 여행 후기의 리뷰(4)</SubTitle>

      <Styled.LastReviewContainer>
        <Styled.ImageWrapper>
          <Styled.LastReviewImage src="https://source.unsplash.com/random" />
        </Styled.ImageWrapper>
        <Styled.LastReviewContents>
          <Styled.InfoContainer>
            <Text fontSize={12} fontWeight={700}>
              여행이 조아
            </Text>
            <Styled.Divider>&nbsp;|&nbsp;</Styled.Divider>
            <div>
              <img src={RatingIcon} alt="rating icon" />
              <Text fontSize={12} fontWeight={700}>
                4.8
              </Text>
            </div>
          </Styled.InfoContainer>
          <Text fontSize={12}>
            여정에 나온 일정을 거의 그대로 따라 여행을 다녀왔습니다. 동선이 잘
            짜여 있어서 이동할 때 정말 편했습니다. 진짜 고민하지...
          </Text>
        </Styled.LastReviewContents>
      </Styled.LastReviewContainer>

      <Styled.RatingContainer>
        <Styled.RatingCustom
          name="half-rating"
          defaultValue={0}
          precision={0.5}
        />
        <Text fontSize={12} fontWeight={700} color="gray">
          이 일정이 도움이 되셨나요?
        </Text>
      </Styled.RatingContainer>
      <Styled.BubbleWrapper>
        <Bubble>+ 10P</Bubble>
      </Styled.BubbleWrapper>
      <Button variants="primary" size="lg">
        리뷰 작성하기
      </Button>
    </Styled.Container>
  );
};

export default ReviewAlert;
