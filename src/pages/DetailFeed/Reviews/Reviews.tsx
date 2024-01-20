import { useState } from 'react';
import * as Styled from './Reviews.styles';
import BackArrow from '@/assets/back-arrow.svg';
import WriteIcon from '/images/write.svg';
import { Bubble, Filter, Text } from '@/components/common';
import TripRecordCard from '@/components/common/TripRecordCard/TripRecordCard';

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
          <TripRecordCard>
            <TripRecordCard.TripHeader
              nickName="홍길동"
              profileUrl="https://source.unsplash.com/random"
              days="2023.12.25"
            />
            <TripRecordCard.Main
              imageUrl="https://source.unsplash.com/random"
              text="123123"
            />
            <TripRecordCard.InteractionButtons likeCount={0} commentCount={0} />
          </TripRecordCard>
        </ul>
      </Styled.Container>
    </div>
  );
};

export default Reviews;
