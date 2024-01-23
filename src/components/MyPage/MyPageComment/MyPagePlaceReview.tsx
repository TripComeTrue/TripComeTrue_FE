import { useNavigate } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getMyPlaceReview } from '@/apis/mypage';
import { PlaceReviewCard } from '@/components/common';
import dateToString from './MyPagePlaceReview.utils';

function MyPagePlaceReview() {
  const navigate = useNavigate();
  const { data } = useSuspenseQuery({
    queryKey: ['mypage/place'],
    queryFn: getMyPlaceReview,
  });

  return (
    <div>
      {data.data.placeReviews.map((item) => (
        <PlaceReviewCard key={item.placeReviewId}>
          <PlaceReviewCard.MyPageHeader
            nickname={item.nickname}
            profileUrl={item.profileUrl}
            writeDate={`${dateToString(item.createdAt)}`}>
            <PlaceReviewCard.MyPageHeader.ActionsModal
              onClickModify={() =>
                navigate(
                  `/detailfeed/spot/${1}/review/${item.placeReviewId}/edit`,
                )
              }
              onClickDelete={() => {}}
            />
          </PlaceReviewCard.MyPageHeader>
          <PlaceReviewCard.Main
            imageUrl={item?.imageUrl ?? ''}
            content={item.content}
          />
          <PlaceReviewCard.InteractionButtons
            likeCount={item.likeCount}
            commentCount={item.commentCount}
          />
        </PlaceReviewCard>
      ))}
    </div>
  );
}

export default MyPagePlaceReview;
