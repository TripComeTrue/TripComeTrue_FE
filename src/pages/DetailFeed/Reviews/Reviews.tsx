import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import * as Styled from './Reviews.styles';
import BackArrow from '@/assets/back-arrow.svg';
import WriteIcon from '/images/write.svg';
import { Bubble, Filter, PlaceReviewCard, Text } from '@/components/common';
import { getPlaceReviews } from '@/apis/place';
import FormattedDate from '@/utils/formattedDate';
import ReviewsSkeleton from './ReviewsSkeleton';

const Reviews = () => {
  const { placeId } = useParams() as { placeId: string };
  const [selectedFilter, setSelectedFilter] = useState('최신순');
  const [onlyImage, setOnlyImage] = useState(false);
  const { data: placeReviewsData, refetch } = useQuery({
    queryKey: ['PlaceReviewsData'],
    queryFn: () => getPlaceReviews(placeId, selectedFilter, onlyImage),
  });

  useEffect(() => {
    refetch();
  }, [selectedFilter, onlyImage]);

  return (
    <div>
      <Styled.NavWrap>
        <Styled.NavBackBtn>
          <img src={BackArrow} alt="뒤로가기" />
        </Styled.NavBackBtn>
        <Styled.NavTitle>리뷰({placeReviewsData?.totalCount})</Styled.NavTitle>
        <Styled.WriteBtnWrapper>
          <Link to="/detailfeed/spot/1/review/write">
            <Styled.WriteBtn src={WriteIcon} alt="write icon" />
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
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        </Styled.Header>
        {placeReviewsData ? (
          <ul>
            {placeReviewsData.placeReviews.map(
              (placeReview: PlaceReviewData) => (
                <li key={placeReview.placeReviewId}>
                  <Link
                    to={`/detailfeed/spot/${placeId}/review/${placeReview.placeReviewId}/comment`}>
                    <PlaceReviewCard>
                      <PlaceReviewCard.PlaceHeader
                        nickname={placeReview.nickname}
                        profileUrl="https://source.unsplash.com/random"
                        writeDate={FormattedDate(placeReview.createdAt)}
                      />
                      <PlaceReviewCard.Main
                        imageUrl={placeReview.imageUrl}
                        content={placeReview.content}
                      />
                      <PlaceReviewCard.InteractionButtons
                        likeCount={placeReview.likeCount}
                        commentCount={placeReview.commentCount}
                      />
                    </PlaceReviewCard>
                  </Link>
                </li>
              ),
            )}
          </ul>
        ) : (
          <ReviewsSkeleton />
        )}
      </Styled.Container>
    </div>
  );
};

export default Reviews;
