import { Suspense, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as Styled from './Reviews.styles';
import BackArrow from '@/assets/back-arrow.svg';
import WriteIcon from '/images/write.svg';
import { Bubble, Filter, RetryErrorBoundary, Text } from '@/components/common';

import ReviewsSkeleton from './ReviewsSkeleton';
import { ReviewList } from '@/components/DetailFeed';

const Reviews = () => {
  const navigate = useNavigate();
  const { placeId } = useParams() as { placeId: string };
  const [sort, setSort] = useState('최신순');
  const [onlyImage, setOnlyImage] = useState(false);

  return (
    <div>
      <Styled.NavWrap>
        <Styled.NavBackBtn onClick={() => navigate(-1)}>
          <img src={BackArrow} alt="뒤로가기" />
        </Styled.NavBackBtn>
        <Styled.NavTitle>리뷰</Styled.NavTitle>
        <Styled.WriteBtnWrapper>
          <Link to={`/detailfeed/spot/${placeId}/review/write`}>
            <Styled.WriteBtn src={WriteIcon} alt="리뷰 작성 아이콘" />
          </Link>
          <Styled.BubbleWrapper>
            <Bubble direction="top">+ 2P</Bubble>
          </Styled.BubbleWrapper>
        </Styled.WriteBtnWrapper>
      </Styled.NavWrap>
      <Styled.Container>
        <Styled.Header>
          <Styled.CheckBoxContainer>
            <input type="checkbox" onClick={() => setOnlyImage(!onlyImage)} />
            <Text fontSize={12} fontWeight={600} color="gray">
              포토 리뷰만
            </Text>
          </Styled.CheckBoxContainer>

          <Filter
            first="최신순"
            second="추천순"
            selectedFilter={sort}
            setSelectedFilter={setSort}
          />
        </Styled.Header>

        <RetryErrorBoundary>
          <Suspense fallback={<ReviewsSkeleton />}>
            <ReviewList sort={sort} onlyImage={onlyImage} />
          </Suspense>
        </RetryErrorBoundary>
      </Styled.Container>
    </div>
  );
};

export default Reviews;
