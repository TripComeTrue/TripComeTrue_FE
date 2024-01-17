import { Avatar, Text } from '@/components/common';
import * as Styled from './TripComment.styles';
import CommentIcon from '/images/comment.svg';

const TripComment = () => {
  return (
    <Styled.Container>
      <Styled.InputWrapper>
        <Styled.CommentInput type="text" placeholder="댓글을 남겨주세요" />
      </Styled.InputWrapper>

      <div>
        <Styled.TotalComments>
          <Text fontSize={12} fontWeight={700} color="gray">
            댓글 (200)
          </Text>
        </Styled.TotalComments>
        <Styled.CommentList>
          <Styled.CommentItem>
            <Styled.CommentCard>
              <Styled.CommentInfo>
                <Styled.Creator>
                  <Avatar src="https://source.unsplash.com/random" size={32} />
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
      </div>
    </Styled.Container>
  );
};

export default TripComment;
