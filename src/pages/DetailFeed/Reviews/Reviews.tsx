import { Fragment, useEffect, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import * as Styled from './Reviews.styles';
import BackArrow from '@/assets/back-arrow.svg';
import WriteIcon from '/images/write.svg';
import {
  Bubble,
  Filter,
  PlaceReviewCard,
  Spinners,
  Text,
} from '@/components/common';
import { getPlaceReviews } from '@/apis/place';
import FormattedDate from '@/utils/formattedDate';
import ReviewsSkeleton from './ReviewsSkeleton';

const Reviews = () => {
  const navigate = useNavigate();
  const { placeId } = useParams() as { placeId: string };
  const [sort, setSort] = useState('최신순');
  const [onlyImage, setOnlyImage] = useState(false);
  const [ref, inView] = useInView();
  const {
    data: placeReviewsData,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ['PlaceReviewsInfiniteData'],
    queryFn: ({ pageParam }) =>
      getPlaceReviews({ placeId, size: 10, sort, onlyImage, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      return !lastPage.isLast ? lastPageParam + 1 : null;
    },
  });

  useEffect(() => {
    refetch();
  }, [sort, onlyImage]);

  useEffect(() => {
    if (hasNextPage && inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div>
      <Styled.NavWrap>
        <Styled.NavBackBtn onClick={() => navigate(-1)}>
          <img src={BackArrow} alt="뒤로가기" />
        </Styled.NavBackBtn>
        <Styled.NavTitle>
          리뷰({placeReviewsData?.pages[0].totalCount})
        </Styled.NavTitle>
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
        {placeReviewsData ? (
          <>
            <ul>
              {placeReviewsData?.pages.map((page, index) => (
                <Fragment key={index}>
                  {page.placeReviews.map((placeReview) => (
                    <li key={placeReview.placeReviewId}>
                      <Link
                        to={`/detailfeed/spot/${placeId}/review/${placeReview.placeReviewId}/comment`}>
                        <PlaceReviewCard>
                          <PlaceReviewCard.PlaceHeader
                            nickname={placeReview.nickname}
                            profileUrl={placeReview.profileUrl}
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
                  ))}
                </Fragment>
              ))}
            </ul>
            {isFetchingNextPage ? <Spinners /> : <div ref={ref} />}
          </>
        ) : (
          <ReviewsSkeleton />
        )}
      </Styled.Container>
    </div>
  );
};

export default Reviews;
