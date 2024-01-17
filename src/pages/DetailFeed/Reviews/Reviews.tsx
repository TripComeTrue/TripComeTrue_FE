import { useState } from 'react';

import * as Styled from './Reviews.styles';
import BackArrow from '@/assets/back-arrow.svg';
import WriteIcon from '/images/write.svg';
import { Avatar, Bubble, Filter, Text } from '@/components/common';
import LikeIcon from '/images/like.svg';
import CommentIcon from '/images/comment.svg';

const Reviews = () => {
  const [selectedFilter, setSelectedFilter] = useState('최신순');

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
        <Styled.Header>
          <Styled.CheckBoxContainer>
            <input type="checkbox" />
            <Text fontSize={12} fontWeight={600} color="gray">
              포토 리뷰만
            </Text>
          </Styled.CheckBoxContainer>

          <Filter
            first="최신순"
            second="보관순"
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        </Styled.Header>
        <ul>
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
                강릉은 정말 아름다운 곳이라 많이 놀러오고 싶어요. 특히
                안목해변은 부서지는 파도와 푸른 하늘 모든게 조화가
                대박이었다랄까요?? 한번쯤 다들 꼭 들르셨으면
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
                강릉은 정말 아름다운 곳이라 많이 놀러오고 싶어요. 특히
                안목해변은 부서지는 파도와 푸른 하늘 모든게 조화가
                대박이었다랄까요?? 한번쯤 다들 꼭 들르셨으면
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
                강릉은 정말 아름다운 곳이라 많이 놀러오고 싶어요. 특히
                안목해변은 부서지는 파도와 푸른 하늘 모든게 조화가
                대박이었다랄까요?? 한번쯤 다들 꼭 들르셨으면
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
                강릉은 정말 아름다운 곳이라 많이 놀러오고 싶어요. 특히
                안목해변은 부서지는 파도와 푸른 하늘 모든게 조화가
                대박이었다랄까요?? 한번쯤 다들 꼭 들르셨으면
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
        </ul>
      </Styled.Container>
    </div>
  );
};

export default Reviews;
