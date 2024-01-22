import * as Styled from './ReviewComment.styles';
import BackArrow from '@/assets/back-arrow.svg';
import WriteIcon from '/images/write.svg';
import { Avatar, Bubble, Text } from '@/components/common';
import LikeIcon from '/images/like.svg';
import CommentIcon from '/images/comment.svg';

const ReviewComment = () => {
  return (
    <div>
      <Styled.NavWrap>
        <Styled.NavBackBtn>
          <img src={BackArrow} alt="뒤로가기" />
        </Styled.NavBackBtn>
        <Styled.NavTitle>리뷰(14)</Styled.NavTitle>
        <Styled.WriteBtnWrapper>
          <Styled.WriteBtn src={WriteIcon} alt="write icon" />
          <Styled.BubbleWrapper>
            <Bubble direction="top">+ 2P</Bubble>
          </Styled.BubbleWrapper>
        </Styled.WriteBtnWrapper>
      </Styled.NavWrap>
      <Styled.Container>
        <Styled.ReviewContainer>
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
        </Styled.ReviewContainer>

        <Styled.CommentContainer>
          <Styled.CommentTitle>댓글 0</Styled.CommentTitle>
          {/* <Styled.EmptyComment>
            <Styled.EmptyText>첫 댓글을 달아보세요</Styled.EmptyText>
          </Styled.EmptyComment> */}
          <Styled.CommentList>
            <Styled.CommentItem>
              <Styled.CommentCard>
                <Styled.CommentInfo>
                  <Styled.Creator>
                    <Avatar
                      src="https://source.unsplash.com/random"
                      size={32}
                    />
                    <Text fontWeight={700}>아이고나죽네</Text>
                  </Styled.Creator>
                  <Text fontSize={10} fontWeight={700}>
                    2023.12.15
                  </Text>
                </Styled.CommentInfo>
                <Text>빠니보틀님 ㅜㅜ 팬이에요 좋은 정보 감사드립니다!!!!</Text>
                <Styled.ReplyButton>
                  <img src={CommentIcon} alt="comment icon" />
                  <Text fontSize={10} color="gray" fontWeight={600}>
                    답글 달기
                  </Text>
                </Styled.ReplyButton>
              </Styled.CommentCard>

              <Styled.ReplyList>
                <Styled.ReplyItem>
                  <Styled.ReplyCard>
                    <Styled.CommentInfo>
                      <Styled.Creator>
                        <Avatar
                          src="https://source.unsplash.com/random"
                          size={32}
                        />
                        <Text fontWeight={700}>아이고나죽네</Text>
                      </Styled.Creator>
                      <Text fontSize={10} fontWeight={700}>
                        2023.12.15
                      </Text>
                    </Styled.CommentInfo>
                    <Text>
                      빠니보틀님 ㅜㅜ 팬이에요 좋은 정보 감사드립니다!!!!
                    </Text>
                    <Styled.ReplyButton>
                      <img src={CommentIcon} alt="comment icon" />
                      <Text fontSize={10} color="gray" fontWeight={600}>
                        답글 달기
                      </Text>
                    </Styled.ReplyButton>
                  </Styled.ReplyCard>
                </Styled.ReplyItem>
              </Styled.ReplyList>
            </Styled.CommentItem>
          </Styled.CommentList>
        </Styled.CommentContainer>
      </Styled.Container>
      <Styled.InputWrapper>
        <Styled.CommentInput type="text" placeholder="댓글을 남겨주세요" />
      </Styled.InputWrapper>
    </div>
  );
};

export default ReviewComment;
