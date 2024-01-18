import { Avatar, Bubble, SubTitle, Text } from '../../common';
import WriteIcon from '/images/write.svg';
import * as Styled from './SpotReview.styles';
import LikeIcon from '/images/like.svg';
import CommentIcon from '/images/comment.svg';

const SpotReview = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <SubTitle>리뷰(14)</SubTitle>
        <Styled.WriteBtnWrapper>
          <Styled.WriteBtn src={WriteIcon} alt="write icon" />
          <Styled.BubbleWrapper>
            <Bubble direction="top">+ 2P</Bubble>
          </Styled.BubbleWrapper>
        </Styled.WriteBtnWrapper>
      </Styled.Header>

      <Styled.ReviewList>
        <Styled.ReviewItem>
          <Styled.ReviewInfo>
            <Styled.Creator>
              <Avatar src="https://source.unsplash.com/random" size={32} />
              <Text fontWeight={700}>아이고나죽네</Text>
            </Styled.Creator>
            <Text fontSize={10} fontWeight={700}>
              2023.12.15
            </Text>
          </Styled.ReviewInfo>
          <div>
            <Styled.ReviewImage
              src="https://source.unsplash.com/random"
              alt=""
            />
            <Text>
              강릉은 정말 아름다운 곳이라 많이 놀러오고 싶어요. 특히 안목해변은
              부서지는 파도와 푸른 하늘 모든게 조화가 대박이었다랄까요?? 한번쯤
              다들 꼭 들르셨으면
            </Text>
          </div>
          <Styled.InteractionButtons>
            <Styled.LikeButton>
              <img src={LikeIcon} alt="like icon" />
              <Text fontSize={12} fontWeight={700} color="gray">
                21
              </Text>
            </Styled.LikeButton>
            <Styled.CommentButton>
              <img src={CommentIcon} alt="comment icon" />
              <Text fontSize={12} fontWeight={700} color="gray">
                댓글 달기
              </Text>
            </Styled.CommentButton>
          </Styled.InteractionButtons>
        </Styled.ReviewItem>
        <Styled.ReviewItem>
          <Styled.ReviewInfo>
            <Styled.Creator>
              <Avatar src="https://source.unsplash.com/random" size={32} />
              <Text fontWeight={700}>아이고나죽네</Text>
            </Styled.Creator>
            <Text fontSize={10} fontWeight={700}>
              2023.12.15
            </Text>
          </Styled.ReviewInfo>
          <div>
            <Styled.ReviewImage
              src="https://source.unsplash.com/random"
              alt=""
            />
            <Text>
              강릉은 정말 아름다운 곳이라 많이 놀러오고 싶어요. 특히 안목해변은
              부서지는 파도와 푸른 하늘 모든게 조화가 대박이었다랄까요?? 한번쯤
              다들 꼭 들르셨으면
            </Text>
          </div>
          <Styled.InteractionButtons>
            <Styled.LikeButton>
              <img src={LikeIcon} alt="like icon" />
              <Text fontSize={12} fontWeight={700} color="gray">
                21
              </Text>
            </Styled.LikeButton>
            <Styled.CommentButton>
              <img src={CommentIcon} alt="comment icon" />
              <Text fontSize={12} fontWeight={700} color="gray">
                댓글 달기
              </Text>
            </Styled.CommentButton>
          </Styled.InteractionButtons>
        </Styled.ReviewItem>
      </Styled.ReviewList>

      <Styled.ButtonWrapper>
        <Styled.ReviewMoreButton>리뷰 더 보기</Styled.ReviewMoreButton>
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
};

export default SpotReview;
