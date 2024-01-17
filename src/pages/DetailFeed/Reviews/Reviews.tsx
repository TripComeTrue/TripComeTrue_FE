import { MouseEvent, useRef, useState } from 'react';
import * as Styled from './Reviews.styles';
import BackArrow from '@/assets/back-arrow.svg';
import WriteIcon from '/images/write.svg';
import { Avatar, Bubble, Text } from '@/components/common';
import LikeIcon from '/images/like.svg';
import CommentIcon from '/images/comment.svg';
import useClickOutside from '@/hooks/common/useClickOutside';

const Reviews = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('최신순');
  const filterModalRef = useRef(null);

  const onClickFilterModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const onClickFilter = (event: MouseEvent<HTMLDivElement>): void => {
    const target = event.target as HTMLDivElement;

    setSelectedFilter(target.innerText);
  };

  useClickOutside(filterModalRef, () => setIsOpen(false));

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
          <Styled.FilterToggle>
            <Styled.ToggleBtn onClick={onClickFilterModal}>
              <Text fontSize={12} fontWeight={600} color="gray">
                {selectedFilter} ▼
              </Text>
            </Styled.ToggleBtn>
            {isOpen && (
              <Styled.FilterModal ref={filterModalRef}>
                <Styled.Option
                  style={{ borderBottom: '1px solid #dcdcdc' }}
                  onClick={onClickFilter}>
                  <Text fontSize={12}>최신순</Text>
                </Styled.Option>
                <Styled.Option onClick={onClickFilter}>
                  <Text fontSize={12}>추천순</Text>
                </Styled.Option>
              </Styled.FilterModal>
            )}
          </Styled.FilterToggle>
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
