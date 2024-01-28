import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import * as Styled from './Reviews.styles';
import BackArrow from '@/assets/back-arrow.svg';
import WriteIcon from '/images/write.svg';
import { Bubble, Filter, PlaceReviewCard, Text } from '@/components/common';
import { getPlaceReviews } from '@/apis/place';
import FormattedDate from '@/utils/formattedDate';

const Reviews = () => {
  const { placeId } = useParams() as { placeId: string };
  const [sort, setSort] = useState('최신순');
  const [onlyImage, setOnlyImage] = useState(false);
  const {
    data: placeReviewsData = {
      isFirst: true,
      isLast: true,
      nowPageNumber: 0,
      placeReviews: [],
      totalCount: 0,
    },
    refetch,
  } = useQuery({
    queryKey: ['PlaceReviewsData'],
    queryFn: () => getPlaceReviews({ placeId, size: 10, sort, onlyImage }),
  });

  useEffect(() => {
    refetch();
  }, [sort, onlyImage]);

  return (
    <div>
      <Styled.NavWrap>
        <Styled.NavBackBtn>
          <img src={BackArrow} alt="뒤로가기" />
        </Styled.NavBackBtn>
        <Styled.NavTitle>리뷰({placeReviewsData.totalCount})</Styled.NavTitle>
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
        <ul>
          {placeReviewsData.placeReviews.map((data: PlaceReviewData) => (
            <Link
              key={data.placeReviewId}
              to={`/detailfeed/spot/${placeId}/review/${data.placeReviewId}/comment`}>
              <PlaceReviewCard>
                <PlaceReviewCard.PlaceHeader
                  nickname={data.nickname}
                  profileUrl={data.profileUrl}
                  writeDate={FormattedDate(data.createdAt)}
                />
                <PlaceReviewCard.Main
                  imageUrl={data.imageUrl}
                  content={data.content}
                />
                <PlaceReviewCard.InteractionButtons
                  likeCount={data.likeCount}
                  commentCount={data.commentCount}
                />
              </PlaceReviewCard>
            </Link>
          ))}
        </ul>
      </Styled.Container>
    </div>
  );
};

export default Reviews;
